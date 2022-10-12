<template>
  <section class="max-w-lg flex flex-row justify-between">
    <article>
      <h1 class="text-2xl">bannerify</h1>
      <p class="text-sm font-semibold py-2 text-gray-500 break-words">
        Banners for your source code.
      </p>
    </article>
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
