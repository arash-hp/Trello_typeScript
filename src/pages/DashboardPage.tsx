import { Grid } from "@mui/material";
import { FC } from "react";
import BoardContent from "../components/BoardContent";
import image from "../assets/image/bakgroundSample.jpg";
import MainLayout from "../layouts/MainLayout";

const DashboardPage: FC = () => {
  const handelClick = () => { };

  // TODO : ObjectClassName
  return (
    <MainLayout onClick={handelClick}>

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
    </  MainLayout>
  );
};

export default DashboardPage;
