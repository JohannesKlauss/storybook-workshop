import {Alert, AlertIcon} from "@chakra-ui/react";

const EmptyListIndicator = () => {
  return (
    <Alert status="success">
      <AlertIcon />
      You are all done with your To-Dos for today! Have a great weekend!
    </Alert>
  )
}

export default EmptyListIndicator
