<template>
	<Swiper :slides-per-view="1" autoplay :pagination="{ clickable: true }">
		<SwiperSlide v-for="banner in imgs" :key="banner.bannerId">
			<img :src="banner.pic" />
		</SwiperSlide>
	</Swiper>
</template>

<script>
import { onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { GET_BANNER } from "@/axios";

import "swiper/swiper.less";
import "swiper/components/pagination/pagination.less";

SwiperCore.use([Autoplay, Pagination]);

export default {
	name: "SwiperNav",
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		const imgs = ref([]);
		const updateImgs = ({ banners }) => {
			imgs.value = banners;
		};

		onMounted(async () => {
			await GET_BANNER(2, updateImgs);
		});

		return { imgs };
	},
};
</script>

<style lang="less" scoped>
.swiper-container {
	border-radius: 0.1rem;
	img {
		display: block;
		width: 100%;
	}
	/deep/ .swiper-pagination-bullet-active {
		background: grey;
	}
}
</style>
