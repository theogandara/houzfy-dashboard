import { ErrorMessage, Label, Subtitle } from "../../../components/Texts/Texts";
import { Button, Flex, Input } from "@chakra-ui/react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { useNewPropertyStore } from "../store/NewPropertyStore";

const schema = z.object({
  address: z.string().email({ message: "address inválido" }),
  number: z.string().email({ message: "number inválido" }),
  complement: z.string().email({ message: "complement inválido" }),
  neighborhood: z.string().email({ message: "neighborhood inválido" }),
  city: z.string().email({ message: "city inválido" }),
  state: z.string().email({ message: "state inválido" }),
  zipCode: z.string().email({ message: "zipCode inválido" }),
});

export const LocationInfos = () => {
  const { setStep } = useNewPropertyStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
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
      <Flex mt="24px" gap="24px">
        <Button onClick={() => setStep(0)} colorScheme="gray">
          <ArrowLeft color="black" size={24} />
        </Button>

        <Button
          rightIcon={<ArrowRight color="white" size={24} />}
          w="full"
          gap="12px"
          colorScheme="blue"
          onClick={() => setStep(2)}
        >
          Próxima etapa
        </Button>
      </Flex>
    </>
  );
};
