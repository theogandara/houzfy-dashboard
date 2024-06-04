import { Button, Flex, Input } from "@chakra-ui/react";
import { Title, Subtitle, Label } from "../components/Texts/Texts";
import LayoutForm from "../layouts/LayoutForm";

export const Signup = () => {
  return (
    <LayoutForm>
      <Flex flexDir="column" w={{ mobile: "100%", tablet: "650px" }} gap="16px">
        <Flex flexDir="column" gap="4px">
          <Title>Cadastro</Title>
          <Subtitle>Welcome back! Please enter your details.</Subtitle>
        </Flex>

        <Flex flexDir="column" gap="12px">
          <Flex flexDir="column" gap="8px">
            <Label>Email</Label>
            <Input placeholder="Enter your email" />
          </Flex>

          <Flex flexDir={{ mobile: "column", desktop: "row" }} gap="8px">
            <Flex flexDir="column" gap="8px" w="full">
              <Label>Senha</Label>
              <Input placeholder="••••••••" />
            </Flex>

            <Flex flexDir="column" gap="8px" w="full">
              <Label>Senha</Label>
              <Input placeholder="••••••••" />
            </Flex>
          </Flex>
        </Flex>
        <Button colorScheme="blue">Sign in</Button>
      </Flex>
    </LayoutForm>
  );
};
