<template>
  <a :href="href" target="_blank">
    <i :class="icon"></i>
  </a>
</template>

<script setup lang="ts">
const { href, iconClass } = defineProps<{
  href: string
  iconClass: string
}>()

const icon = [iconClass, "text-4xl"].join(" ")
</script>
