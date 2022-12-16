import {Button, Grid } from "@mui/material";
import { FC } from "react";

import ControlPointIcon from "@mui/icons-material/ControlPoint";

type ButtonProps = {
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};



const DefaultProjectCard=  (props: { onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined; }) => {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#1A75D2",
        backgroundSize: "cover",
        width: "200px",
        height: "100px",
        margin: 1,
        borderRadius: "4px",
      }}
    >
      {/* TODO: in dokme chera props ghabul nemikone typesho? */}
      {/* <ControlPointIcon
        onClick={props.onClick}
        sx={{ color: "#fff", fontSize: "28px", cursor: "pointer" }}
      /> */}
      

       <Button
        variant="text"
        onClick={props.onClick}
      >
        Add Project
      </Button>
    </Grid>
  );
};

export default DefaultProjectCard;
