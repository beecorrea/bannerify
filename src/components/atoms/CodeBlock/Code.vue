<template>
  <div :class="codeStyling">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const flex = {
  direction: "flex flex-row"
}
const box = {
  sizing: "p-6",
  height: "max-h-fit",
  bg: "bg-sky-900",
}

const border = {
  line: "rounded-md",
}

const font = {
  family: "font-mono",
  textColor: "text-slate-400",
  style: "italic",
  whitespace: "whitespace-pre",
}

const styling = {
  ...box,
  ...border,
  ...font,
  ...flex,
}

const codeStyling = Object.values(styling).join(" ")

</script>
