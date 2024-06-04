import { Button, Flex, Input } from "@chakra-ui/react";
import { Title, Subtitle, Label } from "../components/Texts/Texts";
import LayoutForm from "../layouts/LayoutForm";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <LayoutForm>
      <Flex flexDir="column" w={{ mobile: "100%", tablet: "550px" }} gap="24px">
        <Flex flexDir="column" gap="4px">
          <Title>Entrar</Title>
          <Subtitle>Olá, seja bem vindo de volta! Faça seu login.</Subtitle>
        </Flex>

        <Flex flexDir="column" gap="12px">
          <Flex flexDir="column" gap="8px">
            <Label>Insira seu email</Label>
            <Input placeholder="Email" />
          </Flex>

          <Flex flexDir="column" gap="8px">
            <Label>Insira sua senha</Label>
            <Input type="password" placeholder="••••••••" />
          </Flex>
        </Flex>
        <Button colorScheme="blue">Entrar</Button>

        <Flex
          flexDir={{ mobile: "column", tablet: "row" }}
          gap="12px"
          textAlign="center"
          justifyContent="space-between"
        >
          <Link to="/cadastro">
            <Button colorScheme="blue" variant="link">
              Não tem uma conta? Faça seu cadastro
            </Button>
          </Link>

          <Link to="/entrar">
            <Button colorScheme="gray" variant="link">
              Esqueci minha senha
            </Button>
          </Link>
        </Flex>
      </Flex>
    </LayoutForm>
  );
};
