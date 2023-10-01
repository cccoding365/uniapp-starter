import { createSSRApp } from 'vue';
import { createI18n } from 'vue-i18n';

import App from '@/App';
import messages from '@/locale';

const app = createSSRApp(App);

const locale = uni.getLocale() === 'en' ? 'en' : 'cn';
const i18n = createI18n({
	locale,
	messages
});

export function createApp() {
	app.use(i18n);
	return {
		app
	};
}