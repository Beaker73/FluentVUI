import { App, Plugin } from "vue";

import { ITheme, IPartialTheme } from "@fluentui/react";
export type { ITheme, IPartialTheme };

import ThemeProvider from "./components/ThemeProvider.vue";
export { ThemeProvider as ThemeProvider };

const plugin = {
	install(app: App) {
		app.component(ThemeProvider.name, ThemeProvider);
	}
}

export default plugin as Plugin;
