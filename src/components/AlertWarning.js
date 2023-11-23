import CloseIcon from "@mui/icons-material/Close";
import { Alert, AlertTitle, Collapse, IconButton } from "@mui/material";

export default function AlertWarning({ open, setOpen, error, width }) {
  return (
    <Collapse in={open}>
      <Alert
        severity="warning"
        variant="outlined"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpen(false);
            }}>
            <CloseIcon fontSize="medium" />
          </IconButton>
        }
        sx={{
          backgroundImage: "linear-gradient(to right,#b9c29f, #ff9a00)",
          color: "#423564",
          display: "flex",
          alignItems: "center",
          gap: 1,
          zIndex: 1000,
          position: "fixed",
          left: "50%",
          transform: "translateX(-50%)",
          top: 0,
          width: width ?? "80%",
          maxWidth: 400,
        }}>
        <AlertTitle sx={{ display: "flex", alignItems: "flex-start" }}>
          Warning
        </AlertTitle>
        <strong>{error}</strong>
      </Alert>
    </Collapse>
  );
}
