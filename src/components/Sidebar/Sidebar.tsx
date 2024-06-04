import { Flex, Spacer, Text } from "@chakra-ui/react";
import { LogoDefault, LogoIcon } from "../Logos/Logos";
import { Link } from "react-router-dom";
import React from "react";
import { SignOut } from "@phosphor-icons/react";

interface SidebarProps {
  routes: {
    path: string;
    name: string;
    icon: React.ReactNode;
  }[];
}

export const Sidebar = ({ routes }: SidebarProps) => {
  return (
    <Flex
      transitionDuration="0.3s"
      w={{ mobile: "60px", tablet: "210px" }}
      pt="24px"
      flexDir="column"
      gap="24px"
    >
      <Flex display={{ mobile: "none", tablet: "flex" }} mx="auto" w="140px">
        <LogoDefault />
      </Flex>

      <Flex display={{ tablet: "none" }} mx="auto" w="25px">
        <LogoIcon />
      </Flex>

      <Flex w="full" flexDir="column" px="8px" gap="4px">
        {routes.map((route, index) => (
          <Link to={route.path}>
            <Flex
              cursor="pointer"
              justifyContent="space-between"
              borderRadius="4px"
              key={index}
              w="100%"
              h="40px"
              alignItems="center"
              p="8px"
              gap="8px"
              color="text.primary"
              _hover={{
                transitionDuration: "0.4s",
                bg: "hover.primary",
                color: "#FDFDFE",
              }}
            >
              <Flex w="24px" justify="center">
                {route.icon}
              </Flex>

              <Text
                display={{ mobile: "none", tablet: "block" }}
                w="full"
                fontWeight="500"
                whiteSpace="nowrap"
              >
                {route.name}
              </Text>
            </Flex>
          </Link>
        ))}

        <Flex display={{ tablet: "none" }} w="full" flexDir="column">
          <Link to="/entrar">
            <Flex
              cursor="pointer"
              justifyContent="space-between"
              borderRadius="4px"
              bg="background.primary"
              w="100%"
              h="40px"
              alignItems="center"
              p="8px"
              gap="8px"
              color="text.primary"
            >
              <Flex w="24px" justify="center">
                <SignOut color="#1D2E5C" size={24} />
              </Flex>

              <Text
                display={{ mobile: "none", tablet: "block" }}
                w="full"
                fontWeight="500"
                whiteSpace="nowrap"
                color="text.secondary"
              >
                Sair
              </Text>
            </Flex>
          </Link>
        </Flex>
      </Flex>

      <Spacer />

      <Flex
        display={{ mobile: "none", tablet: "flex" }}
        w="full"
        flexDir="column"
        px="8px"
        mb="12px"
        gap="4px"
      >
        <Link to="/entrar">
          <Flex
            cursor="pointer"
            justifyContent="space-between"
            borderRadius="4px"
            bg="background.primary"
            w="100%"
            h="40px"
            alignItems="center"
            p="8px"
            gap="8px"
            color="text.primary"
          >
            <Flex w="24px" justify="center">
              <SignOut color="#1D2E5C" size={24} />
            </Flex>

            <Text
              display={{ mobile: "none", tablet: "block" }}
              w="full"
              fontWeight="500"
              whiteSpace="nowrap"
              color="text.secondary"
            >
              Sair
            </Text>
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
};
