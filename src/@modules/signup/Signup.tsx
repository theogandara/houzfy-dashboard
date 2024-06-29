import { Link } from "react-router-dom";
import { Button, Flex, Input, useToast } from "@chakra-ui/react";
import LayoutForm from "../../layouts/LayoutForm";
import {
  ErrorMessage,
  Label,
  Subtitle,
  Title,
} from "../../components/Texts/Texts";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRedirect } from "../../hooks/useRedirect";
import { api } from "../../api/axiosInstance";
import { Loading } from "../../components/Loading/Loading";

const schema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z
    .string()
    .min(8, { message: "Deve ter pelo menos 8 caracteres" })
    .regex(/[a-z]/, {
      message: "Deve conter pelo menos uma letra minúscula",
    })
    .regex(/[A-Z]/, {
      message: "Deve conter pelo menos uma letra maiúscula",
    })
    .regex(/[0-9]/, { message: "Deve conter pelo menos um número" })
    .regex(/[\W_]/, {
      message: "Deve conter pelo menos um caractere especial",
    }),
  name: z
    .string()
    .min(5, { message: "Nome inválido" })
    .regex(/ /, {
      message: "Nome e sobrenome são obrigatórios",
    })
    .refine(
      (name) => {
        const parts = name.split(" ");
        return parts.length >= 2 && parts.every((part) => part.length >= 3);
      },
      { message: "Insira o nome completo" }
    ),
  cpf: z.string().length(14, { message: "CPF inválido" }),
});

const maskCPF = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const password = watch("password") || "";
  const confirmPassword = watch("confirmPassword");
  const passwordMatch = password === confirmPassword;

  const cpf = watch("cpf") || "";

  const [loading, setLoading] = useState(false);

  const { navigateTo } = useRedirect();
  const toast = useToast();

  const onSubmit = async (values: any) => {
    setLoading(true);
    try {
      await api.post("/signup", {
        name: values.name,
        email: values.email,
        cpf: values.cpf,
        password: values.password,
      });
      navigateTo("/entrar");
    } catch (err) {
      toast({
        description: "Erro ao cadastrar, tente novamente",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <LayoutForm>
      <Loading show={loading} />
      <form
        style={{ width: "100%", height: "100%" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Flex
          flexDir="column"
          w={{ mobile: "100%", tablet: "650px" }}
          gap="16px"
        >
          <Flex flexDir="column" gap="4px">
            <Title>Cadastro</Title>
            <Subtitle>Preencha os campos abaixo para criar sua conta.</Subtitle>
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
              <Label>Nome</Label>
              <Input {...register("name")} placeholder="Insira seu nome" />

              <ErrorMessage>
                {errors.name?.message && <>{errors.name?.message}</>}
              </ErrorMessage>
            </Flex>

            <Flex flexDir="column" gap="8px">
              <Label>CPF</Label>
              <Input
                maxLength={14}
                value={maskCPF(cpf)}
                {...register("cpf")}
                placeholder="Insira seu CPF"
              />

              <ErrorMessage>
                {errors.cpf?.message && <>{errors.cpf?.message}</>}
              </ErrorMessage>
            </Flex>

            <Flex flexDir={{ mobile: "column", desktop: "row" }} gap="8px">
              <Flex flexDir="column" gap="8px" w="full">
                <Label>Insira uma senha forte</Label>
                <Input
                  {...register("password")}
                  type="password"
                  placeholder="••••••••"
                />

                <ErrorMessage>
                  {errors.password?.message && <>{errors.password?.message}</>}
                </ErrorMessage>
              </Flex>

              <Flex flexDir="column" gap="8px" w="full">
                <Label>Confirme sua senha</Label>
                <Input
                  {...register("confirmPassword")}
                  type="password"
                  placeholder="••••••••"
                />

                {password.length > 0 && (
                  <ErrorMessage>
                    {!passwordMatch && <>As senhas não coincidem</>}
                  </ErrorMessage>
                )}
              </Flex>
            </Flex>
          </Flex>
          <Button type="submit" colorScheme="blue">
            Cadastrar
          </Button>

          <Flex textAlign="center">
            <Link to="/entrar" style={{ width: "100%" }}>
              <Button w="full" colorScheme="blue" variant="link">
                Já tem uma conta? Faça login
              </Button>
            </Link>
          </Flex>
        </Flex>
      </form>
    </LayoutForm>
  );
};
