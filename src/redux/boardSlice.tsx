import { ListItem } from "@mui/material";
import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BoardColumn, BoardTask } from "../types/api/board";

const initialState = {
  columns: [
    // {
    //   id: 1,
    //   title: " 📃 To do",
    // },
    // {
    //   id: 2,
    //   title: " ✏️ In progress",
    // },
    // {
    //   id: 3,
    //   title: " ✔️ Completed",
    // },
  ] as BoardColumn[],
  tasks: [
    // {
    //   order: 0,
    //   parentId: 1,
    //   id: 6,
    //   title: "Learn HTML1",
    // },
    // {
    //   order: 2,

    //   parentId: 2,
    //   id: 7,
    //   title: "Learn HTML2",
    // },
    // {
    //   order: 3,

    //   parentId: 3,
    //   id: 8,
    //   title: "Learn HTML3",
    // },

    // {
    //   order: 11,
    //   parentId: 1,
    //   id: 9,
    //   title: "Learn HTML11",
    // },
    // {
    //   order: 22,
    //   parentId: 2,
    //   id: 10,
    //   title: "Learn HTML22",
    // },
    // {
    //   order: 33,
    //   parentId: 3,
    //   id: 11,
    //   title: "Learn HTML33",
    // },
  ] as BoardTask[],
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    createColumn: (state, action: PayloadAction<string>) => {
      // console.log(action.payload)

      let newColumn: BoardColumn = {
        id: Math.floor(Math.random() * 100000),
        title: action.payload,
        tasks: [],
      };
      state.columns.push(newColumn);

      // state.tasks = action.payload;
      console.log("reducer", initialState.tasks);
    },

    createTask: (
      state,
      action: PayloadAction<{ parentId: number; title: string }>
    ) => {
      const newItem: BoardTask = {
        id: Math.floor(Math.random() * 100000),
        ...action.payload,
        order: state.tasks.length,
      };

      state.tasks.push(newItem);
    },
    moveTask: (state, action: PayloadAction<{ sourceIndex: number, sourceParentId: number, destinationIndex: number, destinationParentId: number }>) => {
      const { destinationIndex, destinationParentId, sourceIndex, sourceParentId } = action.payload

      const sourceTasks = state.tasks.filter((task) => task.parentId === sourceParentId).sort((a, b) => a.order - b.order)
      const destinationTasks = state.tasks.filter((task) => task.parentId === destinationParentId).sort((a, b) => a.order - b.order)


      if (sourceParentId === destinationParentId) {
        if (sourceIndex === destinationIndex) {
          return
        }


        [sourceTasks[sourceIndex].order, destinationTasks[destinationIndex].order] = [destinationTasks[destinationIndex].order, sourceTasks[sourceIndex].order]
        return
      }

      const sourceTask = sourceTasks[sourceIndex]
      sourceTask.parentId = destinationParentId;
      // const destinationTask = state.tasks.find((task) => task.order === destinationIndex && task.parentId === sourceParentId);
      // destinationTasks.flatMap((task, index) => index === destinationIndex ? [task, sourceTask] : task).forEach((task, index) => {
      //   return task.order = index
      // });
      [...destinationTasks.slice(0, destinationIndex), sourceTask, ...destinationTasks.slice(destinationIndex)].forEach((task, index) => {
        return task.order = index
      });



    }
  },
});

export const { createTask, createColumn, moveTask } = boardSlice.actions;
// Action creators are generated for each case reducer function

export default boardSlice.reducer;
