<template>
  <TopNav />
  <SwiperNav />
</template>

<script>
// @ is an alias to /src
import TopNav from "@/components/TopNav.vue";
import SwiperNav from "@/components/SwiperNav.vue";

export default {
  name: "Home",
  components: {
    TopNav,
    SwiperNav,
  },
};
</script>
