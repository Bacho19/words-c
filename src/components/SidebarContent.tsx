import {
  Box,
  BoxProps,
  CloseButton,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FiCompass, FiHome, FiSettings } from "react-icons/fi";
import { BiAddToQueue, BiListUl, BiLogOut } from "react-icons/bi";

import NavItem from "./NavItem";
import { useLogoutMutation } from "../generated/graphql";
import { useRouter } from "next/router";

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

interface LinkItemProps {
  name: string;
  icon: IconType;
  route: string;
}

const LinkItems: LinkItemProps[] = [
  { name: "Home", icon: FiHome, route: "/" },
  { name: "Topics", icon: FiCompass, route: "/topics" },
  { name: "All words", icon: BiListUl, route: "/all-words" },
  { name: "Add word", icon: BiAddToQueue, route: "/add-word" },
  { name: "Settings", icon: FiSettings, route: "/settings" },
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const [{}, logout] = useLogoutMutation();

  const router = useRouter();

  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Words
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} route={link.route} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
      <NavItem
        icon={BiLogOut}
        onClick={() => {
          logout({}).then(() => {
            router.push("/login");
          });
        }}
      >
        Logout
      </NavItem>
    </Box>
  );
};

export default SidebarContent;
