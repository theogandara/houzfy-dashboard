import { Button, Flex, Input, useToast } from "@chakra-ui/react";
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
import { api } from "../../api/axiosInstance";
import { useLoadingStore } from "../../store/loading.store";
import { useEffect } from "react";

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

  const { setShow } = useLoadingStore();
  const { navigateTo } = useRedirect();
  const toast = useToast();

  const onSubmit = async (values: any) => {
    setShow(true);
    try {
      const res = await api.post("/login", {
        email: values.email,
        password: values.password,
      });
      localStorage.setItem("jwt", res.data.jwt);
      navigateTo("/");
    } catch (err) {
      toast({
        description: "Email ou senha inválidos",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
    } finally {
      setShow(false);
    }
  };

  useEffect(() => {
    localStorage.removeItem("jwt");
  }, []);

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
                Faça seu cadastro
              </Button>
            </Link>

            <Link to="/trocar-senha">
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
