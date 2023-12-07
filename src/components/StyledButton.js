import { grey, red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { Button, Grid } from "@mui/material";

export default function StyledButton({ children }) {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: "#000000",
    width: "10rem",
    fontWeight: 500,
    fontSize: "1rem",
    // backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: grey[50],
      color: "black",
      fontWeight: 700,
    },
  }));
  return (
    <Grid>
      <ColorButton>{children}</ColorButton>
    </Grid>
  );
}
