<script lang="ts" setup>
	import { ref } from "vue";
	import { useI18n } from 'vue-i18n';
	import { onShow } from '@dcloudio/uni-app';
	const { t } = useI18n();

	onShow(() => {
		// #ifdef MP-WEIXIN
		uni.setNavigationBarTitle({
			title: t('tabBar.home')
		});
		// #endif
	});

	const title = ref('uni-app starter');
</script>

<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>