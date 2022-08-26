<script setup lang="ts">
import { DefaultButton, ThemeProvider } from "fluent-vui";
import { ref } from "vue";

const counter = ref(0);
function incrementCounter() {
  counter.value += 1;
}

</script>

<template>
  <h1>Example</h1>
  <ThemeProvider>
    <p>value: {{ counter }}</p>
    <DefaultButton @click="incrementCounter" />
  </ThemeProvider>
</template>
