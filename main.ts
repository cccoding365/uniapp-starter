import { createSSRApp } from 'vue';
import { createI18n } from 'vue-i18n';

import App from '@/App';
import messages from '@/locale';

const app = createSSRApp(App);
const i18n = createI18n({
	locale: uni.getLocale(),
	messages
});

export function createApp() {
	app.use(i18n);
	return {
		app
	};
}