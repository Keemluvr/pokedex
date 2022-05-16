import theme from "@/styles/theme"

export type Theme = typeof theme

export type ThemeCardBackground = keyof typeof theme.preDefined.cardBackground

export type ThemeTypeBackground = keyof typeof theme.preDefined.typeBackground
