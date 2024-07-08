import { Flex, Spinner } from "@chakra-ui/react";

export const LoadingContent = () => {
  return (
    <Flex align="end" h="full" minH="50vh">
      <Spinner
        mx="auto"
        thickness="5px"
        speed="0.5s"
        size="xl"
        color="blue.500"
      />
    </Flex>
  );
};
