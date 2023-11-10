import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import RegisterA from "./registerPages/RegisterA";

const COLOR_PRIMARY = "#39434F";
const COLOR_WHITE = "#C6CED9";
const COLOR_SECONDARY = "#779341";
const COLOR_FADE = "#8D8D8D";
const COLOR_DARK = "#000000";

const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: "Poppins",
        color: "#000000",
        textTransform: "none",
      },
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<RegisterA />}></Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
