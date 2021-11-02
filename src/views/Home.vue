<template>
	<TopNav />
	<SwiperNav />
	<MenuNav />
	<RecommendList />
</template>

<script>
// @ is an alias to /src
import TopNav from "@/components/Home/TopNav.vue";
import SwiperNav from "@/components/Home/SwiperNav.vue";
import MenuNav from "@/components/Home/MenuNav.vue";
import RecommendList from "@/components/Home/RecommendList.vue";

export default {
	name: "Home",
	components: {
		TopNav,
		SwiperNav,
		MenuNav,
		RecommendList,
	},
	setup() {
	  console.log('test play.js')
	},
};
</script>

<style lang="less" scoped></style>
