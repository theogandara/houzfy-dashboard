import { ReactNode } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { LogoDefault } from "../components/Logos/Logos";

export type LayoutFormProps = {
  children: ReactNode;
};

export const LayoutForm = ({ children }: LayoutFormProps) => {
  return (
    <Flex direction="column" bg="background.secondary">
      <Flex
        direction="column"
        minH="full"
        justify="center"
        pt="30px"
        gap="24px"
        px="12px"
        mx="auto"
      >
        <Flex w="140px" mx="auto">
          <LogoDefault />
        </Flex>
        <Flex
          w="100%"
          p="30px"
          bg="background.primary"
          direction="column"
          borderRadius="4px"
          border="4px solid"
          borderColor="gray.100"
        >
          {children}
        </Flex>
        <Box minH="24px" />
      </Flex>
    </Flex>
  );
};

export default LayoutForm;
