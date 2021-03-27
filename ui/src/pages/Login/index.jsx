import React, { useContext } from "react";
import { ErrorMessage, Form, Field, Formik } from "formik";
import {
  Input,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Container,
} from "@chakra-ui/react";
import PasswordInput from "../../components/PasswordInput";
import { useHistory } from "react-router-dom";

const Login = () => {
  const userSession = useContext("user");
  const history = useHistory();

  if (!!userSession) history.replace("/");

  const handleSubmit = (values) => {
    const data = {
      email: values.email,
      password: values.password,
    };

    fetch("/login", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    }).then((res) => history.replace("/"));
  };

  const formikProps = {
    initialValues: { email: "", password: "" },
    onSubmit: handleSubmit,
  };

  return (
    <Container>
      <h2>Login</h2>
      <Formik {...formikProps}>
        {(props) => (
          <Form>
            <Stack spacing={3}>
              <Field name="email">
                {({ field, form }) => (
                  <FormControl id="email" isRequired>
                    <FormLabel>Email:</FormLabel>
                    <Input name="email" id="email" type="email" {...field} />
                    <ErrorMessage name="email">
                      {(msg) => (
                        <FormErrorMessage id="email-error">
                          {msg}
                        </FormErrorMessage>
                      )}
                    </ErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="password">
                {({ field, form }) => (
                  <FormControl id="password">
                    <FormLabel>Password:</FormLabel>
                    <PasswordInput {...field} {...form} />
                    <ErrorMessage name="password">
                      {(msg) => (
                        <FormErrorMessage id="password-error">
                          {msg}
                        </FormErrorMessage>
                      )}
                    </ErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                mt={4}
                colorScheme="teal"
                isLoading={props.isSubmitting}
                type="submit"
              >
                Submit
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Login;
