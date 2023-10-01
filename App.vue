<script lang="ts">
	import { tabBarLocaleHandle } from '@/common';
	export default {
		onLaunch: function () {
			console.log('App Launch');
			// #ifdef MP-WEIXIN
			tabBarLocaleHandle();
			uni.onLocaleChange(() => {
				tabBarLocaleHandle();
			});
			// #endif
		},
		onShow: function () {
			console.log('App Show');
		},
		onHide: function () {
			console.log('App Hide');
		}
	};
</script>

<style>
	/*每个页面公共css */
	page {
		margin: 0;
		box-sizing: border-box;
		padding: 8rpx;
	}
</style>