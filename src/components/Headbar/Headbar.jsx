import { Box, Divider, Grid } from "@mui/material";
import React from "react";
import SearchInput from "../SearchInput/SearchInput";

export default function Headbar() {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        paddingX: ".5rem",
      }}
    >
      <Grid
        sx={{
          fontSize: "3rem",
          fontWeight: "700",
          lineHeight: "72px",
          display: "flex",
          alignItems: "center",
        }}
      >
        ALERTS
      </Grid>
      <SearchInput />
    </Grid>
  );
}
