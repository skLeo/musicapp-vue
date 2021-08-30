<template>
	<div class="recommend-wrapper">
		<div class="recommend-top">
			<span class="top-title">推荐歌单</span>
			<span class="more-btn">更多</span>
		</div>
		<div class="recommend-container">
			<div class="recommend-content">
				<div
					class="recommend-list"
					v-for="(
						{ picUrl, copywriter, name, playCount }, i
					) in lists"
					:key="i"
				>
					<img class="list-img" :src="picUrl" :alt="copywriter" />
					<span class="list-title">{{ name }}</span>
					<div class="play-count">
						<IconFont
							class="play-icon"
							iconName="icon-bofangsanjiaoxing"
						/>
						<span class="play-number">{{
							_getPlayCount(playCount)
						}}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import IconFont from "@/components/Home/IconFont.vue";
import { GET_PERSONALIZED } from "@/axios";
import { ref, onMounted } from "vue";

export default {
	name: "RecommendList",
	components: {
		IconFont,
	},
	setup() {
		const lists = ref([]);

		const _getPlayCount = (count) => {
			const map = ["万", "亿", "万亿"];
			const newCount = String(count).replace(/(?=(\B)(\d{4})+$)/g, "$1,");
			const newCountAry = newCount.split(",");

			if (newCountAry.length === 1) {
				return newCountAry[0];
			} else if (newCountAry.length > 1) {
				return `${newCountAry[0]}${map[newCountAry.length - 2]}`;
			}
		};

		const updateLists = ({ result }) => {
			lists.value = result;
		};

		onMounted(async () => {
			await GET_PERSONALIZED(6, updateLists);
		});

		return { lists, _getPlayCount };
	},
};
</script>

<style lang="less" scoped>
.recommend-wrapper {
	margin-top: 0.2rem;
	.recommend-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.top-title {
			font-weight: bold;
			font-size: 0.4rem;
		}
		.more-btn {
			font-size: 0.25rem;
			padding: 0.01rem 0.16rem;
			border: 1px solid #9999993d;
			border-radius: 0.5rem;
			display: flex;
			align-items: center;
			justify-content: center;
			&::after {
				content: "";
				width: 0.09rem;
				height: 0.09rem;
				border: 1px solid #000;
				border-bottom-color: transparent;
				border-left-color: transparent;
				transform: rotate(45deg);
			}
		}
	}
	.recommend-container {
		max-width: 100%;
		overflow-x: scroll;
		overflow-y: hidden;
		-webkit-overflow-scrolling: touch !important;
		&::-webkit-scrollbar {
			display: none !important;
			width: 0 !important;
			height: 0 !important;
			background-color: transparent;
		}
		&::-webkit-scrollbar-thumb {
			display: none !important;
		}
		.recommend-content {
			display: flex;
			.recommend-list {
				width: 2rem;
				position: relative;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
                flex: none;
                margin-right: 0.2rem;
				.list-img {
					width: 100%;
					border-radius: 0.2rem;
				}
				.list-title {
					font-size: 0.25rem;
					line-height: 0.35rem;
					text-align: left;
					margin-top: 0.05rem;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				.play-count {
					position: absolute;
					position: absolute;
					top: 0.08rem;
					right: 0.08rem;
					font-size: 0.2rem;
					color: #fff;
					padding: 0.01rem 0.1rem;
					background-color: rgba(0, 0, 0, 0.5);
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 0.2rem;
					font-weight: 600;
					.play-icon {
						color: #fff;
						margin-right: -0.025rem;
					}
				}
			}
		}
	}
}
</style>
