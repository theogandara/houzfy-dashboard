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

export const LocationInfos = () => {
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
        Insira as informações de localização do imóvel
      </Subtitle>
      <Flex flexDir="column" gap="12px">
        <Flex flexDir="column" gap="8px" w="full">
          <Label>Endereço</Label>
          <Input {...register("address")} placeholder="Insira o endereço" />
          <ErrorMessage>
            {errors.address?.message && <>{errors.address?.message}</>}
          </ErrorMessage>
        </Flex>

        <Flex flexDir={{ mobile: "column", tablet: "row" }} gap="12px">
          <Flex flexDir="column" gap="8px" w="full">
            <Label>Número</Label>
            <Input {...register("number")} placeholder="Insira o número" />
            <ErrorMessage>
              {errors.number?.message && <>{errors.number?.message}</>}
            </ErrorMessage>
          </Flex>

          <Flex flexDir="column" gap="8px" w="full">
            <Label>Complemento</Label>
            <Input
              {...register("complement")}
              placeholder="Insira o complemento"
            />
            <ErrorMessage>
              {errors.complement?.message && <>{errors.complement?.message}</>}
            </ErrorMessage>
          </Flex>
        </Flex>

        <Flex flexDir={{ mobile: "column", tablet: "row" }} gap="12px">
          <Flex flexDir="column" gap="8px" w="full">
            <Label>Bairro</Label>
            <Input
              {...register("neighborhood")}
              placeholder="Insira o bairro"
            />
            <ErrorMessage>
              {errors.neighborhood?.message && (
                <>{errors.neighborhood?.message}</>
              )}
            </ErrorMessage>
          </Flex>

          <Flex flexDir="column" gap="8px" w="full">
            <Label>Cidade</Label>
            <Input {...register("city")} placeholder="Insira a cidade" />
            <ErrorMessage>
              {errors.city?.message && <>{errors.city?.message}</>}
            </ErrorMessage>
          </Flex>
        </Flex>

        <Flex flexDir={{ mobile: "column", tablet: "row" }} gap="12px">
          <Flex flexDir="column" gap="8px" w="full">
            <Label>Estado</Label>
            <Input {...register("state")} placeholder="Insira o estado" />
            <ErrorMessage>
              {errors.state?.message && <>{errors.state?.message}</>}
            </ErrorMessage>
          </Flex>

          <Flex flexDir="column" gap="8px" w="full">
            <Label>CEP</Label>
            <Input {...register("zipCode")} placeholder="Insira o CEP" />
            <ErrorMessage>
              {errors.zipCode?.message && <>{errors.zipCode?.message}</>}
            </ErrorMessage>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
