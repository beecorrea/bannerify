import { createFlatMapStore } from "@lib/store";
import { ref } from "vue";

export type PartName = keyof typeof AVAILABLE_HEADING_PARTS
export enum AVAILABLE_HEADING_PARTS {
  TOP = "top",
  RIGHT = "right side",
  BOTTOM = "bottom",
  LEFT = "left side",
}

export const headingParts = Object.keys(AVAILABLE_HEADING_PARTS).map((name) => {
  return {
    name,
    value: AVAILABLE_HEADING_PARTS[name as keyof typeof AVAILABLE_HEADING_PARTS],
  };
});

export const headingPartsArray = headingParts.map(part => part.name)

// TODO: rename to borderStore
export const headingStore = createFlatMapStore(headingPartsArray, "#")
export const getBorder = (part: PartName) => headingStore.value[part]

export const titleStore = createFlatMapStore(["title"], "Creates a new header")
export const getTitle = () => titleStore.value["title"]
export const fitBorder = (title: string, padding: number) => (border: string) => border + border.repeat(padding) + border.repeat(title.length) + border.repeat(padding) + border + "\n"

export const bannerStore = () => ref("")
export const compileBanner = (top: string, center: string, bottom: string) => top + center + bottom