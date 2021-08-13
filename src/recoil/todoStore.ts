import {atom, atomFamily, selector} from "recoil";

export enum PRIORITY {
  LOW,
  MID,
  HIGH,
}

export type Todo = {
  isChecked: boolean;
  priority: PRIORITY;
  label: string;
}

const todo = atomFamily<Todo, string>({
  key: 'todo/todos',
  default: {
    isChecked: false,
    label: 'Some default text',
    priority: PRIORITY.LOW,
  }
});

const todoIds = atom<string[]>({
  key: 'todo/ids',
  default: [],
});

const numOfTodos = selector<number>({
  key: 'todo/numOfTodos',
  get: ({get}) => get(todoIds).length
})

const numOfDoneTodos = selector<number>({
  key: 'todo/numOfDoneTodos',
  get: ({get}) => get(todoIds).filter(id => get(todo(id)).isChecked).length
})

const numOfUndoneTodos = selector<number>({
  key: 'todo/numOfUndoneTodos',
  get: ({get}) => get(todoIds).filter(id => !get(todo(id)).isChecked).length
})

export const todoStore = {
  todo,
  todoIds,
  numOfTodos,
  numOfDoneTodos,
  numOfUndoneTodos,
}