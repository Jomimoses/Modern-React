import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider, useSelector } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import { store } from "./redux/store/index.js";
import { getTheme } from "./theme/theme.js";


export const ThemedApp = () => {
  const mode = useSelector((state) => state.theme.mode);
  const theme = React.useMemo(() => getTheme(mode), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemedApp />
    </Provider>
  </StrictMode>
);
