import { FC } from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useCreateWordMutation } from "../generated/graphql";
import { useRouter } from "next/router";

interface AddWordFormProps {}

const AddWordForm: FC<AddWordFormProps> = () => {
  const [{ fetching }, createWord] = useCreateWordMutation();

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      word: "",
      definition: "",
      translation: "",
      wordImageUrl: "",
    },
    onSubmit: async (values, { setErrors }) => {
      const res = await createWord(values);
      if (res.error) {
        setErrors({
          word: res.error.message,
        });
      } else {
        formik.handleReset(null);
        router.push("/all-words");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <VStack spacing={4} align="flex-start">
        <FormControl isRequired isInvalid={!!formik.errors.word}>
          <FormLabel htmlFor="word">Word</FormLabel>
          <Input
            id="word"
            name="word"
            type="word"
            variant=""
            size="lg"
            placeholder="Word"
            onChange={formik.handleChange}
            value={formik.values.word}
          />
          <FormErrorMessage>{formik.errors.word}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="word">Definition</FormLabel>
          <Input
            id="definition"
            name="definition"
            type="definition"
            variant=""
            size="lg"
            placeholder="Definition"
            onChange={formik.handleChange}
            value={formik.values.definition}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="word">Translation</FormLabel>
          <Input
            id="translation"
            name="translation"
            type="translation"
            variant=""
            size="lg"
            placeholder="Translation"
            onChange={formik.handleChange}
            value={formik.values.translation}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="word">Image url</FormLabel>
          <Input
            id="wordImageUrl"
            name="wordImageUrl"
            type="wordImageUrl"
            variant=""
            size="lg"
            placeholder="Image url"
            onChange={formik.handleChange}
            value={formik.values.wordImageUrl}
          />
        </FormControl>
        <Button
          type="submit"
          colorScheme="blue"
          width="full"
          size="lg"
          isLoading={fetching}
        >
          Add word
        </Button>
      </VStack>
    </form>
  );
};

export default AddWordForm;
