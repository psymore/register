import { Visibility, VisibilityOffOutlined } from "@mui/icons-material";
import {
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

export default function PasswordField({
  handleClickShowPassword,
  open,
  showPassword,
  setPassword,
}) {
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
        mt: "36px",
      }}>
      <Typography fontSize={"14px"} color={"#000000"}>
        Password
      </Typography>
      <TextField
        sx={{
          backgroundColor: "white",
          borderRadius: "9px",
          mt: "16px",
          width: "85%",
          display: "flex",
          flexDirection: "left",
        }}
        fullWidth
        type={showPassword ? "text" : "password"}
        onChange={e => setPassword(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword}>
                {showPassword ? <VisibilityOffOutlined /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  );
}
