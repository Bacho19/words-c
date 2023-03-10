import Link from "next/link";
import { Flex, FlexProps, Icon } from "@chakra-ui/react";
import { ReactNode } from "react";
import { IconType } from "react-icons";
import { useRouter } from "next/router";

interface NavItemProps extends FlexProps {
  icon: IconType;
  route?: string;
  children: ReactNode;
}
const NavItem = ({ icon, route, children, ...rest }: NavItemProps) => {
  const { asPath } = useRouter();

  return route ? (
    <Link href={route}>
      <Flex
        align="center"
        p="4"
        mx="2"
        borderRadius="sm"
        role="group"
        cursor="pointer"
        bg={asPath === route ? "blue.700" : ""}
        color={asPath === route ? "white" : ""}
        _hover={{
          color: asPath === route ? "white" : "blue.700",
          transition: "0.2s",
        }}
        {...rest}
      >
        {icon && <Icon mr="4" fontSize="16" as={icon} />}
        {children}
      </Flex>
    </Link>
  ) : (
    <Flex
      align="center"
      p="4"
      mx="2"
      borderRadius="sm"
      role="group"
      cursor="pointer"
      bg={asPath === route ? "blue.700" : ""}
      color={asPath === route ? "white" : ""}
      _hover={{
        color: asPath === route ? "white" : "blue.700",
        transition: "0.2s",
      }}
      {...rest}
    >
      {icon && <Icon mr="4" fontSize="16" as={icon} />}
      {children}
    </Flex>
  );
};

export default NavItem;
