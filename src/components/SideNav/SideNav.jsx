import { Box, Grid } from "@mui/material";
import logo from "../../assets/street suite logo-04.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SchoolIcon from "@mui/icons-material/School";
import SettingsIcon from "@mui/icons-material/Settings";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import React from "react";

export default function SideNav() {
  return (
    <Grid
      sx={{
        height: "100%",
        background: "#181818 ",
        zIndex: "555",
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        "& > div > div ": {
          fontSize: "1.3rem",
          margin: "1rem 0",
        },
        "&:hover": {
          width: "200px",
          position: "absolute",
          "& > div > img ": {
            width: "200%",
          },
          "& > div > div ": {
            padding: "0 .5rem",
            display: "block",
          },
        },
      }}
    >
      <Box sx={{ width: "100px", display: "flex" }}>
        <img src={logo} width={"100%"} />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box>
          <NotificationsIcon />
        </Box>
        <Box sx={{ display: "none" }}>ALERTS</Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box>
          <SchoolIcon />
        </Box>
        <Box sx={{ display: "none" }}>Traninig</Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box>
          <SettingsIcon />
        </Box>
        <Box sx={{ display: "none" }}>Automation</Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box>
          <BackupTableIcon />
        </Box>
        <Box sx={{ display: "none" }}>Portfolio</Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box>
          <TrendingUpIcon />
        </Box>
        <Box sx={{ display: "none" }}>Trading</Box>
      </Box>
    </Grid>
  );
}
