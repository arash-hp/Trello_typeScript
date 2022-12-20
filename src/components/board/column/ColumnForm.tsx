import { Button, Grid, Typography } from "@mui/material";
import { Form, Formik, FormikConfig } from "formik";
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputField } from "../../form/InputField";
// import Task from "../task/task";
import * as Yup from "yup";
import { createTask } from "../../../redux/boardSlice";
import { BoardColumn, BoardTask } from "../../../types/api/board";

export interface ColumnFormProps extends Pick<FormikConfig<BoardColumn>, 'onSubmit'> {
  item: BoardColumn,
  // FIXME: in chiye baraye onClick????
  onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined,
  open: Boolean
  // onSubmit:FormikConfig<BoardTask>['onSubmit']
}
const validationSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
});

const ColumnForm: FC<ColumnFormProps> = ({ item, onSubmit, onClick, open }) => {
  return (
    <Grid
      sx={{
        width: "300px",
      }}
    >
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          background: "#fff",
          padding: "8px",
          borderRadius: "4px",
          margin: "8px",
        }}
      >
        <Button variant="contained" onClick={onClick} >
          Add a column
        </Button>
        {open && (
          <Grid mt={2}>
            <Formik
              initialValues={item}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {({ isSubmitting, dirty, isValid }) => {
                return (
                  <Form>
                    <Grid>
                      <InputField
                        name="title"
                        label="Enter a title for this card..."
                        fullWidth
                      />
                      <Grid mt={1}>
                        <Button
                          disabled={!isValid || !dirty}
                          type="submit"
                          variant="contained"
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

export default ColumnForm;
