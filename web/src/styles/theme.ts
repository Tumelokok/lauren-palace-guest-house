/**
 * Lauren Palace Ecosystem shared design tokens.
 *
 * This file is the single source of truth for the visual language used by the
 * Lauren Palace Guest House Platform and Lauren Palace Student Accommodation
 * Platform. The goal is to keep the ecosystem aligned while preserving the
 * freedom for each product to compose its own UI structure.
 *
 * The tokens below are intentionally grouped into semantic sections and kept
 * immutable via `as const` so they can be consumed safely across a large
 * frontend codebase.
 */

export const theme = {
  /**
   * COLOR TOKENS
   *
   * Brand and semantic color decisions should be driven by the emotional tone
   * of the brand: premium, warm, elegant, trustworthy, and welcoming.
   */
  colors: {
    brand: {
      /**
       * Primary brand color used for key actions, major highlights, and the
       * signature visual identity across the ecosystem.
       */
      primary: '#8C5E3D',
      /**
       * Darkened primary state for hover, active, and elevated emphasis.
       */
      primaryHover: '#70472E',
      /**
       * Soft supporting primary tone for emphasis backgrounds, selections, and
       * subtle visual layering.
       */
      primaryLight: '#E9D8C7',
      /**
       * Secondary brand tone for structure, contrast, and supporting surfaces.
       */
      secondary: '#3F4C47',
      /**
       * Hover variation for the secondary tone.
       */
      secondaryHover: '#2B3531',
      /**
       * Accent tone used for decorative emphasis and warm moments within the
       * premium visual rhythm.
       */
      accent: '#C8A27A',
      /**
       * Light accent variant for soft backgrounds and subtle highlights.
       */
      accentLight: '#F3E6D7',
    },

    neutrals: {
      white: '#FFFFFF',
      black: '#111111',
      gray50: '#F8F6F2',
      gray100: '#F3F0EA',
      gray200: '#E7E0D5',
      gray300: '#D8CDBD',
      gray400: '#BFAE97',
      gray500: '#A38C6B',
      gray600: '#7D664B',
      gray700: '#5E4A37',
      gray800: '#40352A',
      gray900: '#241D17',
      gray950: '#181411',
    },

    semantic: {
      success: '#2D7A56',
      warning: '#C58A21',
      error: '#B14A4A',
      information: '#3D6E8D',
    },

    surface: {
      background: '#F7F4EF',
      card: '#FFFFFF',
      border: '#D9D0C0',
      divider: '#E9E1D6',
    },

    text: {
      primary: '#1F1B17',
      secondary: '#5C554D',
      muted: '#8A837A',
      inverse: '#FFFFFF',
    },
  },

  /**
   * TYPOGRAPHY TOKENS
   *
   * Typography establishes the premium editorial voice of the ecosystem and
   * balances warmth and professionalism with modern readability.
   */
  typography: {
    fontFamily: {
      display: '"Playfair Display", "Times New Roman", serif',
      heading: '"Inter", "Segoe UI", sans-serif',
      body: '"Inter", "Segoe UI", sans-serif',
      mono: '"SFMono-Regular", "SF Mono", Consolas, monospace',
    },

    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },

    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },

    lineHeight: {
      tight: 1.1,
      snug: 1.25,
      normal: 1.5,
      relaxed: 1.65,
      loose: 1.8,
    },

    letterSpacing: {
      tight: '-0.03em',
      normal: '0em',
      wide: '0.04em',
    },
  },

  /**
   * SPACING TOKENS
   *
   * This scale is defined in 4px increments to encourage consistent rhythm and
   * visual density across cards, forms, navigation, and layout composition.
   */
  spacing: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
    11: 44,
    12: 48,
    13: 52,
    14: 56,
    15: 60,
    16: 64,
    17: 68,
    18: 72,
    19: 76,
    20: 80,
    24: 96,
    28: 112,
    32: 128,
    36: 144,
    40: 160,
    44: 176,
    48: 192,
    52: 208,
    56: 224,
    60: 240,
    64: 256,
    72: 288,
    80: 320,
    88: 352,
    96: 384,
  },

  /**
   * BORDER RADIUS TOKENS
   */
  borderRadius: {
    small: '8px',
    medium: '12px',
    large: '16px',
    xl: '24px',
    '2xl': '32px',
    full: '9999px',
  },

  /**
   * SHADOW TOKENS
   *
   * Shadows are restrained and soft to preserve the premium tone while
   * maintaining legibility and hierarchy.
   */
  shadows: {
    small: '0 2px 8px rgba(17, 17, 17, 0.08)',
    medium: '0 8px 24px rgba(17, 17, 17, 0.10)',
    large: '0 14px 40px rgba(17, 17, 17, 0.12)',
    extraLarge: '0 20px 50px rgba(17, 17, 17, 0.16)',
  },

  /**
   * BREAKPOINT TOKENS
   *
   * These values align to common responsive UI patterns and support a stable
   * layout system across the ecosystem.
   */
  breakpoints: {
    mobile: 0,
    tablet: 768,
    laptop: 1024,
    desktop: 1280,
    wide: 1440,
  },

  /**
   * ANIMATION TOKENS
   */
  animation: {
    fast: '120ms',
    normal: '200ms',
    slow: '320ms',
    extraSlow: '480ms',
    transitionCurve: {
      standard: 'cubic-bezier(0.2, 0, 0, 1)',
      emphasized: 'cubic-bezier(0.22, 1, 0.36, 1)',
    },
  },

  /**
   * Z-INDEX TOKENS
   */
  zIndex: {
    dropdown: 1000,
    sticky: 1100,
    overlay: 1200,
    modal: 1300,
    toast: 1400,
    tooltip: 1500,
  },

  /**
   * DESIGN PRINCIPLES
   */
  designPrinciples: {
    premium: 'A refined visual language with elevated polish and restraint.',
    elegant: 'Sophisticated composition with quiet confidence and clarity.',
    warm: 'Comforting, inviting tones that feel grounded and human.',
    minimal: 'Intentional simplicity that reduces visual noise and improves focus.',
    modern: 'Contemporary patterns that balance innovation with usability.',
    comfortable: 'Comfortable spacing, pacing, and hierarchy for calm interaction.',
    trustworthy: 'Consistent structure that supports clarity and confidence.',
    professional: 'A practical visual system built for real-world business use.',
    welcoming: 'A friendly and accessible presence that feels approachable from first view.',
  },
} as const;

export type Theme = typeof theme;
