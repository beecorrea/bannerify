<script setup lang="ts">
import Border from './components/molecules/Banner/Border.vue'
import Title from './components/molecules/Banner/Title.vue'
import Banner from './components/molecules/Banner/Banner.vue'
import Navbar from './components/molecules/Nav/Navbar.vue'

import { borders } from "@stores/banner/border"

</script>
<template>
  <main class="w-3/6 h-screen container mx-auto my-12 py-20 px-24 font-mono">
    <div class="max-w-md mx-auto">
      <Navbar />
      <section id="controls" class="mt-14 min-w-fit max-w-xl grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-12 ">
        <Border class="md:col-span-1 col-span-2 max-w-fit" v-for="{name, value} in borders" :title="value" :part="name"
          :key="name" />
      </section>
      <article class="flex flex-col flex-wrap justify-around space-y-8 mt-16 h-60">
        <Title class="w-lg" title="Title (max. 38 characters)" />
        <Banner class="max-w-lg" />
      </article>
    </div>
  </main>
</template>

