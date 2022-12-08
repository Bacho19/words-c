import { SearchIcon } from "@chakra-ui/icons";
import {
  Spinner,
  InputGroup,
  InputLeftElement,
  Input,
  Box,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { useFetchWordsQuery } from "../generated/graphql";
import WordDefinitionCard from "./WordDefinitionCard";

interface AllWordsContentProps {}

const AllWordsContent: FC<AllWordsContentProps> = () => {
  const [{ data, fetching }] = useFetchWordsQuery();

  if (fetching) {
    return (
      <Box display="flex" pt={16}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          mx="auto"
        />
      </Box>
    );
  }

  if (!data?.words.length) {
    return (
      <Box pt={10}>
        <Text
          textAlign="center"
          color="blue.900"
          fontSize="2xl"
          fontWeight="bold"
        >
          No words yet
        </Text>
      </Box>
    );
  }

  return (
    <Box maxW={1000} mx="auto">
      <Box mb={8}>
        <InputGroup>
          <InputLeftElement
            children={<SearchIcon className="SearchIcon" color="gray.300" />}
          />
          <Input variant="" placeholder="Search" />
        </InputGroup>
      </Box>
      {data?.words.map((word) => {
        return <WordDefinitionCard key={word.id} {...word} />;
      })}
    </Box>
  );
};

export default AllWordsContent;
