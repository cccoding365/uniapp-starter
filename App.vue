<script lang="ts">
	import { switchLanguage } from '@/common';
	export default {
		onLaunch: function () {
			console.log('App Launch');
			switchLanguage();
			// #ifdef MP-WEIXIN
			uni.onLocaleChange(() => {
				switchLanguage();
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
</style>