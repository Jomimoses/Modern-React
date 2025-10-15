import { Box, Button, Divider, Grid, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/slice/themeSlice";

// Helper to collect all color variants under each top-level palette key
function collectColorsByPaletteKey(palette) {
  const groups = {};
  for (const key in palette) {
    if (!Object.prototype.hasOwnProperty.call(palette, key)) continue;
    const value = palette[key];
    if (typeof value === "object" && value !== null) {
      // Only group if it has string color values inside
      const variants = {};
      for (const variant in value) {
        if (!Object.prototype.hasOwnProperty.call(value, variant)) continue;
        const color = value[variant];
        if (typeof color === "string" && /^#|rgb|hsl|^var\(--/.test(color)) {
          variants[variant] = color;
        }
      }
      if (Object.keys(variants).length > 0) {
        groups[key] = variants;
      }
    }
  }
  return groups;
}

export default function ThemePaletteGroupedByKey() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.theme);
  const { palette } = theme;
  const grouped = collectColorsByPaletteKey(palette);
  const buttonLabel = mode === "light" ? "Switch to Dark" : "Switch to Light";

  // Optional: order palette keys
  const PALETTE_ORDER = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "grey",
    "text",
    "background",
  ];
  const sortedKeys = [
    ...PALETTE_ORDER.filter((k) => grouped[k]),
    ...Object.keys(grouped).filter((k) => !PALETTE_ORDER.includes(k)),
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ display: "flex", dispatch: "flex", gridGap: "12px" }}>
        <Button
          size="small"
          variant="outlined"
          color="primary"
          onClick={() => dispatch(toggleTheme())}
        >
          {buttonLabel}
        </Button>

        <Typography variant="h6" gutterBottom>
          MUI v7 Theme Palette Colors (Grouped by Palette Key)
        </Typography>
      </Box>

      {sortedKeys.map((key) => (
        <Box key={key} sx={{ mt: 4 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, textTransform: "capitalize" }}
          >
            {key}
          </Typography>
          <Grid container spacing={2}>
            {Object.entries(grouped[key]).map(([variant, value]) => (
              <Grid item xs={12} sm={6} md={4} key={variant}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    border: `1px solid ${value}`,
                  }}
                >
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: 1,
                      background: value,
                      mr: 2,
                    }}
                  />
                  <Typography sx={{ fontFamily: "monospace" }}>
                    {variant}: <b>{value}</b>
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Divider sx={{ mt: 3 }} />
        </Box>
      ))}
    </Box>
  );
}
