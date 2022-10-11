export const withDash = (unformatted: string) => unformatted.split(" ").join("-")
export const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1)
export const getDashedId = (prefix: string) => (id: string) => withDash(`${prefix} ${id}`)

export const withRepeat = (repeatable: string, repeat: number) => repeatable.repeat(repeat)
export const pad = (repeatable: string, padding: number) => withRepeat(repeatable, padding)