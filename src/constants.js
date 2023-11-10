const colors = {
  white: 'hsl(0 0% 100%)',
  gray: {
    100: 'hsl(185 5% 95%)',
    300: 'hsl(190 5% 80%)',
    500: 'hsl(196 4% 60%)',
    700: 'hsl(220 5% 40%)',
    900: 'hsl(220 3% 20%)',
  },
  primary: 'hsl(340 65% 47%)',
  secondary: 'hsl(240 60% 63%)',
};

const weights = {
  normal: 500,
  medium: 600,
  bold: 800,
};

const breakpoints = {
  phoneMax: 600,
  tabletMax: 950,
  laptopMax: 1300,
};

const queries = {
  'phoneAndSmaller': `max-width(${breakpoints.phoneMax / 16}rem)`,
  'tabletAndSmaller': `max-width(${breakpoints.tabletMax / 16}rem)`,
  'laptopAndSmaller': `max-width(${breakpoints.laptopMax / 16}rem)`,
};

export const theme = {
  queries: queries,
  colors: colors,
  weights: weights
};
