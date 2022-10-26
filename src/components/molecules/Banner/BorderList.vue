<template>
  <section id="controls" class="mt-14 min-w-fit max-w-xl grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-12 ">
    <Border class="md:col-span-1 col-span-2 max-w-fit" v-for="{ name, value } in borders" :title="value" :part="name"
      :key="name" />
  </section>
</template>

<script setup lang="ts">
import Border from './Border.vue'
import { borders } from "@stores/banner/border"
</script>