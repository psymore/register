import { useNavigate } from "react-router-dom";

const { Button, Grid, Typography } = require("@mui/material");
export default function Landing() {
  const navigate = useNavigate();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography sx={{ fontSize: 100, color: "#779341", mt: "230px" }}>
          Welcome
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="outlined"
          sx={{
            mt: 20,
            width: "20vw",
            height: "150px",
            color: "#579341",
            border: "2px solid #adb6b9",
            fontSize: 30,
            fontFamily: "Poppins",
            "&:hover": {
              color: "white",
              backgroundColor: "#d87e7a",
              border: "2px solid #d8c0d0",
            },
            "@media(max-width: 900px)": {
              backgroundColor: "white",
              fontSize: 20,
              "&:hover": {
                backgroundColor: "#d8c0d0",
              },
            },
          }}
          onClick={() => navigate("/register")}>
          Click Here To Continue
        </Button>
      </Grid>
    </Grid>
  );
}
