import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { desktopRectangle, mobileRectangle } from "../images";
import { SignUpTextfield } from "./LoginA";

import { Visibility, VisibilityOffOutlined } from "@mui/icons-material";
import axios from "axios";
import AlertWarning from "../components/AlertWarning";
import { theme } from "../utils/customThemeBreakpoints";
import "./LoginA.css";

export default function RegisterA() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleRegister = () => {
    console.log(
      "Registering with email:",
      email,
      "username:",
      username,
      "password:",
      password
    );

    axios
      .post("http://localhost:8080/api/auth/signup", {
        email: email,
        username: username,
        password: password,
      })
      .then(response => {
        console.log("Registration successful:", response.data);
        navigate("/login");
      })
      .catch(error => {
        console.error("Registration failed:", error.response.data);
        console.error("Registration failed:", error.response.data.message);
        const errorMessage = error.response.data.message;
        setError(errorMessage);
        setOpen(true);
      });
  };

  return (
    <Grid
      container
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      {error && <AlertWarning open={open} setOpen={setOpen} error={error} />}

      <Grid
        container // whole components besides background image
      >
        <img
          className="image2"
          src={isMobile ? mobileRectangle : desktopRectangle}
          alt={"A transparent background."}
          style={{ zIndex: 0 }}
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

              "@media (min-width: 400px) and (max-width: 500px)": {
                ml: 0,
              },
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
              Sign up
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
              Have an Account ?
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                mt: "5px",
                ml: "18px",
                color: "#779341",
                cursor: "pointer",
              }}
              onClick={() => navigate("/login")}>
              Sign in
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

            mt: "70%",

            "@media (min-width: 430px) and (max-width: 600px)": {
              mt: "50%",
            },
            "@media (min-width: 400px) and (max-width: 500px)": {
              ml: "15px",
              width: "80%",
            },
            "@media (min-width: 601px) and (max-width: 900px)": {
              mt: "40%",
              ml: "7%",
            },
            "@media (min-width: 600px) and (max-width: 900px)": {
              ml: "4%",
              width: "80%",
            },
            "@media(min-width: 901px)": {
              mt: "25%",
              ml: "50%",
            },
            "@media(min-width: 1200px)": {
              mt: "20%",
            },
            "@media(min-width: 1400px)": {
              mt: "15%",
            },
          }}>
          <SignUpTextfield
            text={"Enter your Email Address"}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <Grid item xs={5} ml={"8.6%"}>
            <Grid
              item
              xs={12}
              sx={{
                ml: "15%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                mt: "33px",
              }}>
              <Typography fontSize={"14px"} color={"#000000"}>
                Username
              </Typography>
              <TextField
                autoFocus
                sx={{
                  backgroundColor: "white",
                  borderRadius: "9px",
                  mt: "16px",
                  width: "85%",
                  display: "flex",
                  flexDirection: "left",
                }}
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </Grid>
          </Grid>

          <Grid item xs={5} mr={"26px"}>
            <SignUpTextfield text={"Contact Number"} mt={"33px"} ml={0} />
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              ml: "15%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              mt: "36px",
            }}>
            <Typography fontSize={"14px"} color={"#000000"}>
              Password
            </Typography>
            <FormControl
              sx={{
                backgroundColor: "white",
                borderRadius: "9px",
                mt: "16px",
                width: "85%",
                display: "flex",
                flexDirection: "left",
              }}
              variant="outlined">
              <OutlinedInput
                id="outlined-adornment-password"
                value={password}
                type={showPassword ? "text" : "password"}
                onChange={e => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end">
                      {showPassword ? (
                        <VisibilityOffOutlined />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>

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
              onClick={handleRegister}>
              <Typography sx={{ color: "#fff", fontSize: "16px" }}>
                Sign up
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
