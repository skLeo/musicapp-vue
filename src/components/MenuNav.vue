<template>
	<div class="wrapper">
		<div class="menu-content">
			<div class="menuList" v-for="(icon, i) in menuLists" :key="i">
				<div class="menuContent">
					<IconFont
						class="menuIcon"
						style="color: red; font-size: 0.55rem"
						:iconName="icon.iconName"
					/>
				</div>
				<span class="list-label">{{ icon.label }}</span>
			</div>
		</div>
	</div>
</template>

<script>
import IconFont from "@/components/IconFont.vue";

export default {
	name: "MenuNav",
	components: {
		IconFont,
	},
	props: {
		menuLists: Array,
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
				background-color: pink;
				width: 1rem;
				height: 1rem;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 50%;
			}
			.list-label {
				font-size: 0.25rem;
				margin-top: 0.1rem;
			}
		}
	}
}
</style>
