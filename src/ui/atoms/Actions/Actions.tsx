import {Flex, IconButton} from "@chakra-ui/react";
import {AiFillDelete, AiFillEdit} from "react-icons/all";

export interface ActionsProps {
  itemId?: number;
  onDelete: (id?: number) => void;
  onEdit: (id?: number) => void;
  children?: JSX.Element | JSX.Element[];
}

const Actions = ({itemId, onDelete, onEdit, children}: ActionsProps) => {
  return (
    <Flex align={'center'}>
      {children}
      <IconButton colorScheme={'teal'} icon={<AiFillEdit/>} aria-label={'Edit'} onClick={() => onEdit(itemId)} mr={4}/>
      <IconButton colorScheme={'red'} icon={<AiFillDelete/>} aria-label={'Delete'} onClick={() => onDelete(itemId)}/>
    </Flex>
  )
}

export default Actions
