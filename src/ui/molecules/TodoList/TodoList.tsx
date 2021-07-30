import {Alert, AlertIcon, Box} from "@chakra-ui/react";
import {todoStore} from "../../../recoil/todoStore";
import {useRecoilValue} from "recoil";
import TodoItem from "../../molecules/TodoItem/TodoItem";
import EmptyListIndicator from "../../atoms/EmptyListIndicator/EmptyListIndicator";

const TodoList = () => {
  const todoIds = useRecoilValue(todoStore.todoIds);

  return (
    <Box bgColor={'gray.50'}>
      {todoIds.map(id => <TodoItem key={id} todoId={id}/>)}

      {todoIds.length === 0 && <EmptyListIndicator/>}
    </Box>
  )
}

export default TodoList
