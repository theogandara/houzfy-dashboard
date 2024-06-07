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

export const DetailInfos = () => {
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
      <Subtitle color="text.black">Detalhes do imóvel</Subtitle>
      <Flex flexDir="column" gap="12px">
        <Flex flexDir={{ mobile: "column", tablet: "row" }} gap="12px">
          <Flex flexDir="column" gap="8px" w="full">
            <Label>Área Total (m²)</Label>
            <Input
              {...register("totalArea")}
              placeholder="Insira a área total"
            />
            <ErrorMessage>
              {errors.totalArea?.message && <>{errors.totalArea?.message}</>}
            </ErrorMessage>
          </Flex>

          <Flex flexDir="column" gap="8px" w="full">
            <Label>Área Construída (m²)</Label>
            <Input
              {...register("builtArea")}
              placeholder="Insira a área construída"
            />
            <ErrorMessage>
              {errors.builtArea?.message && <>{errors.builtArea?.message}</>}
            </ErrorMessage>
          </Flex>
        </Flex>

        <Flex flexDir={{ mobile: "column", tablet: "row" }} gap="12px">
          <Flex flexDir="column" gap="8px" w="full">
            <Label>Quantidade de Quartos</Label>
            <Input
              {...register("bedrooms")}
              placeholder="Insira a quantidade de quartos"
            />
            <ErrorMessage>
              {errors.bedrooms?.message && <>{errors.bedrooms?.message}</>}
            </ErrorMessage>
          </Flex>

          <Flex flexDir="column" gap="8px" w="full">
            <Label>Quantidade de Banheiros</Label>
            <Input
              {...register("bathrooms")}
              placeholder="Insira a quantidade de banheiros"
            />
            <ErrorMessage>
              {errors.bathrooms?.message && <>{errors.bathrooms?.message}</>}
            </ErrorMessage>
          </Flex>
        </Flex>

        <Flex flexDir={{ mobile: "column", tablet: "row" }} gap="12px">
          <Flex flexDir="column" gap="8px" w="full">
            <Label>Quantidade de Suítes</Label>
            <Input
              {...register("suites")}
              placeholder="Insira a quantidade de suítes"
            />
            <ErrorMessage>
              {errors.suites?.message && <>{errors.suites?.message}</>}
            </ErrorMessage>
          </Flex>

          <Flex flexDir="column" gap="8px" w="full">
            <Label>Quantidade de Vagas de Garagem</Label>
            <Input
              {...register("garages")}
              placeholder="Insira a quantidade de vagas de garagem"
            />
            <ErrorMessage>
              {errors.garages?.message && <>{errors.garages?.message}</>}
            </ErrorMessage>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
