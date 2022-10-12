<template>
  <section>
    <LabeledInput class="max-w-lg" tag="title-input" :maxLength="38" :title="title" v-model:val="titleStore" />
  </section>
</template>

<script setup lang="ts">
import { titleStore } from '@stores/banner/title';
import LabeledInput from '../../atoms/LabeledInput/LabeledInput.vue';

const { title } = defineProps<{
  title: string
}>()

</script>