import React from "react";
import { InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react";

const PasswordInput = (props) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const hasError = props?.errors?.password && props?.touched?.password;

  return (
    <InputGroup size="md">
      <Input
        id="password"
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="Enter password"
        {...props}
        isInvalid={hasError}
        aria-describedby={hasError ? "firstName-error" : null}
        isRequired
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default PasswordInput;
