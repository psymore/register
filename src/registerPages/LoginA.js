import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import {
  LoginFacebook,
  LoginGoogle,
  mobileBackground,
  mobileRectangle,
} from "../images";
import "./LoginA.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

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
              Sign in
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

        <Grid container sx={{ position: "absolute", mt: "281px" }}>
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

        <Grid container sx={{ position: "absolute", mt: "100%" }}>
          <SignUpTextfield
            text={"Enter your Username or Email Address"}
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <SignUpTextfield
            text={"Enter your Password"}
            mt={"36px"}
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
              onClick={handleLogin}>
              <Typography sx={{ color: "#fff", fontSize: "16px" }}>
                Sign in
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
