import { Grid, Typography } from "@mui/material"


interface CardProps {
  title: any;
  image: any;
  itemId: number;
}

const UserProjectCard = ({ title, image, itemId }: CardProps) => {
  console.log('itemID', itemId)
  return (
    <Grid
      sx={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        width: "200px",
        height: "100px",
        margin: 1,
        borderRadius: "4px",
        transition: '0.6s',
        '&:hover': {
          opacity: "0.8",
          transform: 'scale(0.8)'
        }
      }}
    >
      <Typography variant="subtitle1" p={1}>
        {title}
      </Typography>
    </Grid>
  )
}

export default UserProjectCard;