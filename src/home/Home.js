import { Grid, Typography } from "@mui/material";
import "../registerPages/LoginA.css";

export default function Home() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography sx={{ fontSize: 46, mt: 50 }}>HOME</Typography>
      </Grid>
    </Grid>
  );
}
