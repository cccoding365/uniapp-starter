export const tabBarLocaleHandle = () => {
	const lang = uni.getLocale() === 'en' ? 'en' : 'cn';
	const tabBars = [
		{ en: 'Home', cn: '首页' },
		{ en: 'Mine', cn: '我的' }
	];
	tabBars.forEach((item, index) => {
		uni.setTabBarItem({
			index,
			text: item[lang]
		});
	});
	const pages = getCurrentPages();
	const navBars = {
		'pages/mine/mine': {
			en: 'Mine',
			cn: '我的'
		}
	};
	if (pages.length !== 0) {
		const page = pages[pages.length - 1] || {};
		uni.setNavigationBarTitle({
			title: navBars[page.route][lang]
		});
	}
};