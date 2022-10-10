<template>
  <section>
    <LabeledInput tag="labeled-input" :title="title" v-model:val="headingStore[part]" />
  </section>
</template>

<script setup lang="ts">
import { headingStore } from '@stores/heading';
import LabeledInput from '../../atoms/LabeledInput/LabeledInput.vue';
const { title } = defineProps<{
  title: string
  part: string
}>()

</script>