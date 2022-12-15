import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { FC } from "react";
import MainContainer from "../components/MainContainer";
import { useLoginMutation } from "../generated/graphql";
import { refactorErrors } from "../utils";

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
  const [{ fetching }, loginUser] = useLoginMutation();

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values, { setErrors }) => {
      const res = await loginUser({
        options: values,
      });
      if (res.data?.login.errors) {
        setErrors(refactorErrors(res.data.login.errors));
      } else if (res.data?.login.user) {
        router.push("/");
      }
    },
  });

  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      px={4}
      pt={200}
      minH="100vh"
    >
      <MainContainer>
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl isRequired isInvalid={!!formik.errors.username}>
              <FormLabel htmlFor="word">Username</FormLabel>
              <Input
                id="username"
                name="username"
                type="username"
                variant=""
                size="lg"
                placeholder="Username"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
              <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={!!formik.errors.password}>
              <FormLabel htmlFor="word">Password</FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                variant=""
                size="lg"
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
            </FormControl>
            <Button
              type="submit"
              colorScheme="blue"
              width="full"
              size="lg"
              isLoading={fetching}
            >
              Login
            </Button>
          </VStack>
        </form>
      </MainContainer>
    </Box>
  );
};

export default Login;
