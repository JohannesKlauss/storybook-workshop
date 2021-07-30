import {Flex, Input} from "@chakra-ui/react";
import Todo from "../../atoms/Todo/Todo";
import Actions from "../../atoms/Actions/Actions";
import {useRecoilState} from "recoil";
import {todoStore} from "../../../recoil/todoStore";
import {ChangeEvent, useState} from "react";
import useDeleteTodo from "../../../recoil/useDeleteTodo";

export interface TodoItemProps {
  todoId: string;
}

const TodoItem = ({todoId}: TodoItemProps) => {
  const [{isChecked, label, priority}, setTodo] = useRecoilState(todoStore.todo(todoId));
  const [isEditingLabel, setIsEditingLabel] = useState(false);
  const deleteTodo = useDeleteTodo();

  const updateLabel = (e: ChangeEvent<HTMLInputElement>) => setTodo(prevState => ({
    ...prevState,
    label: e.target.value
  }))

  const toggleIsChecked = () => setTodo(prevState => ({...prevState, isChecked: !prevState.isChecked}))

  return (
    <Flex align={'center'} justify={'space-between'} p={4} borderBottom={'1px solid'} borderColor={'gray.300'} pr={12}>
      {isEditingLabel && (
        <Input mr={6} type={'text'} defaultValue={label} onChange={updateLabel}
               onKeyDown={e => e.key === 'Enter' && setIsEditingLabel(prevState => !prevState)}/>
      )}

      {!isEditingLabel && <Todo isChecked={isChecked} label={label} priority={priority} onToggle={toggleIsChecked}/>}
      <Actions onDelete={() => deleteTodo(todoId)} onEdit={() => setIsEditingLabel(prevState => !prevState)}/>
    </Flex>
  )
}

export default TodoItem
