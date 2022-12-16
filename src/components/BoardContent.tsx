import { Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateColumn from "./board/column/CreateColumn";
import CreateTask from "./board/task/CreateTask";

const BoardContent: FC = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const dataColumns = useSelector((state: any) => state.board.columns);
  const dataTasks = useSelector((state: any) => state.board.tasks);

  const handelOpen = () => {
    setOpen(true);
  };

  console.log('columns', dataColumns)
  console.log('tasks', dataTasks)

  // const handleSubmit = (value ) => {
  //   dispatch(createColumn(value));
  //   // // resetForm({ value: "" });
  // };

  return (
    <Grid container>
      {dataColumns?.map((column: any) => {
        return <Grid
        key={column.id}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
            background: "#eae4e4",
            padding: "8px",
            borderRadius: "4px",
            margin: "8px",
          }}
        >
          <Typography variant="subtitle2">{column.title}</Typography>
          {dataTasks.map((task: any) => {
            return <Grid
            key={task.id}
              sx={{
                background: '#fff',
                padding: "8px",
                borderRadius: "4px",
                margin: "8px",
              }}>
              {task.title}
            </Grid>
          })}
          <CreateTask parentId={column.id} />
        </Grid>;
      })}
      <CreateColumn />


    </Grid>
  );
};

export default BoardContent;
