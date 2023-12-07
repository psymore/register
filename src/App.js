import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginA from "./registerPages/LoginA";
import RegisterA from "./registerPages/RegisterA";
import Home from "./home/Home";
import Landing from "./Landing";
import ProfileSettings from "./Profile/ProfileSettings";

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

  typography: { fontSize: 13 },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/login" element={<LoginA />}></Route>
          <Route path="/register" element={<RegisterA />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/profile" element={<ProfileSettings />}></Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
