import {Box, Flex, IconButton, Text, useDisclosure} from "@chakra-ui/react";
import Actions from "../../atoms/Actions/Actions";
import {todoStore} from "../../../recoil/todoStore";
import {useRecoilValue, useResetRecoilState} from "recoil";
import {AiOutlinePlus} from "react-icons/all";
import CreateTodoDialog from "../CreateTodoDialog/CreateTodoDialog";

export interface HeaderProps {
  initialHeading: string;
}

const Header = ({initialHeading}: HeaderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const numOfTodos = useRecoilValue(todoStore.numOfTodos);
  const numOfDoneTodos = useRecoilValue(todoStore.numOfDoneTodos);
  const numOfUndoneTodos = useRecoilValue(todoStore.numOfUndoneTodos);
  const resetTodos = useResetRecoilState(todoStore.todoIds);

  return (
    <Box bgColor={'gray.200'} p={4}>
      <Flex justify={'space-between'} align={'center'} px={8}>
        <Text fontSize={'xl'}>{initialHeading} 🚀</Text>

        <Text fontSize={'md'}>{numOfTodos} {numOfTodos !== 1 ? 'To-Dos' : 'To-Do'} today</Text>
        <Text fontSize={'md'}>({numOfDoneTodos} done / {numOfUndoneTodos} left)</Text>

        <Actions onDelete={resetTodos} onEdit={() => null}>
          <IconButton colorScheme={'teal'} icon={<AiOutlinePlus/>} aria-label={'Create To-Do'} mr={4} onClick={onOpen}/>
        </Actions>
      </Flex>
      <CreateTodoDialog isOpen={isOpen} onClose={onClose}/>
    </Box>
  )
}

export default Header
