import {
  Box,
  CardContent,
  CardHeader,
  Collapse,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import SearchInput, { Search } from "../SearchInput/SearchInput";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import RecyclingIcon from "@mui/icons-material/Recycling";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
export default function Filters() {
  return (
    <Grid
      sx={{
        width: "100%",
        padding: "1rem 0 1rem 1rem",
        boxSizing: "border-box",
        maxHeight: "97vh",
        overflowY: "scroll",
      }}
    >
      <Grid
        sx={{
          background: "#181818",
          padding: "1rem .5rem",
          borderRadius: "8px",
          display: "flex",
          flexFlow: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>Filters</Box>
        <Filter />
        <Stock />
        <Grid
          sx={{
            padding: ".5rem 2rem",
            background: "#53ACFF",
            borderRadius: "8px",
          }}
        >
          Apply
        </Grid>
      </Grid>
    </Grid>
  );
}

export function Filter() {
  return (
    <Grid sx={{ width: "100%", fontSize: ".8rem", margin: "1rem 0" }}>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: ".5rem",
        }}
      >
        <Box>Filters Applied</Box>
        <Box>Clear All</Box>
      </Grid>
      <Grid
        sx={{
          borderRadius: "7px",
          height: "50px",
          width: "100%",
          background: "#202020",
        }}
      ></Grid>
    </Grid>
  );
}
export function Stock() {
  return (
    <Grid sx={{ width: "100%", fontSize: ".8rem", margin: "1rem 0" }}>
      <Grid
        sx={{
          borderRadius: "7px",
          width: "100%",
          background: "#202020",
          padding: ".5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "100%", textAlign: "start" }}>Stock</Box>
        <Search />
        <Industry />
        <Grid sx={{ display: "flex", width: "100%" }}>
          <Market />
          <RiskLevel />
        </Grid>
      </Grid>
    </Grid>
  );
}

export function Industry() {
  return (
    <Grid sx={{ width: "100%", margin: "1rem 0" }}>
      <Box>Industry</Box>
      <Grid sx={{ display: "flex", padding: ".5rem" }}>
        <Grid
          sx={{
            flex: "1.5",
            borderLeft: "1px solid",
            paddingLeft: ".5rem",
            "& > div": {
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              padding: ".2rem ",
              margin: ".2rem 0",
              width: "auto",
              "&:hover": {
                background: "#53ACFF",
                color: "white",
                borderRadius: "20px",
              },
            },
          }}
        >
          <Grid>
            <Box sx={{ paddingRight: ".5rem" }}>
              <HeartBrokenIcon fontSize="5rem" />
            </Box>
            <Box>Health Care</Box>
          </Grid>
          <Grid>
            <Box sx={{ paddingRight: ".5rem" }}>
              <RecyclingIcon fontSize="5rem" />
            </Box>
            <Box>Materials</Box>
          </Grid>
          <Grid>
            <Box sx={{ paddingRight: ".5rem" }}>
              <ElectricBoltIcon fontSize="5rem" />
            </Box>
            <Box>Energy</Box>
          </Grid>
          <Grid>
            <Box sx={{ paddingRight: ".5rem" }}>
              <ProductionQuantityLimitsIcon fontSize="5rem" />
            </Box>
            <Box>Consumer Dtsples</Box>
          </Grid>
          <Grid>
            <Box sx={{ paddingRight: ".5rem" }}>
              <HouseSidingIcon fontSize="5rem" />
            </Box>
            <Box>Real Estate</Box>
          </Grid>
        </Grid>
        <Grid
          sx={{
            flex: "1",
            borderLeft: "1px solid",
            paddingLeft: ".5rem",
            "& > div": {
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            },
          }}
        >
          <Grid>
            <Box sx={{ paddingRight: ".5rem" }}>
              <HeartBrokenIcon fontSize="5rem" />
            </Box>
            <Box>IT</Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export function Market() {
  return (
    <Grid sx={{ flex: "1", padding: "0 .5rem" }}>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label" sx={{ color: "white" }}>
          Market Cap
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="Micro"
            control={<Radio size="small" />}
            label="Micro"
          />
          <FormControlLabel
            value="Small"
            control={<Radio size="small" />}
            label="Small"
          />
          <FormControlLabel
            value="Large"
            control={<Radio size="small" />}
            label="large"
          />
        </RadioGroup>
      </FormControl>
    </Grid>
  );
}
export function RiskLevel() {
  return (
    <Grid sx={{ flex: "1", padding: "0 .5rem" }}>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label" sx={{ color: "white" }}>
          Risk Level
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="Low Risk"
            control={<Radio size="small" />}
            label="Low Risk"
          />
          <FormControlLabel
            value="Mid Risk"
            control={<Radio size="small" />}
            label="Mid Risk"
          />
          <FormControlLabel
            value="Low Risk2"
            control={<Radio size="small" />}
            label="Low Risk"
          />
        </RadioGroup>
      </FormControl>
    </Grid>
  );
}
