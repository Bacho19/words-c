import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Box,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import NextLink from "next/link";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import { useLoginMutation } from "../generated/graphql";
import { refactorErrors } from "../utils";

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
  const [{ fetching }, loginUser] = useLoginMutation();

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      emailOrUsername: "",
      password: "",
    },
    onSubmit: async (values, { setErrors }) => {
      const res = await loginUser(values);
      if (res.data?.login.errors) {
        setErrors(refactorErrors(res.data.login.errors));
      } else if (res.data?.login.user) {
        router.push("/");
      }
    },
  });

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} minH="100vh">
      <Navbar />
      <MainContainer>
        <Box mt={200}>
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4} align="flex-start">
              <FormControl
                isRequired
                isInvalid={!!formik.errors.emailOrUsername}
              >
                <FormLabel htmlFor="emailOrUsername">
                  Email or username
                </FormLabel>
                <Input
                  id="emailOrUsername"
                  name="emailOrUsername"
                  type="text"
                  variant=""
                  size="lg"
                  placeholder="Email or username"
                  onChange={formik.handleChange}
                  value={formik.values.emailOrUsername}
                />
                <FormErrorMessage>
                  {formik.errors.emailOrUsername}
                </FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={!!formik.errors.password}>
                <FormLabel htmlFor="password">Password</FormLabel>
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
              <Flex justifyContent="flex-end" w="100%">
                <Box>
                  <NextLink href="/forgot-password">Forgot password?</NextLink>
                </Box>
              </Flex>
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
        </Box>
      </MainContainer>
    </Box>
  );
};

export default Login;
