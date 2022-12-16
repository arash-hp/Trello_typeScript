import { Grid } from "@mui/material";
import { FC, useEffect, useState } from "react";
import ProjectModal from "./project/projectModal/ProjectModal";
import DefaultProjectCard from "./project/DefaultProjectCard";
import UserProjectCard from "./project/UserProjectCard";

const ProjectContent: FC = () => {
  const [open, setOpen] = useState(false);
  const [contentBoard, setContentBoard] = useState([
    {
      id: 1,
      title: "NewProject",
      image:
        "https://nystudio107-ems2qegf7x6qiqq.netdna-ssl.com/img/blog/_1200x675_crop_center-center_82_line/image_optimzation.jpg",
    },
    {
      id: 2,
      title: "NewProject2",
      image:
        "https://astrotalk.com/astrology-blog/wp-content/uploads/2022/05/tree-736885__480.jpg",
    },
    {
      id: 3,
      title: "NewProject3",
      image:
        "https://nystudio107-ems2qegf7x6qiqq.netdna-ssl.com/img/blog/_1200x675_crop_center-center_82_line/image_optimzation.jpg",
    },
  ]);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  const CreateNewBoard = (value: any) => {
    handleModalClose();
    setContentBoard((oldBoard: any) => [
      ...oldBoard,
      {
        title: value.boardTitle,
        image:
          "https://astrotalk.com/astrology-blog/wp-content/uploads/2022/05/tree-736885__480.jpg",
      },
    ]);
  };

  useEffect(() => {}, [contentBoard, open]);

  return (
    <Grid container justifyContent="center">
      {contentBoard.map((item, index) => (
        <UserProjectCard key={index} title={item.title} image={item.image} />
      ))}
      <DefaultProjectCard onClick={handleModalOpen} />
      <ProjectModal
        handleSubmit={CreateNewBoard}
        handleClose={handleModalClose}
        openModal={open}
      />
    </Grid>
  );
};

export default ProjectContent;
