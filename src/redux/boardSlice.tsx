import { ListItem } from "@mui/material";
import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BoardColumn, BoardTask } from "../types/api/board";

const initialState = {
  columns: [
    // {
    //   id: "1",
    //   title: " 📃 To do",
    //   tasks: [
    //     {
    //       id: "1",
    //       title: "Learn JavaScript",
    //     },
    //     {
    //       id: "2",
    //       title: "Learn Git",
    //     },
    //     {
    //       id: "3",
    //       title: "Learn Python",
    //     },
    //   ],
    // },
    // {
    //   id: "2",
    //   title: " ✏️ In progress",
    //   tasks: [
    //     {
    //       id: "4",
    //       title: "Learn CSS",
    //     },
    //     {
    //       id: "5",
    //       title: "Learn Golang",
    //     },
    //   ],
    // },
    // {
    //   id: "3",
    //   title: " ✔️ Completed",
    //   tasks: [
    //     {
    //       id: "6",
    //       title: "Learn HTML",
    //     },
    //   ],
    // },
  ] as BoardColumn[],
  tasks: [] as BoardTask[],
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
      };

      state.tasks.push(newItem);
    },
  },
});

export const { createTask, createColumn } = boardSlice.actions;
// Action creators are generated for each case reducer function

export default boardSlice.reducer;
