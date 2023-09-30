<script lang="ts" setup>
	import { useI18n } from 'vue-i18n';
	const { locale, t } = useI18n();

	uni.setNavigationBarTitle({
		title: t('tabBar.mine')
	});

	const switchLanguageHandle = () => {
		if (uni.getLocale() === 'en') {
			locale.value = 'zh-Hans';
			uni.setLocale('zh-Hans');
		} else {
			locale.value = 'en';
			uni.setLocale('en');
		}
	};
</script>

<template>
	<view>
		<button type="primary" @click="switchLanguageHandle">{{$t('tabBar.mine')}}</button>
	</view>
</template>

<style lang="scss" scoped>

</style>