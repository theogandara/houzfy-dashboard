import { Button, Flex, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LayoutForm from "../../layouts/LayoutForm";
import {
  ErrorMessage,
  Label,
  Subtitle,
  Title,
} from "../../components/Texts/Texts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRedirect } from "../../hooks/useRedirect";

const schema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z
    .string()
    .min(8, { message: "A senha deve ter pelo menos 8 caracteres" })
    .regex(/[a-z]/, {
      message: "A senha deve conter pelo menos uma letra minúscula",
    })
    .regex(/[A-Z]/, {
      message: "A senha deve conter pelo menos uma letra maiúscula",
    })
    .regex(/[0-9]/, { message: "A senha deve conter pelo menos um número" })
    .regex(/[\W_]/, {
      message: "A senha deve conter pelo menos um caractere especial",
    }),
});
export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const { navigateTo } = useRedirect();

  const onSubmit = (values: any) => {
    console.log(values);
    navigateTo("/");
  };

  return (
    <LayoutForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex
          flexDir="column"
          w={{ mobile: "100%", tablet: "550px" }}
          gap="24px"
        >
          <Flex flexDir="column" gap="4px">
            <Title>Entrar</Title>
            <Subtitle>Olá, seja bem vindo de volta! Faça seu login.</Subtitle>
          </Flex>

          <Flex flexDir="column" gap="12px">
            <Flex flexDir="column" gap="8px">
              <Label>Insira seu email</Label>
              <Input {...register("email")} placeholder="Email" />

              <ErrorMessage>
                {errors.email?.message && <>{errors.email?.message}</>}
              </ErrorMessage>
            </Flex>

            <Flex flexDir="column" gap="8px">
              <Label>Insira sua senha</Label>
              <Input
                {...register("password")}
                type="password"
                placeholder="••••••••"
              />

              <ErrorMessage>
                {errors.password?.message && <>{errors.password?.message}</>}
              </ErrorMessage>
            </Flex>
          </Flex>
          <Button colorScheme="blue" type="submit">
            Entrar
          </Button>

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
      </form>
    </LayoutForm>
  );
};
