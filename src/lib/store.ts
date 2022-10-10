import { ref } from "vue";

export const createFlatMapStore = (
  keys: string[],
  initial: string = "",
) => ref(
  Object.fromEntries(
    keys.map(k => [k, initial])
  )
)
