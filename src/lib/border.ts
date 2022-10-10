export const fitBorder =
  (title: string, padding: number) =>
    (border: string) =>
      buildBorder(
        border,
        withBorders(title)(padding, padding)
      )

export const fitTitle =
  (title: string) =>
    (borderLeft: string, borderRight: string) =>
      (padding: number) =>
        buildTitle(borderLeft, borderRight)(
          withTitle(title)(padding, padding)
        )

export const buildBorder = (borderChar: string, centerFn: (borderChar: string) => string) => borderChar + centerFn(borderChar) + borderChar + "\n"
export const buildTitle = (borderLeft: string, borderRight: string) => (centerFn: () => string) => borderLeft + centerFn() + borderRight + "\n"

export const withBorders =
  (title: string) =>
    (paddingLeft: number, paddingRight: number) =>
      (borderChar: string) =>
        padLeft(borderChar, paddingLeft) + padTitle(borderChar, title) + padRight(borderChar, paddingRight)

export const withTitle =
  (title: string) =>
    (paddingLeft: number, paddingRight: number) => () =>
      padLeft(" ", paddingLeft) + title + padRight(" ", paddingRight)

const withRepeat = (borderChar: string, repeat: number) => borderChar.repeat(repeat)
const padTitle = (borderChar: string, title: string) => withRepeat(borderChar, title.length)
const padLeft = (borderChar: string, paddingLeft: number) => withRepeat(borderChar, paddingLeft)
const padRight = (borderChar: string, paddingRight: number) => withRepeat(borderChar, paddingRight)