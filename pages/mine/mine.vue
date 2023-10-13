<script lang="ts" setup>
	import { useI18n } from 'vue-i18n';
	import { onShow } from '@dcloudio/uni-app';
	import { ref } from "vue";
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

	//发出蜂鸣声
	const beep = () => {
		plus.device.beep(3);
	};

	//拨打电话
	const dial = () => {
		plus.device.dial("15159892574", false);
	};
	const plusOS = ref(null);
	// 获取设备信息
	const getDeviceInfo = () => {
		console.log('plus.os', plus.os);
		plusOS.value = plus.os;
		plus.device.getInfo({
			success: function (e) {
				console.log('getDeviceInfo success: ' + JSON.stringify(e));
			},
			fail: function (e) {
				console.log('getDeviceInfo failed: ' + JSON.stringify(e));
			}
		});
	};

	// 设备振动
	const vibrate = () => {
		plus.device.vibrate(2000);
	};
</script>

<template>
	<view>
		<text>当前语言：{{ locale }}</text>
		<button type="primary" @click="switchLanguageHandle">语言切换</button>
		<button type="warn" @click="switchOrientationHandle">切换横屏</button>
		<button type="primary" @click="dial">拨打电话</button>
		<button type="warn" @click="beep">蜂鸣器</button>
		<button type="primary" @click="getDeviceInfo">获取设备信息</button>
		<text v-if="plusOS">{{plusOS}}</text>
		<button type="warn" @click="vibrate">设备震动</button>
	</view>
</template>

<style lang="scss" scoped>

</style>