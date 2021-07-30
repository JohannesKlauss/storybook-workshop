import {Badge, Checkbox, Flex, Text} from "@chakra-ui/react";
import {PRIORITY} from "../../../recoil/todoStore";

export interface TodoProps {
  isChecked: boolean;
  label: string;
  priority: PRIORITY,
  onToggle: () => void;
}

const Todo = ({isChecked, label, onToggle, priority}: TodoProps) => {
  const [priorityLabel, color] = [['Optional', 'green'], ['Should complete', 'yellow'], ['Urgent', 'red']][priority]

  return (
    <Flex align={'center'} onClick={onToggle} cursor={'pointer'}>
      <Checkbox isChecked={isChecked} onChange={onToggle}/>
      <Text mx={4} userSelect={'none'} textDecor={isChecked ? 'line-through' : 'initial'}>{label}</Text>
      <Badge colorScheme={color}>{priorityLabel}</Badge>
    </Flex>
  )
}

export default Todo
