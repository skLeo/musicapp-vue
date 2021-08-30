<template>
	<TopNav />
	<SwiperNav />
	<MenuNav :menuLists="menuLists"/>
</template>

<script>
// @ is an alias to /src
import TopNav from "@/components/TopNav.vue";
import SwiperNav from "@/components/SwiperNav.vue";
import MenuNav from "@/components/MenuNav.vue";

import {ref} from 'vue';

export default {
	name: "Home",
	components: {
		TopNav,
		SwiperNav,
		MenuNav,
	},
	setup() {
		const menuLists = ref([
			{ iconName: "icon-meirituijian", label: "每日推荐" },
			{ iconName: "icon-sirenfm-copy-copy", label: "私人FM" },
			{ iconName: "icon-gedan1", label: "歌单" },
			{ iconName: "icon-paihangbang", label: "排行榜" },
			{
				iconName: "icon-zhibobofangshexiangjiguankanxianxing",
				label: "直播",
			},
			{ iconName: "icon-shuzizhuanjibiaoshi", label: "数字专辑" },
			{ iconName: "icon-tubiaozhizuomoban-", label: "专注冥想" },
			{ iconName: "icon-Kge", label: "歌房" },
			{ iconName: "icon-youxi", label: "游戏专区" },
		]);

		return { menuLists };
	},
};
</script>

<style lang="less" scoped></style>
