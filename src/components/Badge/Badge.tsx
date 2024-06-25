import { Flex, Text } from "@chakra-ui/react";

export const Badge = ({
  text,
  color,
}: {
  text: string;
  color: "blue" | "green" | "yellow";
}) => {
  let bgColor = "";
  let borderColor = "";
  let textColor = "";

  switch (color) {
    case "blue":
      bgColor = "#F0F9FF";
      borderColor = "#B9E6FE";
      textColor = "#026AA2";
      break;
    case "green":
      bgColor = "#ECFDF3";
      borderColor = "#ABEFC6";
      textColor = "#067647";
      break;
    case "yellow":
      bgColor = "#FFFAEB";
      borderColor = "#FEDF89";
      textColor = "#B54708";
      break;
  }

  return (
    <Flex
      bg={bgColor}
      py="2px"
      px="6px"
      border="1px solid"
      borderRadius="6px"
      borderColor={borderColor}
    >
      <Text
        color={textColor}
        fontSize="12px"
        lineHeight="18px"
        fontWeight="500"
      >
        {text.toUpperCase()}
      </Text>
    </Flex>
  );
};
