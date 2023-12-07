import { Grid, Typography } from "@mui/material";
import "../registerPages/LoginA.css";
import TopBar from "../components/AppBar/TopBar";

export default function Home() {
  return (
    <Grid container>
      <TopBar />
      <Grid item xs={12}>
        <Typography sx={{ fontSize: 46, mt: 50 }}>HOME</Typography>
      </Grid>
    </Grid>
  );
}
