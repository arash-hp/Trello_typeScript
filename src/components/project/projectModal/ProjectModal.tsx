import styled from "@emotion/styled";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Button, Grid, IconButton } from "@mui/material";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import { Form, Formik } from "formik";
import * as React from "react";
import * as Yup from "yup";
import { InputField } from "../../form/InputField";

const rootStyle = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "8px",
  border: "none",
  boxShadow: 24,
  p: 4,
  "&:focus-visible": {
    // border: 'red solid 4px',
    outline: "none",
  },
  title: {
    display: "inline-flex",
    alignItems: "center",
  },
};

const Input = styled("input")({
  display: "none",
});

// type props = {
//   handleClose:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
//   openModal:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
//   handleSubmit:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
// };

export interface ModalProps {
  openModal: boolean;
  handleClose: () => void;
  handleSubmit: any;
}

const ProjectModal: React.FunctionComponent<ModalProps> = ({
  handleClose,
  openModal,
  handleSubmit,
}) => {
  const [selectedImage, setSelectedImage] = React.useState<any>(null);

  // const handleSubmit = (value) => {
  //   console.log(value);
  // };
  return (
    <Grid>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Formik
          initialValues={{ boardTitle: "" }}
          onSubmit={handleSubmit}
          validationSchema={Yup.object().shape({
            boardTitle: Yup.string().required("Required"),
          })}
        >
          {({}) => {
            return (
              <Form>
                <Grid sx={rootStyle}>
                  <Grid container justifyContent="space-between">
                    <Grid sx={rootStyle.title}>
                      <Typography variant="subtitle2" id="modal-modal-title">
                        Create board
                      </Typography>
                    </Grid>
                    <Stack spacing={2}>
                      <label htmlFor="icon-button-file">
                        <Input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                          name="myImage"
                          onChange={(event: any) => {
                            // console.log(event.target.files[0]);
                            setSelectedImage(event?.target?.files[0]);
                          }}
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <PhotoCamera />
                        </IconButton>
                      </label>
                    </Stack>
                  </Grid>
                  <Grid mb={2}>
                    {selectedImage && (
                      <Grid>
                        <img
                          src={URL?.createObjectURL(selectedImage)}
                          height="150px"
                          width="100%"
                          style={{ objectFit: "contain" }}
                        />
                        <Button onClick={() => setSelectedImage(null)}>
                          Remove
                        </Button>
                      </Grid>
                    )}
                  </Grid>
                  <InputField
                    name="boardTitle"
                    label="put your board name"
                    fullWidth
                  />
                  <Button
                    // disabled={isSubmitting}
                    variant="contained"
                    type="submit"
                    sx={{ marginTop: 2 }}
                  >
                    Create Project
                  </Button>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </Modal>
    </Grid>
  );
};

export default ProjectModal;
