<script lang="ts" setup>
	import { onShow } from '@dcloudio/uni-app';

	onShow(() => {
		plus.screen.lockOrientation('landscape');
	});
</script>

<template>
	<view>
		横屏页面
	</view>
</template>

<style lang="scss" scoped>

</style>