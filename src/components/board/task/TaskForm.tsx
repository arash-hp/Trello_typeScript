import { Button, Grid, Typography } from "@mui/material";
import { Form, Formik, FormikConfig } from "formik";
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputField } from "../../form/InputField";
// import Task from "../task/task";
import * as Yup from "yup";
import { createTask } from "../../../redux/boardSlice";
import { BoardTask } from "../../../types/api/board";

export interface TaskFormProps extends Pick<FormikConfig<BoardTask>, 'onSubmit'> {
  item: BoardTask,
  onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined,
  open: Boolean
  // onSubmit:FormikConfig<BoardTask>['onSubmit']

}
const validationSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
});


const TaskForm: FC<TaskFormProps> = ({ item, onSubmit, onClick, open }) => {

  return (
    <Grid
      sx={{
        // width: "300px",
        background: "#eae4e4",
        padding: "8px",
        borderRadius: "4px",
        margin: "8px",
      }}
    >
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button>Add</Button>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          background: "#eae4e4",
          padding: "8px",
          borderRadius: "4px",
          margin: "8px",
        }}
      >
        <Button onClick={onClick} >
          Add a task
        </Button>
        {open && (
          <Grid>
            <Formik
              initialValues={item}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {({ isSubmitting, dirty, isValid }) => {
                return (
                  <Form>
                    <Grid mt={2}>
                      <InputField
                        name="title"
                        label="Enter a title for new card..."
                        fullWidth
                      />
                      <Grid mt={1}>
                        <Button
                          disabled={!isValid || !dirty}
                          type="submit"
                        >
                          Add
                        </Button>
                        {/* <Button onClick={() => setOpen(false)}>
                        remove
                      </Button> */}
                      </Grid>
                    </Grid>
                  </Form>
                );
              }}
            </Formik>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default TaskForm;
