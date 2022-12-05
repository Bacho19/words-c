import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { FC } from "react";
import AddWordForm from "../components/AddWordForm";
import SimpleSidebar from "../components/Sidebar";

interface AddWordProps {}

const AddWord: FC<AddWordProps> = ({}) => {
  return (
    <SimpleSidebar>
      <Box mt={50} mx="auto" maxW={700}>
        <AddWordForm />
      </Box>
    </SimpleSidebar>
  );
};

export default AddWord;
