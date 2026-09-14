import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  globalCss: {
    body: {
      backgroundColor: "gray.300",
      color: "gray.800",
    },
  },
  theme: {
    tokens: {
      colors: {
        purple: { value: "#5F00D9" },
        black: {
          5: { value: "#F3F3F7" },
          10: { value: "#EEEEF4" },
          20: { value: "#D8DDE2" },
          40: { value: "#BABAC4" },
          60: { value: "#797E82" },
          80: { value: "#535D66" },
        },
      },
      fonts: {
        heading: { value: "Ubuntu" },
        body: { value: "Ubuntu" },
      },
      fontSizes: {
        xs: { value: "12px" },
        sm: { value: "14px" },
        base: { value: "16px" },
        lg: { value: "18px" },
        xl: { value: "20px" },
        "2xl": { value: "22px" },
        "3xl": { value: "24px" },
        "4xl": { value: "30px" },
      },
    },
    textStyles: {
      h1: {
        value: {
          fontSize: { base: "30px", md: "32px" },
          color: "black.80",
          lineHeight: { base: "34px", md: "36px" },
        },
      },
      h2: {
        value: {
          fontSize: { base: "24px", md: "28px" },
          color: "black.80",
          lineHeight: { base: "28px", md: "32px" },
        },
      },
      h3: {
        value: {
          fontSize: { base: "22px", md: "24px", xl: "32px" },
          color: "black.80",
          lineHeight: { base: "26px", md: "28px", xl: "36px" },
        },
      },
      h4: {
        value: {
          fontSize: { base: "20px", md: "22px" },
          color: "black.80",
          lineHeight: { base: "24px", md: "26px" },
        },
      },
      h5: {
        value: {
          fontSize: { base: "18px", md: "20px" },
          color: "black.80",
          lineHeight: { base: "22px", md: "24px" },
        },
      },
      h6: {
        value: {
          fontSize: { base: "16px", md: "18px" },
          color: "black.80",
          lineHeight: { base: "20px", md: "22px" },
        },
      },
    },
    // 👇 Ye naya block add kiya — tokens aur textStyles ke SAME level pe
    slotRecipes: {
      tag: {
        defaultVariants: {
          colorPalette: "purple",
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)