import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./Register";
import { ThemeProvider, createTheme } from "@mui/material";

const COLOR_PRIMARY = "#39434F";
const COLOR_WHITE = "#C6CED9";
const COLOR_SECONDARY = "rgb(158, 124, 186)";
const COLOR_TERNARY = "#6152AD";
const COLOR_DARK = "#222222";

const theme = createTheme({
  typography: {
    fontFamily: "Noto Sans",
    fontWeight: 500,
    allVariants: {
      color: COLOR_PRIMARY,
      fontSize: "16px",
      textTransform: "none",
    },
  },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: { backgroundColor: "#FFFFFF" },
        input: {
          color: COLOR_PRIMARY,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: COLOR_DARK,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
        },
      },
    },
    palette: {
      primary: {
        main: COLOR_PRIMARY,
      },
      secondary: {
        main: COLOR_SECONDARY,
      },
      ternary: {
        main: COLOR_TERNARY,
      },
      text: {
        primary: COLOR_DARK,
        secondary: COLOR_WHITE,
        dark: COLOR_DARK,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
        },
      },
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Register />}></Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
