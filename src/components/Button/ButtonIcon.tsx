import { Button } from "@chakra-ui/react";
import { ReactElement } from "react";

interface ButtonIconProps {
  icon: ReactElement;
  onClick: () => void;
}

export const ButtonIcon = ({ icon, onClick }: ButtonIconProps) => {
  return (
    <Button
      onClick={onClick}
      colorScheme="whiteAlpha"
      variant="ghost"
      w="40px"
      h="40px"
      p="0px"
    >
      {icon}
    </Button>
  );
};
