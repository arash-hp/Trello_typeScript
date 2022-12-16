import { Grid, Typography } from "@mui/material"


interface CardProps {
  title:any;
  image:any;
}

const UserProjectCard = ({title,image}:CardProps)=>{
    return(
        <Grid
          sx={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            width: "200px",
            height: "100px",
            margin: 1,
            borderRadius: "4px",
          }}
        >
          <Typography variant="subtitle1" p={1}>
            {title}
          </Typography>
        </Grid>
    )
}

export default UserProjectCard;