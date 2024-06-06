import { ReactNode } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Subtitle } from "../components/Texts/Texts";
import { ArrowRight, X } from "@phosphor-icons/react";
import { ButtonIcon } from "../components/Button/ButtonIcon";

export type LayoutHeaderProps = {
  children: ReactNode;
  title: string;
  onClickBack?: () => void;
  onClickNext?: () => void;
};

export const LayoutHeader = ({
  children,
  title,
  onClickBack,
  onClickNext,
}: LayoutHeaderProps) => {
  return (
    <Flex
      minH="100dvh"
      maxH="100dvh"
      direction="column"
      overflow="hidden"
      bg="background.secondary"
    >
      <Flex direction="column">
        <Flex minH="100dvh">
          <Flex direction="column" w="100%" minH="full" flex="1">
            <Flex
              alignItems="center"
              px="24px"
              h="64px"
              justify="space-between"
            >
              <Flex>
                {onClickBack && (
                  <ButtonIcon
                    onClick={onClickBack}
                    icon={<X color="white" weight="bold" size={24} />}
                  />
                )}
              </Flex>
              <Subtitle fontWeight="500" color="text.primary">
                {title}
              </Subtitle>
              <Flex>
                {onClickNext && (
                  <ButtonIcon
                    onClick={onClickNext}
                    icon={<ArrowRight color="white" size={24} />}
                  />
                )}
              </Flex>
            </Flex>
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
                borderTopRightRadius="4px"
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

export default LayoutHeader;
