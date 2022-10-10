import { createStringStore } from "@lib/store";
import { Ref } from "vue";

export const bannerStore = () => createStringStore()
export const setBanner = (banner: Ref<string>, newValue: string) => (banner.value = newValue)

