import { Button, Grid, Typography } from "@mui/material";
import { mobileBackground, mobileRectangle } from "../images";
import { SignUpTextfield } from "./LoginA";
import "./LoginA.css";

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
              }}>
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
            border: "1px solid",
          }}>
          <SignUpTextfield text={"Enter your Username or Email Address"} />

          <Grid item xs={5} ml={"8.6%"}>
            <SignUpTextfield text={"Username"} mt={"33px"} />
          </Grid>
          <Grid item xs={5} mr={"26px"}>
            <SignUpTextfield text={"Contact Number"} mt={"33px"} ml={0} />
          </Grid>

          <SignUpTextfield text={"Enter your Password"} mt={"33px"} />

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
