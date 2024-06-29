import { Flex, Spinner } from "@chakra-ui/react";

export const Loading = ({ show }: { show: boolean }) => {
  if (!show) return null;
  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      alignItems="center"
      justifyContent="center"
      bg="black"
      zIndex="100"
      opacity="0.8"
    >
      <Spinner thickness="5px" speed="0.5s" size="xl" color="blue.500" />
    </Flex>
  );
};
