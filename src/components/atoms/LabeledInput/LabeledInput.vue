<template>
  <div class="relative">
    <label :for="id" class="text-sm absolute -bottom-6 left-0 text-slate-700">
      <span>{{ capitalizedTitle }}</span>
    </label>
    <input class="border-b-2 border-neutral-900 bg-neutral-300 pl-1.5 w-full max-w-prose" type="text" :name="id"
      :id="title" :value="val" @input="$emit('update:val', ($event!.target! as HTMLInputElement).value)"
      :maxlength="maxLength">
  </div>
</template>

<script setup lang="ts">
import { capitalize, getDashedId } from '@lib/strings';
const { tag, title, val, maxLength } = defineProps<{
  tag: string
  title: string
  val: string
  maxLength?: number
}>()


const id = getDashedId(tag)(title)
const capitalizedTitle = capitalize(title)
</script>