/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      spacing: {
        xxxl: "var(--space-xxxl)",
        xxl: "var(--space-xxl)",
        xl: "var(--space-xl)",
        lg: "var(--space-lg)",
        md: "var(--space-md)",
        sm: "var(--space-sm)",
        xs: "var(--space-xs)",
      },
      fontSize: {
        8: "var(--text-size-8)",
        10: "var(--text-size-10)",  
        11: "var(--text-size-11)",
        12: "var(--text-size-12)",
        13: "var(--text-size-13)",
        14: "var(--text-size-14)",
        15: "var(--text-size-15)",
        16: "var(--text-size-16)",
        17: "var(--text-size-17)",
        18: "var(--text-size-18)",
        20: "var(--text-size-20)",
        21: "var(--text-size-21)",
        23: "var(--text-size-23)",
        24: "var(--text-size-24)",
        26: "var(--text-size-26)",
        30: "var(--text-size-30)",
        32: "var(--text-size-32)",
        40: "var(--text-size-40)",
      },
      fontWeight: {
        400: "var(--text-weight-400)",
        500: "var(--text-weight-500)",
        600: "var(--text-weight-600)",
        700: "var(--text-weight-700)",
        800: "var(--text-weight-800)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        round: "var(--radius-round)",
      },
      colors: {
        brand: {
          primary: "var(--color-brand-primary)",
          light: "var(--color-brand-light)",
          primary10: "var(--color-brand-primary-10)",
          secondary: "var(--color-brand-secondary)",
        },
        button: {
          tertiary: "var(--color-button-tertiary)",
        },
        bg: {
          secondary: "var(--color-bg-secondary)",
        },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          tertiary: "var(--color-text-tertiary)",
          link: "var(--color-text-link)",
        },
        ui: {
          price: "var(--color-ui-price)",
          rating: "var(--color-ui-rating)",
          divider: "var(--color-ui-divider)",
        },
        success: {
          light: "var(--color-success-light)",
          medium: "var(--color-success-medium)",
          dark: "var(--color-success-dark)",
          solid800: "var(--color-success-solid-800)",
          transparent10: "var(--color-success-transparent-10)",
        },
        warning: {
          light: "var(--color-warning-light)",
          medium: "var(--color-warning-medium)",
          dark: "var(--color-warning-dark)",
          solid800: "var(--color-warning-solid-800)",
        },
        alert: {
          light: "var(--color-alert-light)",
          medium: "var(--color-alert-medium)",
          dark: "var(--color-alert-dark)",
          transparent: "var(--color-alert-transparent)",
          solid800: "var(--color-alert-solid-800)",
        },
        solid: {
          100: "var(--color-solid-100)",
          200: "var(--color-solid-200)",
          300: "var(--color-solid-300)",
          400: "var(--color-solid-400)",
          500: "var(--color-solid-500)",
          600: "var(--color-solid-600)",
          700: "var(--color-solid-700)",
        },
        greys: {
          transparent700: "var(--color-greys-transparent-700)",
          transparent600: "var(--color-greys-transparent-600)",
          transparent500: "var(--color-greys-transparent-500)",
          transparent400: "var(--color-greys-transparent-400)",
          transparent300: "var(--color-greys-transparent-300)",
          transparent200: "var(--color-greys-transparent-200)",
        },
      },
      boxShadow: {
        default: "var(--shadow)",
      },
      lineHeight: {
        100: "var(--lh-100)",
      },
      letterSpacing: {
        "negative-xl": "var(--ls-negative-xl)",
      },
      height: {
        "full-screen": "var(--full-height)",
      },
      opacity: {
        custom: "var(--opacity-100)",
      },
      outline: {
        sm: ["var(--outline-sm)", "2px"],
      },
      backgroundImage: {
        "gradient-other": "var(--gradients-other)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};