import {Box} from "@chakra-ui/react";
import Header from "../../molecules/Header/Header";
import TodoList from "../../molecules/TodoList/TodoList";

const TodoApp = () => {
  return (
    <Box>
      <Header initialHeading={'Our out-of-space Todo App'}/>
      <TodoList/>
    </Box>
  )
}

export default TodoApp
