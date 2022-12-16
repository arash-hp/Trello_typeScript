import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BoardContent from "../components/BoardContent";
import { Grid } from "@mui/material";

export interface IAboutPageProps {}

const DashboardPage: FC = () => {
  const [message, setMessage] = useState("");
  // const { number } = useParams();

  // useEffect(() => {
  //     if (number) {
  //         setMessage('The number is ' + number);
  //     } else {
  //         setMessage('No number was provided');
  //     }
  // }, []);

  return (
    <Grid>
      <BoardContent />
    </Grid>
  );
};

export default DashboardPage;
