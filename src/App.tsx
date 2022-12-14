import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import React from "react";
import "./App.css";
import theme from "./assets/theme/Theme";
import { ThemeProvider } from "./assets/theme/ThemeProvider";
import MyApp from "./routes/AppRoutes";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Grid>
      <ThemeProvider theme={theme}>
      <Provider store={store}>
        <MyApp />
      </Provider>
      </ThemeProvider>
    </Grid>
  );
}

export default App;
