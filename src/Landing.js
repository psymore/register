import { useNavigate } from "react-router-dom";

const { Button, Grid, Typography } = require("@mui/material");
export default function Landing() {
  const navigate = useNavigate();

  return (
    <Grid item xs={12}>
      <Button
        variant="outlined"
        sx={{
          mt: 20,
          width: "50vw",
          height: "60vh",
        }}
        onClick={() => navigate("/register")}>
        <Typography sx={{ fontSize: 100, color: "#779341" }}>
          Click Here
        </Typography>
      </Button>
    </Grid>
  );
}
