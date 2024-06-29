import { Button, Flex, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LayoutForm from "../../layouts/LayoutForm";
import { ErrorMessage, Label, Title } from "../../components/Texts/Texts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRedirect } from "../../hooks/useRedirect";

const schema = z.object({
  email: z.string().email({ message: "Email inválido" }),
});

export const ChangePassword = () => {
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
    navigateTo("/entrar");
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
            <Title>Trocar senha</Title>
          </Flex>

          <Flex flexDir="column" gap="12px">
            <Flex flexDir="column" gap="8px">
              <Label>Insira seu email</Label>
              <Input {...register("email")} placeholder="Email" />

              <ErrorMessage>
                {errors.email?.message && <>{errors.email?.message}</>}
              </ErrorMessage>
            </Flex>
          </Flex>
          <Button colorScheme="blue" type="submit">
            Alterar senha
          </Button>

          <Flex
            flexDir={{ mobile: "column", tablet: "row" }}
            gap="12px"
            textAlign="center"
            justifyContent="space-between"
          >
            <Link to="/entrar">
              <Button colorScheme="gray" variant="link">
                Já tenho uma conta
              </Button>
            </Link>

            <Link to="/cadastro">
              <Button colorScheme="gray" variant="link">
                Quero criar uma conta
              </Button>
            </Link>
          </Flex>
        </Flex>
      </form>
    </LayoutForm>
  );
};
