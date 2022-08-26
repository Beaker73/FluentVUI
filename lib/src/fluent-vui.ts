import { App, Plugin } from "vue";

import { ITheme, IPartialTheme } from "@fluentui/react";
export type { ITheme, IPartialTheme };

import ThemeProvider from "./components/ThemeProvider.vue";
export { ThemeProvider as ThemeProvider };

import DefaultButton from "./components/DefaultButton.vue";
export { DefaultButton as DefaultButton };

console.debug("registering", { ThemeProvider, DefaultButton });
const plugin = {
	install(app: App) {
		app.component(ThemeProvider.name, ThemeProvider);
		app.component(DefaultButton.name, DefaultButton);
	}
}

export default plugin as Plugin;
