<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#${iconName}`"></use>
  </svg>
</template>

<script>
export default {
  name: "IconFont",
  props: {
    iconName: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.icon {
  width: 0.45rem;
  height: 0.45rem;
  vertical-align: -0.55em;
  overflow: hidden;
}
</style>
