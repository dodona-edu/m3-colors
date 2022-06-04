import { argbFromHex, hexFromArgb, themeFromSourceColor, applyTheme, CorePalette, Blend } from "@material/material-color-utilities";

// tones from the material 3 spec
const tones = [0, 10, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 95, 98, 99, 100];

// 500-range colors from material 1
const colors = [
  { name: "red", value: "#F44336" },
  { name: "pink", value: "#E91E63" },
  { name: "purple", value: "#9C27B0" },
  { name: "deep-purple", value: "#673AB7" },
  { name: "indigo", value: "#3F51B5" },
  { name: "blue", value: "#2196F3" },
  { name: "light-blue", value: "#03A9F4" },
  { name: "cyan", value: "#00BCD4" },
  { name: "teal", value: "#009688" },
  { name: "green", value: "#4CAF50" },
  { name: "light-green", value: "#8BC34A" },
  { name: "lime", value: "#CDDC39" },
  { name: "yellow", value: "#FFEB3B" },
  { name: "amber", value: "#FFC107" },
  { name: "orange", value: "#FF9800" },
  { name: "deep-orange", value: "#FF5722" },
  { name: "brown", value: "#795548" },
  { name: "gray", value: "#9E9E9E" },
  { name: "blue-gray", value: "#607D8B" },
]

const primary = argbFromHex(colors.filter(c => c.name == "blue")[0].value);
const blend = false;

colors.forEach(color => {
  let source = argbFromHex(color.value);
  if (blend)
    source = Blend.harmonize(source, primary);
  const palette = CorePalette.of(source).a1;
  tones.forEach(tone => {
    console.log(`\$${color.name}-${tone}: ${hexFromArgb(palette.tone(tone))};`);
  })
  console.log();
});
