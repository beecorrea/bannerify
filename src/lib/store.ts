import { ref, Ref } from "vue";

export const createFlatMapStore = (
  keys: string[],
  initial: string = "",
) => ref(
  Object.fromEntries(
    keys.map(k => [k, initial])
  )
)

export const createStringStore = (
  initial: string = "",
): Ref<string> => ref(initial)