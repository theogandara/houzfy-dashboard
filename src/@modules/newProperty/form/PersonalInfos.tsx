import { ErrorMessage, Label, Subtitle } from "../../../components/Texts/Texts";
import { Flex, Input, Select, Textarea } from "@chakra-ui/react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  title: z.string().email({ message: "Título inválido" }),
  price: z.string().email({ message: "Preço inválido" }),
  description: z.string().email({ message: "Descrição inválida" }),
  action: z.string().email({ message: "Finalidade inválida" }),
  type: z.string().email({ message: "Tipo inválido" }),
});

export const PersonalInfos = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  return (
    <>
      <Subtitle color="text.black">
        Insira as informações pessoais relacionadas ao imóvel
      </Subtitle>

      <Flex flexDir="column" gap="12px">
        <Flex flexDir={{ mobile: "column", tablet: "row" }} gap="12px">
          <Flex flexDir="column" gap="8px" w="full">
            <Label>Nome do Proprietário/Corretor</Label>
            <Input
              {...register("ownerName")}
              placeholder="Insira o nome do proprietário ou corretor"
            />
            <ErrorMessage>
              {errors.ownerName?.message && <>{errors.ownerName?.message}</>}
            </ErrorMessage>
          </Flex>

          <Flex flexDir="column" gap="8px" w="full">
            <Label>Telefone</Label>
            <Input {...register("phone")} placeholder="Insira o telefone" />
            <ErrorMessage>
              {errors.phone?.message && <>{errors.phone?.message}</>}
            </ErrorMessage>
          </Flex>
        </Flex>

        <Flex flexDir="column" gap="8px" w="full">
          <Label>Email</Label>
          <Input {...register("email")} placeholder="Insira o email" />
          <ErrorMessage>
            {errors.email?.message && <>{errors.email?.message}</>}
          </ErrorMessage>
        </Flex>

        <Flex flexDir="column" gap="8px" w="full">
          <Label>Observações Adicionais</Label>
          <Textarea
            maxH={{ mobile: "200px", tablet: "300px" }}
            {...register("additionalNotes")}
            placeholder="Insira observações adicionais"
          />
          <ErrorMessage>
            {errors.additionalNotes?.message && (
              <>{errors.additionalNotes?.message}</>
            )}
          </ErrorMessage>
        </Flex>
      </Flex>
    </>
  );
};
