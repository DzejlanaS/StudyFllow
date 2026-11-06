export const Colors = {
  light: {
    text: "#1A2433",
    background: "#FFFFFF",
    card: "#F5F8FB",
    primary: "#003A6D",
    muted: "#5B6475",
  },

  dark: {
    text: "#F2F4F7",
    background: "#0B1220",
    card: "#182132",
    primary: "#8DB8E8",
    muted: "#9AA6B5",
  },
} as const;

export const Spacing = {
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
} as const;

export const FontSize = {
  small: 14,
  body: 16,
  title: 22,
  hero: 32,
} as const;