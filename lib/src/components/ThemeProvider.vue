<template>
	<component :is="react">
		<slot></slot>
	</component>
</template>

<script setup lang="ts">

type ThemeProviderProps = {
};

const props = defineProps<ThemeProviderProps>();

const react = null;


</script>