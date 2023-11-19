import {
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { desktopRectangle, mobileRectangle } from "../images";
import { SignUpTextfield } from "./LoginA";

import axios from "axios";
import "./LoginA.css";

export default function RegisterA() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
      })
      .catch(error => {
        console.error("Registration failed:", error.response.data);
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
      <Grid
        container // whole components besides background image
      >
        <img
          className="image2"
          src={isMobile ? mobileRectangle : desktopRectangle}
          alt={"A transparent background for mobile view."}
        />
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={6}
          lg={5}
          xl={4.5}
          sx={{
            position: "absolute",
            mt: "122px",
            ml: 0,
            "@media(max-width:900px)": {
              ml: "5%",
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
          md={6}
          lg={5}
          xl={4.5}
          sx={{
            display: "flex",
            position: "absolute",

            mt: "70%",

            "@media (max-width: 600px)": {
              mt: "70%",
            },

            "@media (min-width: 601px) and (max-width: 900px)": {
              mt: "40%",
              ml: "7%",
            },

            "@media(min-width: 901px)": {
              mt: "15%",
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

          <SignUpTextfield
            text={"Enter your Password"}
            mt={"33px"}
            value={password}
            onChange={e => setPassword(e.target.value)}
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
