import {
  useColorModeValue,
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Box,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { FC } from "react";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import { useForgotPasswordMutation } from "../generated/graphql";

interface ForgotPasswordProps {}

const ForgotPassword: FC<ForgotPasswordProps> = ({}) => {
  const [{ fetching }, forgotPassword] = useForgotPasswordMutation();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      forgotPassword({
        email: values.email,
      });
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
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="text"
                  variant=""
                  size="lg"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="blue"
                width="full"
                size="lg"
                isLoading={fetching}
              >
                Reset password
              </Button>
            </VStack>
          </form>
        </Box>
      </MainContainer>
    </Box>
  );
};

export default ForgotPassword;
