<template>
  <section>
    <LabeledInput tag="labeled-input" :maxLength="1" :title="title" v-model:val="borderStore[part]" />
  </section>
</template>

<script setup lang="ts">
import { borderStore } from '@stores/banner/border';
import LabeledInput from '../../atoms/LabeledInput/LabeledInput.vue';

const { title } = defineProps<{
  title: string
  part: string
}>()

</script>