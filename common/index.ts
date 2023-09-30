export const switchLanguage = () => {
	const lang = uni.getLocale();
	if (lang === 'zh-Hans') {
		uni.setTabBarItem({
			index: 0,
			text: '首页'
		});
		uni.setTabBarItem({
			index: 1,
			text: '我的'
		});
	}
	if (lang === 'en') {
		uni.setTabBarItem({
			index: 0,
			text: 'Home'
		});
		uni.setTabBarItem({
			index: 1,
			text: 'Mine'
		});
	}
};