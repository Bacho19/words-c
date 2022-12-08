import { Box, Card, CardBody, Divider, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import { Word } from "../generated/graphql";

interface WordDefinitionCardProps extends Word {}

const WordDefinitionCard: FC<WordDefinitionCardProps> = ({
  word,
  definition,
  //   wordImageUrl,
}) => {
  return (
    <Box mb={3}>
      <Card backgroundColor="white">
        <CardBody>
          <Box display="flex" justifyContent="space-between">
            <Box w="20%" mr={5}>
              <Text>{word}</Text>
            </Box>
            <Box
              w="55%"
              px={5}
              borderLeft="2px solid"
              borderColor="blackAlpha.100"
            >
              <Text>{definition}</Text>
            </Box>
            <Box w="25%">
              {/* <Image
                src={wordImageUrl ? wordImageUrl : ""}
                width={200}
                height={400}
                alt="word's image"
              /> */}
            </Box>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
};

export default WordDefinitionCard;
