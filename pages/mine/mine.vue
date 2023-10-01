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
	});

	const switchLanguageHandle = () => {
		const lang = uni.getLocale() === 'en' ? 'cn' : 'en';
		locale.value = lang;
		uni.setLocale(lang);
	};
</script>

<template>
	<view>
		<button type="primary" @click="switchLanguageHandle">{{$t('tabBar.mine')}}</button>
	</view>
</template>

<style lang="scss" scoped>

</style>