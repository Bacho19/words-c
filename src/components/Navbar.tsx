import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const NavLink = ({
  route,
  children,
}: {
  route: string;
  children: ReactNode;
}) => (
  <NextLink href={route}>
    <Box
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: "blue.500",
        color: "blue.900",
      }}
      color="white"
    >
      {children}
    </Box>
  </NextLink>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="blue.700" px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Text color="white" fontWeight="bold" fontSize={24}>
              Logo
            </Text>
          </HStack>
          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <NavLink route="/login">Login</NavLink>
              <NavLink route="/register">Register</NavLink>
            </HStack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
