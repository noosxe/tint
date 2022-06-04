import { CSSProperties } from "react";
import "@emotion/react";

type PaletteColor = {
  main?: CSSProperties["color"];
  light?: CSSProperties["color"];
  dark?: CSSProperties["color"];
};

type TextColor = {
  main: CSSProperties["color"];
  disabled?: CSSProperties["color"];
};

type SurfaceColor = {
  default: CSSProperties["color"];
};

type VariantTheme = {};

type ComponentTheme = {
  // TODO: Change the Record key and value types to generics.
  variants: Record<string, VariantTheme>;

  // TODO: Change the Record key and value types to generics.
  sizes: Record<string, VariantTheme>;
};

declare module "@emotion/react" {
  export interface Theme {
    palette: {
      primary: PaletteColor;
      secondary: PaletteColor;
      text: TextColor;
      background: SurfaceColor;
    };
    components: {
      button: ComponentTheme;
    };
  }
}
