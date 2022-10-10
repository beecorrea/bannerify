<template>
  <div>
    <span class="whitespace-pre">{{banner}}</span>
  </div>
</template>

<script setup lang="ts">
import { banner, bannerObserver } from '@actions/banner'

bannerObserver()
</script>
