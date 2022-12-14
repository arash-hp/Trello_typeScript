import { Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";

import * as React from "react";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  onClick: () => void;
}
const MainLayout: React.FC<React.PropsWithChildren<Props>> = ({
  onClick,
  children,
}) => {
  const navigate = useNavigate();
  return (
    <Grid sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
            Stepper
          </Typography>
          {/* <Link to={"/"} color="inherit"> */}
          <Button
            startIcon={<PersonIcon />}
            // onClick={()=>navigate('step-show')}
          >
            Members
          </Button>
          <Button
            startIcon={<SettingsIcon />}
            // onClick={handleClick}
          >
            Setting
          </Button>
          {/* </Link> */}
        </Toolbar>
      </AppBar>
      {children}
    </Grid>
  );
};

export default MainLayout;
