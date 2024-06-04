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
      <Flex direction="column">
        <Flex minH="100vh">
          <Sidebar routes={routes} />
          <Flex direction="column" w="100%" minH="full" flex="1" pt="12px">
            <Box pos="relative" h="full" flex="1" bg="background.secondary">
              <Flex
                overflowY="auto"
                w="100%"
                minH="100%"
                maxH="100%"
                maxW="100%"
                p="30px"
                bg="background.primary"
                direction="column"
                borderTopLeftRadius="4px"
                borderLeft="2px solid"
                borderTop="2px solid"
                borderColor="gray.100"
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
    </Flex>
  );
};

export default LayoutDefault;
