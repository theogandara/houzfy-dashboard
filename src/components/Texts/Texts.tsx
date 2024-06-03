import { Text } from "@chakra-ui/react";

interface TextProps {
  children: React.ReactNode;
}

const Title = ({ children }: TextProps) => {
  return (
    <Text fontWeight="500" fontSize="30px" lineHeight="38px">
      {children}
    </Text>
  );
};

const Subtitle = ({ children }: TextProps) => {
  return (
    <Text fontSize="16px" lineHeight="24px">
      {children}
    </Text>
  );
};

export { Title, Subtitle };
