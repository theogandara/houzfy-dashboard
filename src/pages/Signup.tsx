import { Button, Flex, Input } from "@chakra-ui/react";
import { Title, Subtitle, Label } from "../components/Texts/Texts";
import LayoutForm from "../layouts/LayoutForm";

export const Signup = () => {
  return (
    <LayoutForm>
      <Flex flexDir="column" w={{ mobile: "100%", tablet: "450px" }} gap="24px">
        <Flex flexDir="column" gap="4px">
          <Title>Signup</Title>
          <Subtitle>Welcome back! Please enter your details.</Subtitle>
        </Flex>

        <Flex flexDir="column" gap="12px">
          <Flex flexDir="column" gap="8px">
            <Label>Email</Label>
            <Input placeholder="Enter your email" />
          </Flex>

          <Flex flexDir="column" gap="8px">
            <Label>Senha</Label>
            <Input placeholder="••••••••" />
          </Flex>
        </Flex>
        <Button colorScheme="blue">Sign in</Button>
      </Flex>
    </LayoutForm>
  );
};
