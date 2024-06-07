import { ErrorMessage, Label, Subtitle } from "../../../components/Texts/Texts";
import { Button, Flex, Input, Select, Textarea } from "@chakra-ui/react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "@phosphor-icons/react";
import { useNewPropertyStore } from "../store/NewPropertyStore";

const schema = z.object({
  title: z.string().email({ message: "Título inválido" }),
  price: z.string().email({ message: "Preço inválido" }),
  description: z.string().email({ message: "Descrição inválida" }),
  action: z.string().email({ message: "Finalidade inválida" }),
  type: z.string().email({ message: "Tipo inválido" }),
});

export const BasicInfos = () => {
  const { setStep } = useNewPropertyStore();
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
        Insira as informações básicas do imóvel para continuar
      </Subtitle>
      <Flex flexDir={{ mobile: "column", tablet: "row" }} gap="12px">
        <Flex flexDir="column" gap="8px" w="full">
          <Label>Título</Label>
          <Input {...register("title")} placeholder="Insira o título" />
          <ErrorMessage>
            {errors.title?.message && <>{errors.title?.message}</>}
          </ErrorMessage>
        </Flex>

        <Flex flexDir="column" gap="8px" w="full">
          <Label>Preço</Label>
          <Input {...register("price")} placeholder="Insira o preço" />
          <ErrorMessage>
            {errors.price?.message && <>{errors.price?.message}</>}
          </ErrorMessage>
        </Flex>
      </Flex>

      <Flex flexDir="column" gap="8px" w="full">
        <Label>Descrição do imóvel</Label>
        <Textarea
          maxH={{ mobile: "200px", tablet: "300px" }}
          {...register("description")}
          placeholder="Insira a descrição"
        />
        <ErrorMessage>
          {errors.description?.message && <>{errors.description?.message}</>}
        </ErrorMessage>
      </Flex>

      <Flex flexDir={{ mobile: "column", tablet: "row" }} gap="12px">
        <Flex flexDir="column" gap="8px" w="full">
          <Label>Finalidade</Label>
          <Select {...register("action")} placeholder="Selecione a finalidade">
            <option value="temporada">Temporada</option>
            <option value="venda">Venda</option>
            <option value="aluguel">Aluguel</option>
          </Select>
          <ErrorMessage>
            {errors.action?.message && <>{errors.action?.message}</>}
          </ErrorMessage>
        </Flex>

        <Flex flexDir="column" gap="8px" w="full">
          <Label>Categoria</Label>
          <Select {...register("type")} placeholder="Selecione a categoria">
            <option value="apartamento">Apartamento</option>
            <option value="casa">Casa</option>
            <option value="comercial">Comercial</option>
            <option value="terreno">Terreno</option>
          </Select>
          <ErrorMessage>
            {errors.type?.message && <>{errors.type?.message}</>}
          </ErrorMessage>
        </Flex>
      </Flex>

      <Flex mt="24px" gap="24px">
        <Button
          rightIcon={<ArrowRight color="white" size={24} />}
          w="full"
          gap="12px"
          colorScheme="blue"
          onClick={() => setStep(1)}
        >
          Próxima etapa
        </Button>
      </Flex>
    </>
  );
};
