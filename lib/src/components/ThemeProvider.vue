<script lang="ts">

let rrId = 0;

</script>

<script setup lang="ts">

import { createElement, FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { onBeforeUnmount, onMounted, ref, useSlots } from 'vue';
import { ThemeProvider as ReactThemeProvider } from '@fluentui/react';

import { VuePortal, VuePortalProps } from './VuePortal';

const id = rrId++;

type ThemeProviderProps = {
};

const props = defineProps<ThemeProviderProps>();
const container = ref<Element | undefined>();

const slots = useSlots();

onMounted(() => {
	console.debug("on mounted - theme provider");
	container.value = document.getElementById(`rr${id}`) ?? undefined;
	if (container.value) {
		console.debug("on mounted - theme provider - render react controls");
		const vuePortal = createElement(VuePortal as FunctionComponent<VuePortalProps>, { slot: slots.default });
		const themeProvider = createElement(ReactThemeProvider, { children: [vuePortal] });
		ReactDOM.render(themeProvider, container.value);
	}
});

onBeforeUnmount(() => {
	if (container.value) {
		console.debug("on before unmount - unmount react");
		ReactDOM.unmountComponentAtNode(container.value);
	}
});

</script>

<template>
	<div :id="`rr${id}`">
	</div>
</template>
