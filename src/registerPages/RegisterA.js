import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import {
  LoginFacebook,
  LoginGoogle,
  mobileBackground,
  mobileRectangle,
} from "../images";
import "./RegisterA.css";

const SignUpTextfield = ({ text, mt }) => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        ml: "15%",
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
          mt: "16px",
          width: "85%",
          display: "flex",
          flexDirection: "left",
        }}
      />
    </Grid>
  );
};

export default function RegisterA() {
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
            alt="mobileBackground"
          />
          <img className="image2" src={mobileRectangle} alt="mobileRectangle" />
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
              variant="subtitle1"
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
              variant="body2"
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
              }}>
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
          <SignUpTextfield text={"Enter your Username or Email Address"} />
          <SignUpTextfield text={"Enter your Password"} mt={"36px"} />

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
              }}>
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
