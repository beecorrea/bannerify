<template>
  <section>
    <LabeledInput tag="title-input" :title="title" v-model:val="titleStore['title']" />
  </section>
</template>

<script setup lang="ts">
import { titleStore } from '@stores/heading';
import LabeledInput from '../../atoms/LabeledInput/LabeledInput.vue';

const { title } = defineProps<{
  title: string
}>()

</script>