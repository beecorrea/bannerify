import { createFlatMapStore } from "@lib/store";

export type PartName = keyof typeof BORDERS
export enum BORDERS {
  TOP = "top",
  RIGHT = "right side",
  BOTTOM = "bottom",
  LEFT = "left side",
}

export const borders = Object.keys(BORDERS).map((name) => {
  return {
    name,
    value: BORDERS[name as keyof typeof BORDERS],
  };
});
export const bordersArray = borders.map(part => part.name)

export const borderStore = createFlatMapStore(bordersArray, "#")
export const getBorder = (direction: PartName) => borderStore.value[direction]
