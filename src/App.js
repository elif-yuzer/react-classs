import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar.jsx";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    birinci: {
      main: "#a12345",
    },
    ikinci: {
      main: "#154360",
    },
  },
  typography: {
    fontFamily: "Lato, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {border:"3px solid red",
          fontWeight:"bolder"

        }}},
        MuiCard:{
          styleOverrides:{
            root:{
              boxShadow:"0 10px 20px rgba(0,0,0.5)"
            }
          }
        }
      }
});



const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Home />
    </ThemeProvider>
  );
};

export default App;
