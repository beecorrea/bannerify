<template>
  <section class="min-w-fit max-w-lg flex flex-row justify-between">
    <h1 class="inline-block text-2xl justify-self-start">#bannerify</h1>
    <article class="space-x-8">
      <ExternalLink :href="github" icon="devicon-github-original colored" size="text-2xl" />
      <ExternalLink :href="twitter" icon="devicon-twitter-original" size="text-2xl" />
    </article>
  </section>
</template>

<script setup lang="ts">
import ExternalLink from "./ExternalLink.vue"
const github = "https://github.com/beecorrea"
const twitter = "https://twitter.com/cybersti_"

</script>
