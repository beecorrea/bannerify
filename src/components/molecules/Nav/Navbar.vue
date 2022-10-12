<template>
  <section class="w-1/2 flex flex-row justify-between">
    <h1 class="inline-block text-4xl justify-self-start">#bannerify</h1>
    <article class="space-x-8">
      <ExternalLink :href="github" icon-class="devicon-github-original-wordmark colored" />
      <ExternalLink :href="twitter" icon-class="devicon-twitter-original" />
    </article>
  </section>
</template>

<script setup lang="ts">
import ExternalLink from "./ExternalLink.vue"
const github = "https://github.com/beecorrea"
const twitter = "https://twitter.com/cybersti_"

</script>
