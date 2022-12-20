import { Grid, Typography } from "@mui/material";
import { FC, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateColumn from "./board/column/CreateColumn";
import CreateTask from "./board/task/CreateTask";
import { DragDropContext, Draggable, Droppable, OnDragEndResponder } from "react-beautiful-dnd";
import { RootState } from "../redux/store";
import { moveTask } from "../redux/boardSlice";


const BoardContent: FC = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const dataColumns = useSelector((state: RootState) => state.board.columns);
  const dataTasks = useSelector((state: RootState) => state.board.tasks);

  const handelOpen = () => {
    setOpen(true);
  };

  console.log('columns', dataColumns)
  console.log('tasks', dataTasks)


  const onDragEnd: OnDragEndResponder = useCallback((result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    dispatch(moveTask({
      sourceIndex: source.index,
      sourceParentId: +source.droppableId,
      destinationIndex: destination.index,
      destinationParentId: +destination.droppableId
    }))
  }, [])

return (
  <Grid container>
    <DragDropContext onDragEnd={onDragEnd}>


      {dataColumns?.map((column) => {
        return <Droppable key={column.id} droppableId={`${column.id}`}>
          {(provided) => {
            return <Grid
              {...provided.droppableProps}
              ref={provided.innerRef}
              key={column.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "300px",
                height:'fit-content',
                background: "#ffffff73",
                padding: "8px",
                borderRadius: "4px",
                margin: "8px",
              }}
            >
              <Typography variant="subtitle2">{column.title}</Typography>
              {dataTasks.filter((task) => task.parentId === column.id).sort((a, b) => a.order - b.order).map((task,index) => {
                return <Draggable
                  key={task.id}
                  draggableId={`${task.id}`}
                  index={index}
                >
                  {(provided) => {
                    return <Grid
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      key={task.id}
                      sx={{
                        background: '#fff',
                        padding: "8px",
                        borderRadius: "4px",
                        margin: "8px",
                      }}>
                      {task.title}
                    </Grid>
                  }}
                </Draggable>
              })}
              <CreateTask parentId={column.id} />
            </Grid>;
          }}

        </Droppable>

      })}
      <CreateColumn />

    </DragDropContext>

  </Grid>
);
};

export default BoardContent;
