import {
  Button, FormControl, FormLabel, Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay, Select
} from "@chakra-ui/react";
import {PRIORITY} from "../../../recoil/todoStore";
import useCreateTodo from "../../../recoil/useCreateTodo";
import {useForm} from "react-hook-form";

type Form = {
  label: string;
  priority: number;
}

export interface CreateTodoDialogProps {
  isOpen: boolean
  onClose: () => void;
}

const CreateTodoDialog = ({isOpen, onClose}: CreateTodoDialogProps) => {
  const createTodo = useCreateTodo();
  const {handleSubmit, register, formState, reset} = useForm<Form>()

  const onSubmit = (data: Form) => {
    createTodo(data.label, data.priority);
    onClose()
    reset()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>New Todo</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
            <FormControl id={'label'} mb={2} isRequired>
              <FormLabel>Todo</FormLabel>
              <Input {...register('label', {required: true})} isInvalid={formState.errors.label !== undefined}/>
            </FormControl>
            <FormControl id="priority" isRequired>
              <FormLabel>Priority</FormLabel>
              <Select placeholder="Select Priority" {...register('priority', {required: true})}
                      isInvalid={formState.errors.label !== undefined}>
                <option value={PRIORITY.LOW}>Optional</option>
                <option value={PRIORITY.MID}>Should do</option>
                <option value={PRIORITY.HIGH}>Urgent</option>
              </Select>
            </FormControl>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} type={'submit'}>
              Create
            </Button>
            <Button variant="ghost" onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  )
}

export default CreateTodoDialog
