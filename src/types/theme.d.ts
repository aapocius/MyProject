import '@mui/material';

declare module '@mui/material/styles/createMixins' {
  interface Mixins {
    navbar: CSSProperties;
  }
}

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    green?: PaletteColorOptions;
    purple?: PaletteColorOptions;
    red?: PaletteColorOptions;
    pilka?: PaletteColorOptions;
  }

  interface Palette {
    green: PaletteColor;
    purple: PaletteColor;
    red: PaletteColor;
  }
}
