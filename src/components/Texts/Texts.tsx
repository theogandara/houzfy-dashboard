import { Text, TextProps } from "@chakra-ui/react";

interface TextCustomProps extends TextProps {
  children: React.ReactNode;
}

const Title = ({ children }: TextCustomProps) => {
  return (
    <Text fontWeight="500" fontSize="30px" lineHeight="38px">
      {children}
    </Text>
  );
};

const Subtitle = ({ children, ...props }: TextCustomProps) => {
  return (
    <Text fontSize="16px" lineHeight="24px" {...props}>
      {children}
    </Text>
  );
};

const Label = ({ children }: TextCustomProps) => {
  return (
    <Text fontSize="14px" lineHeight="20px">
      {children}
    </Text>
  );
};

export { Title, Subtitle, Label };
