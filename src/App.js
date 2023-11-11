import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginA from "./registerPages/LoginA";
import RegisterA from "./registerPages/RegisterA";

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
          <Route path="/login" element={<LoginA />}></Route>
          <Route path="/register" element={<RegisterA />}></Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
