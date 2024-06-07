import { Text, TextProps } from "@chakra-ui/react";

interface TextCustomProps extends TextProps {
  children: React.ReactNode;
}

const Title = ({ children, ...props }: TextCustomProps) => {
  return (
    <Text fontWeight="500" fontSize="30px" lineHeight="38px" {...props}>
      {children}
    </Text>
  );
};

const Subtitle = ({ children, ...props }: TextCustomProps) => {
  return (
    <Text
      fontSize="16px"
      fontWeight="500"
      color="text.secondary"
      lineHeight="24px"
      {...props}
    >
      {children}
    </Text>
  );
};

const Label = ({ children, ...props }: TextCustomProps) => {
  return (
    <Text fontSize="14px" lineHeight="20px" {...props}>
      {children}
    </Text>
  );
};

const ErrorMessage = ({ children, ...props }: TextCustomProps) => {
  return (
    <Text
      fontSize="12px"
      lineHeight="16px"
      fontWeight="600"
      color="error.primary"
      {...props}
    >
      {children}
    </Text>
  );
};

export { Title, Subtitle, Label, ErrorMessage };
