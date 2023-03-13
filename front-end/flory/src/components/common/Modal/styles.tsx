import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";

export const SDrawer = styled(SwipeableDrawer)`
  width: 100%;
  .MuiBackdrop-root {
    position: relative;
    margin: auto;
    width: 100%;
    height: 100%;
    max-width: 480px;
  }
  .MuiPaper-root {
    margin: auto;
    width: 100%;
    max-width: 480px;
  }
`;

export const Puller = styled(Box)(({ theme }) => ({
  width: 50,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[400] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 16,
  bottom: 16,
  left: "calc(50% - 15px)",
}));