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
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import MainContainer from "../../components/MainContainer";
import Navbar from "../../components/Navbar";
import { useChangePasswordMutation } from "../../generated/graphql";
import { refactorErrors } from "../../utils";

const ChangePassword: NextPage = () => {
  const [tokenError, setTokenError] = useState<string>("");

  const [{ fetching }, changePassword] = useChangePasswordMutation();

  const router = useRouter();
  const token = router.query["token"];

  const formik = useFormik({
    initialValues: {
      password: "",
      repeatPassword: "",
    },
    onSubmit: async (values, { setErrors }) => {
      if (values.password !== values.repeatPassword) {
        setErrors({
          repeatPassword: "passwords don't match",
        });

        return;
      }

      const { data } = await changePassword({
        newPassword: values.password,
        token: token as string,
      });

      if (data?.changePassword.errors) {
        const errors = refactorErrors(data.changePassword.errors);

        if ("token" in errors) {
          setTokenError(errors.token);
        }

        setErrors(errors);

        return;
      }

      router.push("/login");
    },
  });

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} minH="100vh">
      <Navbar />
      <MainContainer>
        <Box mt={200}>
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4} align="flex-start">
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
              {tokenError && <Box color="red">{tokenError}</Box>}
              <Button
                type="submit"
                colorScheme="blue"
                width="full"
                size="lg"
                isLoading={fetching}
              >
                Change password
              </Button>
            </VStack>
          </form>
        </Box>
      </MainContainer>
    </Box>
  );
};

export default ChangePassword;
