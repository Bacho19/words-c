import {
  Box,
  useColorModeValue,
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { FC } from "react";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import { useRegisterMutation } from "../generated/graphql";
import { refactorErrors } from "../utils";

interface RegisterProps {}

const Register: FC<RegisterProps> = ({}) => {
  const [{ fetching }, registerUser] = useRegisterMutation();

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      repeatPassword: "",
    },
    onSubmit: async (values, { setErrors }) => {
      if (values.password !== values.repeatPassword) {
        return setErrors({
          repeatPassword: "passwords do not match",
        });
      }

      const res = await registerUser({
        options: {
          email: values.email,
          username: values.username,
          password: values.password,
        },
      });

      if (res.data?.register.errors) {
        setErrors(refactorErrors(res.data.register.errors));
      } else if (res.data?.register.user) {
        router.push("/login");
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
              <FormControl isRequired isInvalid={!!formik.errors.email}>
                <FormLabel htmlFor="username">Email</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  variant=""
                  size="lg"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
              </FormControl>

              <FormControl isRequired isInvalid={!!formik.errors.username}>
                <FormLabel htmlFor="username">Username</FormLabel>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  variant=""
                  size="lg"
                  placeholder="Username"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                />
                <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
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
              <FormControl
                isRequired
                isInvalid={!!formik.errors.repeatPassword}
              >
                <FormLabel htmlFor="repeatPassword">Repeat Password</FormLabel>
                <Input
                  id="repeatPassword"
                  name="repeatPassword"
                  type="password"
                  variant=""
                  size="lg"
                  placeholder="Repeat Password"
                  onChange={formik.handleChange}
                  value={formik.values.repeatPassword}
                />
                <FormErrorMessage>
                  {formik.errors.repeatPassword}
                </FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="blue"
                width="full"
                size="lg"
                isLoading={fetching}
              >
                Register
              </Button>
            </VStack>
          </form>
        </Box>
      </MainContainer>
    </Box>
  );
};

export default Register;
