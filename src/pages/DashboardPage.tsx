import { Grid } from "@mui/material";
import { FC } from "react";
import BoardContent from "../components/BoardContent";
import image from "../assets/image/bakgroundSample.jpg";





const DashboardPage: FC = () => {

// TODO : ObjectClassName
  return (
    <Grid
      sx={{
        backgroundImage:
          `url(${image})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <BoardContent />
    </Grid>
  );
};

export default DashboardPage;
