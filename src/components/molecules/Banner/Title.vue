<template>
  <section>
    <LabeledInput tag="title-input" :title="title" v-model:val="titleStore" />
  </section>
</template>

<script setup lang="ts">
import { titleStore } from '@stores/banner/title';
import LabeledInput from '../../atoms/LabeledInput/LabeledInput.vue';

const { title } = defineProps<{
  title: string
}>()

</script>