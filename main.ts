import { createSSRApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from '@/App';
import lang from '@/locale';

const i18n = createI18n({
	locale: uni.getLocale(),
	lang
});

export function createApp() {
	const app = createSSRApp(App);
	app.use(i18n);
	return {
		app
	};
}