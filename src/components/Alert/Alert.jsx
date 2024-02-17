import {
  Box,
  CardContent,
  CardHeader,
  Collapse,
  Divider,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import DescriptionIcon from "@mui/icons-material/Description";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import MoneyIcon from "@mui/icons-material/Money";

export default function AlertContainer({ AlarmDetails }) {
  const [collapseOpen, setcollapseOpen] = useState(false);
  const handleCollapse = () => {
    setcollapseOpen((prev) => {
      console.log("prev", prev);
      return !prev;
    });
  };
  return (
    <>
      <CardHeader
        title={<Alert AlarmDetails={AlarmDetails} />}
        sx={{
          height: "60px",
          width: "100%",
          background: collapseOpen ? " #53ACFF" : "#414040",
          padding: "0",
          margin: "1rem 0 0 0",
          borderRadius: ".5rem",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
        onClick={(e) => {
          handleCollapse();
          e.stopPropagation();
        }}
      />

      <Collapse
        in={collapseOpen}
        timeout="auto"
        sx={{ width: "100%", padding: "0" }}
        unmountOnExit
      >
        <CardContent sx={{ padding: "0", margin: "0" }}>
          <Grid
            sx={{
              background: "#181818",
              display: "flex",
              justifyContent: "start",
              padding: "2rem",
              borderRadius: "0rem 0rem .5rem .5rem",
            }}
          >
            <Box sx={{ display: "flex" }}>
              $TSLA just annooucced an acquistion of $NFLX at $200 B.
            </Box>
          </Grid>
        </CardContent>
      </Collapse>
    </>
  );
}

export function Alert({ AlarmDetails }) {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Poppins",
        fontSize: ".9rem",
        lineHeight: "22.5px",
        fontWeight: "400",
        "& > div": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: "1",
          "&>div": {
            paddingRight: "1rem",
          },
        },
      }}
    >
      <Grid sx={{}}>
        <Box>
          <LocalOfferIcon />
        </Box>
        <Box>{AlarmDetails.name}</Box>
      </Grid>
      <Divider orientation="vertical" variant="middle" flexItem />
      <Grid>
        <Box>
          <DescriptionIcon />
        </Box>
        <Box>{AlarmDetails.price}</Box>
      </Grid>
      <Divider orientation="vertical" variant="middle" flexItem />
      <Grid>
        <Box>
          <StackedLineChartIcon />
        </Box>
        <Box>{AlarmDetails.precentage}</Box>
      </Grid>
      <Divider orientation="vertical" variant="middle" flexItem />
      <Grid>
        <Box>
          <MoneyIcon />
        </Box>
        <Box>{AlarmDetails.risk}</Box>
      </Grid>
    </Grid>
  );
}
