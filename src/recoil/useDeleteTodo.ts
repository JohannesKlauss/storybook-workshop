import {useRecoilCallback} from "recoil";
import {todoStore} from "./todoStore";

function removeItemAtIndex<T>(arr: Array<T>, index: number): Array<T> {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export default function useDeleteTodo() {
  return useRecoilCallback(({set}) => (id: string) => {
    set(todoStore.todoIds, ids => removeItemAtIndex(ids, ids.findIndex(pId => pId === id)))
  }, [])
}