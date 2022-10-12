import { pad } from "@lib/strings"

export type BorderConfig = {
  padding: number;
  repeatable: string;
}
export const buildBorder = (title: string, { padding, repeatable }: BorderConfig) => repeatable + withBorders(title, { padding, repeatable }) + repeatable + "\n"
export const buildTitle = (title: string, { padding, repeatable }: BorderConfig) => repeatable + withTitle(title, { padding, repeatable: " " }) + repeatable + "\n"

export const withBorders = (title: string, { padding, repeatable }: BorderConfig) =>
  pad(repeatable, padding) + pad(repeatable, title.length) + pad(repeatable, padding)

export const withTitle = (title: string, { padding, repeatable }: BorderConfig) =>
  pad(repeatable, padding) + title + pad(repeatable, padding)