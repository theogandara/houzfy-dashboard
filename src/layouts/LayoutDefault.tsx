import { ReactNode } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { routes } from "../routes/routes";

export type LayoutDefaultProps = {
  children: ReactNode;
};

export const LayoutDefault = ({ children }: LayoutDefaultProps) => {
  return (
    <Flex
      minH="100dvh"
      maxH="100dvh"
      direction="column"
      overflow="hidden"
      bg="background.secondary"
    >
      <Flex minH="100dvh">
        <Sidebar routes={routes} />
        <Flex direction="column" w="100%" minH="full" flex="1" pt="12px">
          <Box
            pos="relative"
            h="full"
            flex="1"
            overflow="auto"
            bg="background.primary"
            borderTopLeftRadius="4px"
            borderLeft="2px solid"
            borderTop="2px solid"
            borderColor="gray.100"
          >
            <Flex
              overflowY="auto"
              w="100%"
              maxH="calc(100vh - 12px)"
              maxW="100%"
              p="30px"
              direction="column"
            >
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {children}
              </motion.div>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LayoutDefault;
