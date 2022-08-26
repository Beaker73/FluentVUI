<script lang="ts">
let dbId = 0;
</script>

<script setup lang="ts">

import { onBeforeUnmount, onMounted, ref } from 'vue';
import { createElement } from 'react';
import ReactDOM from 'react-dom';
import { DefaultButton as ReactDefaultButton, textAreaProperties } from "@fluentui/react";

const id = dbId++;

type DefaultButtonProps = {
	text?: string,
};
const props = defineProps<DefaultButtonProps>();

type DefaultButtonEvents = {
	(e: "click"): void;
}
const emit = defineEmits<DefaultButtonEvents>();

const container = ref<Element | undefined>();

onMounted(() => {
	console.debug("default button - on mounted", { container: container.value });
	container.value = document.getElementById(`rr${id}`) ?? undefined;
	if (container.value) {
		console.debug("default button - render", { text: props.text, onClick: emitClick });
		const defaultButton = createElement(ReactDefaultButton, {
			text: props.text,
			onClick: emitClick,
		});
		ReactDOM.render(defaultButton, container.value);
	}
});

onBeforeUnmount(() => {
	if (container.value)
		ReactDOM.unmountComponentAtNode(container.value);
});

function emitClick() {
	emit("click");
}

</script>

<template>
	<div :id="`db${id}`">
	</div>
</template>
