import { Button, Grid, Typography } from "@mui/material";
import { Form, Formik, FormikConfig } from "formik";
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputField } from "../../form/InputField";
// import Task from "../task/task";
import * as Yup from "yup";
import { createTask } from "../../../redux/boardSlice";
import { BoardColumn, BoardTask } from "../../../types/api/board";

export interface ColumnFormProps extends Pick<FormikConfig<BoardColumn>,'onSubmit'> {
  item:BoardColumn,
  // onSubmit:FormikConfig<BoardTask>['onSubmit']

}
const validationSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
});
// type TodoPreview = Pick<Todo, "title" | "completed">


const ColumnForm:FC<ColumnFormProps> = ({item,onSubmit  }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handelOpen = () => {
    setOpen(true);
  };
  
  return (
    <Grid
      sx={{
        width: "300px",
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
        {/* <Button>Add</Button> */}
      </Grid>
      {/* <Grid>
        {titleTask?.map((task:any) => {
          return <Task item={task} />;
        })}
      </Grid> */}
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
        <Button  onClick={handelOpen} sx={{ mb: 2 }}>
          Add a column
        </Button>
        {open && (
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
        )}
      </Grid>
    </Grid>
  );
};

export default ColumnForm;
