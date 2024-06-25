import { ErrorMessage, Label, Subtitle } from "../../../components/Texts/Texts";
import { Button, Flex, Input, Select, Textarea } from "@chakra-ui/react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "@phosphor-icons/react";
import { useNewPropertyStore } from "../store/NewPropertyStore";

const schema = z.object({
  title: z.string().max(200, { message: "Título inválido" }),
  price: z
    .string({ message: "Preço inválido" })
    .max(200, { message: "Preço inválido" }),
  description: z.string().max(300, { message: "Descrição inválida" }),
  purpose: z.enum(["sale", "rent"], { message: "Finalidade inválida" }),
  category: z.enum(["apartment", "house", "commercial", "land"], {
    message: "Categoria inválida",
  }),
});

export const BasicInfos = () => {
  const { setStep, setBasicInfos } = useNewPropertyStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = (data: any) => {
    setBasicInfos({
      title: data.title,
      price: Number(data.price),
      description: data.description,
      purpose: data.purpose,
      category: data.category,
    });
    setStep(1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
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
          <Select {...register("purpose")} placeholder="Selecione a finalidade">
            <option value="sale">Venda</option>
            <option value="rent">Aluguel</option>
          </Select>
          <ErrorMessage>
            {errors.purpose?.message && <>{errors.purpose?.message}</>}
          </ErrorMessage>
        </Flex>

        <Flex flexDir="column" gap="8px" w="full">
          <Label>Categoria</Label>
          <Select {...register("category")} placeholder="Selecione a categoria">
            <option value="apartment">Apartamento</option>
            <option value="house">Casa</option>
            <option value="commercial">Comercial</option>
            <option value="land">Terreno</option>
          </Select>
          <ErrorMessage>
            {errors.category?.message && <>{errors.category?.message}</>}
          </ErrorMessage>
        </Flex>
      </Flex>

      <Flex mt="24px" gap="24px">
        <Button
          rightIcon={<ArrowRight color="white" size={24} />}
          w="full"
          gap="12px"
          colorScheme="blue"
          type="submit"
        >
          Próxima etapa
        </Button>
      </Flex>
    </form>
  );
};
