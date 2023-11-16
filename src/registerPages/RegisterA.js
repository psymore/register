import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mobileBackground, mobileRectangle } from "../images";
import { SignUpTextfield } from "./LoginA";
import "./LoginA.css";
import axios from "axios";

export default function RegisterA() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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

  const navigate = useNavigate();

  return (
    <Grid
      container
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Grid container>
        <Grid item xs={12}>
          <img
            className="image1"
            src={mobileBackground}
            alt="A interior has an armchair on empty white wall background for mobile view."
          />
          <img
            className="image2"
            src={mobileRectangle}
            alt="A transparent background for mobile view."
          />
        </Grid>

        <Grid
          container
          sx={{
            position: "absolute",
            mt: "122px",
          }}>
          <Grid
            item
            xs={7}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}>
            <Typography
              sx={{
                fontSize: "16px",
                ml: "53px",
              }}>
              Welcome to LOREM
            </Typography>
            <Typography sx={{ ml: "53px", fontSize: "40px", mt: "13px" }}>
              Sign up
            </Typography>
          </Grid>
          <Grid
            item
            xs={5}
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
          sx={{
            display: "flex",
            position: "absolute",
            mt: "70%",
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
                Enter your Username
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
            }}>
            <Button
              variant="contained"
              sx={{
                width: "149px",
                height: "54px",
                mr: "50px",
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

        <Grid
          container
          sx={{
            position: "absolute",
            mt: "622px",
          }}></Grid>
      </Grid>
    </Grid>
  );
}
