import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Dark Theme Colors
        dark: {
          100: "hsl(var(--dark-100))",
          200: "hsl(var(--dark-200))",
          300: "hsl(var(--dark-300))",
          400: "hsl(var(--dark-400))",
          500: "hsl(var(--dark-500))",
          600: "hsl(var(--dark-600))",
        },
        // Neon Colors
        neon: {
          green: "hsl(var(--neon-green))",
          blue: "hsl(var(--neon-blue))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        },
        "glow-pulse": {
          "0%, 100%": { 
            opacity: "1",
            boxShadow: "0 0 20px hsl(var(--primary) / 0.3)" 
          },
          "50%": { 
            opacity: "0.8",
            boxShadow: "0 0 30px hsl(var(--primary) / 0.5)" 
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "neon-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 20px hsl(var(--accent) / 0.5), 0 0 40px hsl(var(--accent) / 0.3)" 
          },
          "50%": { 
            boxShadow: "0 0 30px hsl(var(--accent) / 0.8), 0 0 60px hsl(var(--accent) / 0.5)" 
          },
        },
        "blue-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 15px hsl(var(--secondary) / 0.4), 0 0 30px hsl(var(--secondary) / 0.2)" 
          },
          "50%": { 
            boxShadow: "0 0 25px hsl(var(--secondary) / 0.6), 0 0 45px hsl(var(--secondary) / 0.4)" 
          },
        },
        "bounce-in": {
          "0%": { opacity: "0", transform: "scale(0.3)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "fade-in-left": "fade-in-left 0.6s ease-out",
        "scale-in": "scale-in 0.4s ease-out",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "float": "float 4s ease-in-out infinite",
        "slide-up": "slide-up 0.8s ease-out",
        "neon-glow": "neon-glow 2s ease-in-out infinite",
        "blue-glow": "blue-glow 2.5s ease-in-out infinite",
        "bounce-in": "bounce-in 0.8s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
