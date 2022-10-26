<script setup lang="ts">

import Title from './components/molecules/Banner/Title.vue'
import Banner from './components/molecules/Banner/Banner.vue'
import Navbar from './components/molecules/Nav/Navbar.vue'


</script>
<template>
  <main class="lg:w-3/6 w-full h-screen container mx-auto my-12 py-20 px-2 sm:px-12 lg:px-24 font-mono">
    <div class="max-w-md mx-auto">
      <Navbar />
      <article class="flex flex-col flex-wrap justify-around space-y-6 mt-8 h-60">
        <Title class="w-lg" title="Title (max. 38 characters)" />
        <Banner class="max-w-lg" />
      </article>
    </div>
  </main>
</template>

