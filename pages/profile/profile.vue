<template>
	<view>
		<button type="primary" @click="switchLanguageHandle">{{$t('tabBar.mine')}}</button>
	</view>
</template>

<script lang="ts" setup>
	import { useI18n } from 'vue-i18n';
	let { locale } = useI18n();

	const switchLanguageHandle = () => {
		if (uni.getLocale() === 'en') {
			locale.value = 'cn';
			uni.setLocale('cn');
		} else {
			locale.value = 'en';
			uni.setLocale('en');
		}
	};
</script>

<style lang="scss" scoped>

</style>