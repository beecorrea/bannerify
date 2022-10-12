<template>
  <a :href="href" target="_blank">
    <i :class="iconClass"></i>
  </a>
</template>

<script setup lang="ts">
const { href, icon, size } = defineProps<{
  href: string
  icon: string
  size: string
}>()

const iconClass = [icon, size].join(" ")
</script>
