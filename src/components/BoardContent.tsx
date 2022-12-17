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

  // const handleSubmit = (value ) => {
  //   dispatch(createColumn(value));
  //   // // resetForm({ value: "" });
  // };

  const onDragEnd: OnDragEndResponder = useCallback((result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    dispatch(moveTask({
      sourceIndex: source.index,
      sourceParentId: +source.droppableId,
      destinationIndex: destination.index,
      destinationParentId: +destination.droppableId
    }))

    // if (source.droppableId === destination.droppableId) {
      //   const sourceTask = dataTasks.find((task) => task.order === source.index && task.parentId === +source.droppableId)
      //   const destinationTask = dataTasks.find((task) => task.order === destination.index && task.parentId === +source.droppableId)
    // }

    // if (source.droppableId !== destination.droppableId) {
    //   const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
    //   const destinationColIndex = data.findIndex(
    //     (e) => e.id === destination.droppableId
    //   );

    //   const sourceCol = data[sourceColIndex];
    //   const destinationCol = data[destinationColIndex];

    //   const sourceTask = [...sourceCol.tasks];
    //   const destinationTask = [...destinationCol.tasks];

    //   const [removed] = sourceTask.splice(source.index, 1);
    //   destinationTask.splice(destination.index, 0, removed);

    //   const newData = data.map((item, index) => {
    //     if (index === sourceColIndex) {
    //       return {
    //         ...item,
    //         tasks: sourceTask,
    //       };
    //     }
    //     if (index === destinationColIndex) {
    //       return {
    //         ...item,
    //         tasks: destinationTask,
    //       };
    //     }
    //     return item;
    //   });
    // setColumnID(sourceColIndex)

    // dispatch(titleColumnAction(newData));
  
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
                background: "#eae4e4",
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
