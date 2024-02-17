import React from "react";
import AlertContainer from "../components/Alert/Alert";
import { Grid } from "@mui/material";
import Headbar from "../components/Headbar/Headbar";
import Filters from "../components/Filters/Filters";
import SideNav from "../components/SideNav/SideNav";

const alarms = [
  {
    name: "AMZN",
    price: "200",
    precentage: "-25%",
    risk: "Low Risk",
    Desc: "",
  },
  {
    name: "TSLA",
    price: "200",
    precentage: "-25%",
    risk: "Low Risk",
    Desc: "",
  },
  {
    name: "ABQQ",
    price: "200",
    precentage: "-25%",
    risk: "Low Risk",
    Desc: "",
  },
  {
    name: "ABQQ",
    price: "200",
    precentage: "-25%",
    risk: "Low Risk",
    Desc: "",
  },
  {
    name: "ABQQ",
    price: "200",
    precentage: "-25%",
    risk: "Low Risk",
    Desc: "",
  },
  {
    name: "ABQQ",
    price: "200",
    precentage: "-25%",
    risk: "Low Risk",
    Desc: "",
  },
  {
    name: "ABQQ",
    price: "200",
    precentage: "-25%",
    risk: "Low Risk",
    Desc: "",
  },
  {
    name: "ABQQ",
    price: "200",
    precentage: "-25%",
    risk: "Low Risk",
    Desc: "",
  },
];

export default function Main() {
  return (
    <Grid
      sx={{
        display: "flex",
        padding: "0",
        margin: "0",
        maxHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Grid sx={{ flex: "1" }}>
        <SideNav />
      </Grid>
      <Grid sx={{ flex: "16" }}>
        <Headbar />
        <Grid
          sx={{
            maxHeight: "85vh",
            overflowY: "scroll",
            padding: ".5rem",
          }}
        >
          {alarms.map((alarm, index) => {
            return <AlertContainer AlarmDetails={alarm} key={index} />;
          })}
        </Grid>
      </Grid>
      <Grid sx={{ flex: "8" }}>
        <Filters />
      </Grid>
    </Grid>
  );
}
