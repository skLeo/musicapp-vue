<template>
	<svg v-bind="$attrs" class="icon" aria-hidden="true">
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
	width: 1em;
	height: 1em;
	vertical-align: -0.15em;
	overflow: hidden;
	fill: currentColor;
	overflow: hidden;
}
</style>
