<template>
	<TopNav />
	<SwiperNav />
	<MenuNav />
</template>

<script>
// @ is an alias to /src
import TopNav from "@/components/TopNav.vue";
import SwiperNav from "@/components/SwiperNav.vue";
import MenuNav from "@/components/MenuNav.vue";

export default {
	name: "Home",
	components: {
		TopNav,
		SwiperNav,
		MenuNav,
	},
	setup() {},
};
</script>

<style lang="less" scoped></style>
