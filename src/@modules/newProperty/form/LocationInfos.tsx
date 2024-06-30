import { ErrorMessage, Label, Subtitle } from "../../../components/Texts/Texts";
import { Button, Flex, Input } from "@chakra-ui/react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { useNewPropertyStore } from "../store/NewPropertyStore";

const schema = z.object({
  address: z.string({ message: "Endereço é obrigatório" }),
  number: z.union([
    z.string().regex(/^\d+$/, { message: "Número deve conter apenas dígitos" }),
    z
      .number()
      .nonnegative({ message: "Número deve ser um valor não negativo" }),
  ]),
  neighborhood: z.string({ message: "Bairro é obrigatório" }),
  city: z.string({ message: "Cidade é obrigatória" }),
  state: z.string().length(2, { message: "Estado deve ter 2 caracteres" }),
  zipCode: z.string({ message: "CEP é obrigatório" }),
  complement: z.string().optional(),
});

export const LocationInfos = () => {
  const { setStep, setLocationInfos, locationInfos } = useNewPropertyStore();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      address: locationInfos.address,
      number: locationInfos.number,
      neighborhood: locationInfos.neighborhood,
      city: locationInfos.city,
      state: locationInfos.state,
      zipCode: locationInfos.zipCode,
    },
  });

  const onBack = () => {
    setLocationInfos({
      address: watch("address"),
      number: watch("number"),
      neighborhood: watch("neighborhood"),
      city: watch("city"),
      state: watch("state"),
      zipCode: watch("zipCode"),
    });
    setStep(0);
  };

  const cep = watch("zipCode") || "";

  const onSubmit = (data: any) => {
    setLocationInfos({
      address: data.address,
      number: data.number,
      neighborhood: data.neighborhood,
      city: data.city,
      state: data.state,
      zipCode: data.zipCode,
    });
    setStep(2);
  };

  const maskCEP = (value: string) => {
    return value.replace(/\D/g, "").replace(/^(\d{5})(\d{3})+?$/, "$1-$2");
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      style={{ width: "100%" }}
    >
      <Subtitle color="text.black" mb="16px">
        Insira as informações de localização do imóvel
      </Subtitle>
      <Flex flexDir="column" gap="12px">
        <Flex flexDir="column" gap="8px" w="full">
          <Label>Endereço</Label>
          <Input
            {...register("address")}
            placeholder="Ex: Rua Josino Brisola"
          />
          <ErrorMessage>
            {errors.address?.message && <>{errors.address?.message}</>}
          </ErrorMessage>
        </Flex>

        <Flex flexDir={{ mobile: "column", tablet: "row" }} gap="12px">
          <Flex flexDir="column" gap="8px" w="full">
            <Label>Número</Label>
            <Input {...register("number")} placeholder="Ex: 295" />
            <ErrorMessage>
              {errors.number?.message && <>{errors.number?.message}</>}
            </ErrorMessage>
          </Flex>

          <Flex flexDir="column" gap="8px" w="full">
            <Label>Complemento (opcional)</Label>
            <Input placeholder="Insira o complemento" />
          </Flex>
        </Flex>

        <Flex flexDir={{ mobile: "column", tablet: "row" }} gap="12px">
          <Flex flexDir="column" gap="8px" w="full">
            <Label>Bairro</Label>
            <Input
              {...register("neighborhood")}
              placeholder="Ex: Jardim América"
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
            <Input maxLength={2} {...register("state")} placeholder="Ex: SP" />
            <ErrorMessage>
              {errors.state?.message && <>{errors.state?.message}</>}
            </ErrorMessage>
          </Flex>

          <Flex flexDir="column" gap="8px" w="full">
            <Label>CEP</Label>
            <Input
              maxLength={9}
              value={maskCEP(cep)}
              {...register("zipCode")}
              placeholder="Insira o CEP"
            />
            <ErrorMessage>
              {errors.zipCode?.message && <>{errors.zipCode?.message}</>}
            </ErrorMessage>
          </Flex>
        </Flex>
      </Flex>
      <Flex mt="24px" gap="24px">
        <Button onClick={onBack} colorScheme="gray">
          <ArrowLeft color="black" size={24} />
        </Button>

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
