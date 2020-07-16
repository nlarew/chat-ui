type Colors = {
  [colorName: string]: string;
};

const userThemeColors = {
  "column-background": "#3D4F58",
  "hover-item": "#007CAD",
  "mention-badge": "#13AA52",
  "active-item": "#13AA52",
  "text-color": "#F9FBFA",
  "top-nav-bg": "#116149",
  "active-item-text": "#FFFFFF",
  "active-presence": "#13AA52",
  "top-nav-text": "#F9FBFA",
  "feed-background-dark": "#222429"
};

const editorColors = {};

export default {
  ...userThemeColors,
  ...editorColors
} as Colors;
