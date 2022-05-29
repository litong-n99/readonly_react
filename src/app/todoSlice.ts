import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface TodoState {
  todos: {
    id: number;
    name: string;
    isFinish: boolean;
  }[]
}

const initialState: TodoState = {
  todos: []
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: Date.now(),
        name: action.payload,
        isFinish: false
      })
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      const index = state.todos.findIndex((item) => item.id === action.payload);
      state.todos.splice(index, 1);
    },
    changeStute: (state, action: PayloadAction<{id: number, isFinish: boolean}>) => {
      const todo = state.todos.find((item) => item.id === action.payload.id);
      if (todo) {
        todo.isFinish = action.payload.isFinish;
      }
    },
  },
});

export const { addTodo, removeTodo, changeStute } = todoSlice.actions;

export const unFinishedTodo = (state: RootState) => state.todo.todos.filter(item => !item.isFinish);
export const finishedTodo = (state: RootState) => state.todo.todos.filter(item => item.isFinish);

export default todoSlice.reducer;
