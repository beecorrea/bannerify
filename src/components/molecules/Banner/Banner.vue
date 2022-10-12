<template>
  <Code>
    {{banner}}
  </Code>
</template>

<script setup lang="ts">
import { banner, bannerObserver } from '@actions/banner'
import Code from '../../atoms/CodeBlock/Code.vue';
bannerObserver()
</script>
