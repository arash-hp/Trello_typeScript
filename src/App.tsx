import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import React from "react";
import "./App.css";
import theme from "./assets/theme/Theme";
import { ThemeProvider } from "./assets/theme/ThemeProvider";
import MyApp from "./routes/AppRoutes";

function App() {
  return (
    <Grid>
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </Grid>
  );
}

export default App;
