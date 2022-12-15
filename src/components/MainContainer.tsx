import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer: FC<MainContainerProps> = ({ children }) => {
  return (
    <Box maxW={650} mx="auto">
      {children}
    </Box>
  );
};

export default MainContainer;
