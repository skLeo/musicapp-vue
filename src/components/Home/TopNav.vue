<template>
  <div class="topNav">
    <div class="topLeft">
      <IconFont iconName="icon-liebiao1" />
    </div>
    <div class="topCenter">
      <span class="navBtn">我的</span>
      <span class="navBtn active">发现</span>
      <span class="navBtn">云村</span>
      <span class="navBtn">视频</span>
    </div>
    <div class="topRight">
      <IconFont iconName="icon-search" />
    </div>
  </div>
</template>

<script>
import IconFont from "@/components/Home/IconFont.vue";

export default {
	name: "TopNav",
	components: {
		IconFont,
	},
};
</script>

<style scoped lang="less">
.topNav {
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .topCenter {
    width: 4.5rem;
    display: flex;
    justify-content: space-around;
    .active {
      font-weight: 900;
    }
  }
}
</style>
