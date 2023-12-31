import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertWarning from "../components/AlertWarning";
import PasswordField from "../components/PasswordField";
import {
  LoginFacebook,
  LoginGoogle,
  desktopRectangle,
  mobileRectangle,
} from "../images";
import { theme } from "../utils/customThemeBreakpoints";
import "./LoginA.css";

export const SignUpTextfield = ({ text, mt, ml, width, value, onChange }) => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        ml: ml ? ml : "15%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        mt: mt,
      }}>
      <Typography fontSize={"14px"} color={"#000000"}>
        {text}
      </Typography>
      <TextField
        autoFocus
        sx={{
          backgroundColor: "white",
          borderRadius: "9px",
          mt: "16px",
          width: width ? width : "85%",
          display: "flex",
          flexDirection: "left",
        }}
        value={value}
        onChange={onChange}
      />
    </Grid>
  );
};

export default function LoginA() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleLogin = () => {
    axios
      .post("http://localhost:8080/api/auth/signin", {
        username: username,
        password: password,
      })
      .then(response => {
        console.log("Login successful.");
        navigate("/home");
      })
      .catch(error => {
        console.error("Login failed:", error.response.data);
        setError(error.response.data.message);
        setOpen(true);
      });
  };

  const navigate = useNavigate();

  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid
      container
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      {error && (
        <AlertWarning
          open={open}
          setOpen={setOpen}
          error={error}
          width={"60%"}
        />
      )}

      <Grid
        container // whole components besides background image
      >
        <img
          className="image2"
          src={isMobile ? mobileRectangle : desktopRectangle}
          alt={"A transparent background."}
        />

        <Grid
          container
          item
          xs={12}
          sm={11}
          md={6}
          lg={5}
          xl={4.5}
          sx={{
            position: "absolute",
            mt: "122px",
            ml: 0,
            "@media(max-width:900px)": {
              ml: "8%",
            },
            "@media(min-width:901px)": {
              ml: "50%",
            },
          }}>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              ml: "6%",
            }}>
            <Typography
              sx={{
                fontSize: "16px",
                ml: "53px",
                "@media (max-width: 440px)": {
                  ml: "30px",
                },
              }}>
              Welcome to LOREM
            </Typography>
            <Typography
              sx={{
                ml: "53px",
                fontSize: "40px",
                "@media (max-width: 440px)": {
                  fontSize: "30px",
                  ml: "30px",
                },
                mt: "13px",
              }}>
              Sign in
            </Typography>
          </Grid>
          <Grid
            item
            xs={4.4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}>
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "16px",
                ml: "18px",
                mr: "38px",
              }}>
              No Account ?
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                mt: "5px",
                ml: "18px",
                color: "#779341",
                cursor: "pointer",
              }}
              onClick={() => navigate("/register")}>
              Sign up
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          item
          xs={12}
          sm={10}
          md={6.5}
          lg={5}
          xl={4.5}
          sx={{
            display: "flex",
            position: "absolute",
            mt: "281px",

            "@media (min-width: 430px) and (max-width: 600px)": {},

            "@media (min-width: 601px) and (max-width: 900px)": {
              ml: "7%",
            },

            "@media(min-width: 901px)": {
              mt: "25%",
              ml: "45%",
            },
            "@media(min-width: 1200px)": {
              mt: "20%",
            },
            "@media(min-width: 1400px)": {
              mt: "16%",
              ml: "44%",
            },
            "@media(min-width: 1500px)": {
              mt: "14%",
              ml: "44%",
            },
            "@media(min-width: 1600px)": {
              mt: "18%",
              ml: "43%",
            },
            "@media(min-width: 2100px)": {
              mt: "10%",
              ml: "40%",
            },
          }}>
          <Grid
            item
            xs={7}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}>
            <Button
              sx={{
                backgroundColor: "#E9F1FF",
                color: "#4285F4",
                height: "55px",
                width: "180.24px",
                textShadow: "0px 4px 5px rgba(0, 0, 0, 0.5)",
                textTransform: "none",
              }}>
              <LoginGoogle />

              <Typography sx={{ fontSize: "12px" }} ml={"12px"}>
                Sign in with Google
              </Typography>
            </Button>
          </Grid>
          <Grid
            item
            xs={2.5}
            sx={{
              display: "flex",
            }}>
            <Box
              sx={{
                width: "36px",
                height: "55px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                ml: "12px",
                background: "transparent",
                border: "none",
                borderRadius: "9px",
                cursor: "pointer",
                color: "#4285f4",
                backgroundColor: "white",
                ":hover": {
                  backgroundColor: "#E9F1FF",
                },
              }}>
              <LoginFacebook />
            </Box>
            <Box
              sx={{
                width: "36px",
                height: "55px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                ml: "12px",
                background: "transparent",
                border: "none",
                borderRadius: "9px",
                cursor: "pointer",
                color: "#4285f4",
                backgroundColor: "white",
                ":hover": {
                  backgroundColor: "#E9F1FF",
                },
              }}>
              <LoginFacebook />
            </Box>
          </Grid>
          <Grid item xs={2.5} sx={{}}></Grid>
        </Grid>

        <Grid
          container
          item
          xs={12}
          sm={11}
          md={6}
          lg={5}
          xl={4.5}
          sx={{
            position: "absolute",
            mt: "386px",
            ml: 0,
            "@media(max-width:900px)": {
              ml: "8%",
            },
            "@media(min-width:901px)": {
              ml: "50%",
            },
            "@media (min-width: 600px) and (max-width: 900px)": {
              ml: "4%",
              width: "80%",
            },
            "@media (min-width: 400px) and (max-width: 500px)": {
              ml: "15px",
              width: "80%",
            },
            "@media(min-width: 1800px)": {
              mt: "450px",
            },
          }}>
          <SignUpTextfield
            text={"Enter your Username or Email Address"}
            value={username}
            onChange={e => setUsername(e.target.value)}
          />

          <PasswordField
            handleClickShowPassword={handleClickShowPassword}
            open={open}
            showPassword={showPassword}
            setPassword={setPassword}
          />

          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}>
            <Typography
              sx={{
                mt: "12px",
                fontSize: "11px",
                mr: "60px",

                "@media (min-width: 700px) and (max-width: 900px)": {
                  mr: "90px",
                },

                "@media(min-width:900px)": {
                  mr: "80px",
                },
                "@media(min-width:1200px)": {
                  mr: "100px",
                },
                color: "#4285F4",
                cursor: "pointer",
              }}>
              Forgot Password
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "flex-end",

              "@media(min-width:900px)": {
                mr: "20px",
              },
            }}>
            <Button
              variant="contained"
              sx={{
                "@media(min-width:901px)": {
                  width: "236px",
                  mr: "10%",
                },
                "@media(max-width:900px)": {
                  width: "149px",
                },
                height: "54px",
                mr: "50px",
                "@media (min-width: 700px) and (max-width: 900px)": {
                  mr: "90px",
                },
                mt: "47px",
                backgroundColor: "#779341",
                ":hover": {
                  backgroundColor: "#E9F1FF",
                  boxShadow: "none",
                },
              }}
              onClick={handleLogin}>
              <Typography sx={{ color: "#fff", fontSize: "16px" }}>
                Sign in
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
