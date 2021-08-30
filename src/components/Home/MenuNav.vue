<template>
	<div class="wrapper">
		<div class="menu-content">
			<div
				class="menuList"
				v-for="({ iconUrl, id, name }, i) in icons"
				:key="id"
			>
				<div class="menuContent" :style="{ zIndex: 100 - i }">
					<div
						class="menuImg"
						:style="`background-image: url(${iconUrl})`"
					></div>
					<span class="currentDate" v-if="id === -1">{{ currentDay }}</span>
				</div>
				<span class="list-label">{{ name }}</span>
			</div>
		</div>
	</div>
</template>

<script>
import { GET_GRAGON_BALL } from "@/axios";
import { onMounted, ref } from "vue";

export default {
	name: "MenuNav",
	props: {
		menuLists: Array,
	},
	setup() {
		const icons = ref([]);
		const currentDay = ref(new Date().getDate());

		const updateIcons = ({ data }) => {
			icons.value = data;
		};

		onMounted(async () => {
			await GET_GRAGON_BALL("", updateIcons);
		});

		return { icons, currentDay };
	},
};
</script>

<style lang="less" scoped>
.wrapper {
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
	.menu-content {
		display: flex;
		margin-top: 0.3rem;
		.menuList {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-right: 0.4rem;
			flex: none;
			.menuContent {
				width: 1rem;
				height: 1rem;
				border-radius: 50%;
				overflow: hidden;
				background-color: pink;
				position: relative;
				.menuImg {
					height: 100%;
					background-size: cover;
					filter: drop-shadow(1rem 0px 0px red);
					transform: translateX(-1rem);
				}
				.currentDate {
					position: absolute;
					font-size: 0.24rem;
					color: #fff;
					font-weight: 700;
					width: 100%;
					height: 100%;
					text-align: center;
					line-height: 1.15rem;
					top: 0;
					left: 0;
				}
			}
			.list-label {
				font-size: 0.25rem;
				margin-top: 0.1rem;
			}
		}
	}
}
</style>
