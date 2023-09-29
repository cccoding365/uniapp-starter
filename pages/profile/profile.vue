<template>
	<view>
		<button type="primary" @click="switchLanguageHandle">切换语言</button>
	</view>
</template>

<script lang="ts" setup>
	const switchLanguageHandle = () => {
		console.log(uni.getLocale());
		const lang = uni.getLocale();
		if (lang === 'en') {
			uni.setLocale('zh-Hans');
		} else {
			uni.setLocale('en');
		}
	};
</script>

<style lang="scss" scoped>

</style>