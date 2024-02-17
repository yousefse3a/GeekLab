import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge, Grid } from "@mui/material";

export default function SearchInput() {
  return (
    <Grid sx={{ display: "flex", alignItems: "center" }}>
      <Paper
        component="form"
        sx={{
          marginRight: "1rem",
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "300px",
          height: "38px",
          borderRadius: "5px",
          background: "#414040",
          color: "white",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, color: "white", fontSize: ".8rem" }}
          placeholder="Search By"
        />
        <IconButton
          type="button"
          sx={{ p: "10px", color: "white" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <Badge badgeContent={6} color="success">
        <NotificationsIcon color="primary" />
      </Badge>
    </Grid>
  );
}

export function Search() {
  return (
    <Grid sx={{ display: "flex", alignItems: "center" }}>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "250px",
          height: "25px",
          borderRadius: "5px",
          background: "#414040",
          color: "white",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, color: "white", fontSize: ".8rem" }}
          placeholder="Search By"
        />
        <IconButton
          type="button"
          sx={{ p: "10px", color: "white" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Grid>
  );
}
