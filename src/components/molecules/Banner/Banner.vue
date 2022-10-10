<template>
  <div>
    <span class="whitespace-pre">{{banner}}</span>
  </div>
</template>

<script setup lang="ts">
import { getBorder, getTitle, compileBanner, fitBorder, bannerStore } from '@stores/heading';
import { computed, onMounted, watch } from 'vue';

const TITLE_PADDING = 4
const fitToTitle = computed(() => fitBorder(getTitle(), TITLE_PADDING))

// Fit the borders to the title
const borderTop = computed(() => fitToTitle.value(getBorder("TOP")))
const middleContent = computed(() => getBorder("LEFT") + " ".repeat(TITLE_PADDING) + getTitle() + " ".repeat(TITLE_PADDING) + getBorder("RIGHT") + "\n")
const borderBottom = computed(() => fitToTitle.value(getBorder("BOTTOM")))

const banner = bannerStore()
onMounted(() => {
  banner.value = compileBanner(borderTop.value, middleContent.value, borderBottom.value)
})
watch([borderTop, middleContent, borderBottom], () => {
  banner.value = compileBanner(borderTop.value, middleContent.value, borderBottom.value)
})
</script>
