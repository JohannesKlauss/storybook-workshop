import {PRIORITY, todoStore} from "./todoStore";
import {useRecoilCallback} from "recoil";
import {v4 as uuidv4} from "uuid";

export default function useCreateTodo() {
  return useRecoilCallback(({set}) => (label: string, priority: PRIORITY = PRIORITY.LOW) => {
    const id = uuidv4();

    set(todoStore.todoIds, ids => [...ids, id]);
    set(todoStore.todo(id), {
      label,
      priority,
      isChecked: false,
    })
  }, []);
}