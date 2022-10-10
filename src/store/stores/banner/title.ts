import { createStringStore } from "@lib/store"

export const TITLE_PADDING = 4

export const titleStore = createStringStore("Creates a new header")
export const getTitle = () => titleStore.value