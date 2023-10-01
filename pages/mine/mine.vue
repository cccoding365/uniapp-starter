<script lang="ts" setup>
	import { useI18n } from 'vue-i18n';
	import { onShow } from '@dcloudio/uni-app';
	const { locale, t } = useI18n();


	onShow(() => {
		// #ifdef MP-WEIXIN
		uni.setNavigationBarTitle({
			title: t('tabBar.mine')
		});
		// #endif
		// #ifdef APP-PLUS
		plus.screen.lockOrientation('portrait');
		// #endif
	});

	const switchLanguageHandle = () => {
		const lang = uni.getLocale() === 'en' ? 'cn' : 'en';
		locale.value = lang;
		uni.setLocale(lang);
	};

	const switchOrientationHandle = () => {
		// #ifdef APP-PLUS
		uni.navigateTo({
			url: '/views/landscape/landscape'
		});
		// #endif
	};
</script>

<template>
	<view>
		<text>当前语言：{{ locale }}</text>
		<button type="primary" @click="switchLanguageHandle">语言切换</button>
		<button type="warn" @click="switchOrientationHandle">切换横屏</button>
	</view>
</template>

<style lang="scss" scoped>

</style>