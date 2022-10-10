<script setup lang="ts">
import HeadingInput from './components/molecules/Heading/Border.vue'
import Title from './components/molecules/Heading/Title.vue'
import Banner from './components/molecules/Banner/Banner.vue'
import { headingParts } from "@stores/heading"
</script>

<template>
  <main class="max-w-7xl min-w-max h-screen mx-24 my-12 p-12 font-mono">
    <h1 class="inline-block text-4xl">#ban-ery-fyer </h1>
    <section id="controls" class="mt-10 min-w-fit max-w-xl grid grid-cols-2 grid-rows-2 gap-x-12 gap-y-8 ">
      <HeadingInput class="md:col-span-1 col-span-2 max-w-fit" v-for="{name, value} in headingParts" :title="value"
        :part="name" :key="name" />
    </section>
    <article class="flex flex-col flex-wrap justify-between mt-14 space-y-12 h-44">
      <Title class="min-w-max" title="Title" />
      <Banner />
    </article>
  </main>
</template>

