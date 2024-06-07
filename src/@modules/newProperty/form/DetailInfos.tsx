import { ErrorMessage, Label, Subtitle } from "../../../components/Texts/Texts";
import { Button, Checkbox, Flex, Input } from "@chakra-ui/react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { useNewPropertyStore } from "../store/NewPropertyStore";

const schema = z.object({
  totalArea: z.string().email({ message: "totalArea inválido" }),
  builtArea: z.string().email({ message: "builtArea inválido" }),
  bedrooms: z.string().email({ message: "bedrooms inválido" }),
  bathrooms: z.string().email({ message: "bathrooms inválido" }),
  suites: z.string().email({ message: "suites inválido" }),
  garages: z.string().email({ message: "garages inválido" }),
  pool: z.string().email({ message: "pool inválido" }),
  barbecue: z.string().email({ message: "barbecue inválido" }),
  gym: z.string().email({ message: "gym inválido" }),
  concierge: z.string().email({ message: "concierge inválido" }),
  elevator: z.string().email({ message: "elevator inválido" }),
  furnished: z.string().email({ message: "furnished inválido" }),
  petsAllowed: z.string().email({ message: "petsAllowed inválido" }),
  otherFeatures: z.string().email({ message: "otherFeatures inválido" }),
});

export const DetailInfos = () => {
  const { step, setStep } = useNewPropertyStore();
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

        <Flex flexDir={{ mobile: "column", tablet: "row" }} gap="12px">
          <Flex flexDir="column" gap="8px" w="full">
            <Checkbox {...register("pool")}>Possui piscina</Checkbox>
          </Flex>

          <Flex flexDir="column" gap="8px" w="full">
            <Checkbox {...register("barbecue")}>Possui churrasqueira</Checkbox>
          </Flex>
        </Flex>

        <Flex flexDir={{ mobile: "column", tablet: "row" }} gap="12px">
          <Flex flexDir="column" gap="8px" w="full">
            <Checkbox {...register("gym")}>Possui academia</Checkbox>
          </Flex>

          <Flex flexDir="column" gap="8px" w="full">
            <Checkbox {...register("concierge")}>Possui portaria 24h</Checkbox>
          </Flex>
        </Flex>

        <Flex flexDir={{ mobile: "column", tablet: "row" }} gap="12px">
          <Flex flexDir="column" gap="8px" w="full">
            <Checkbox {...register("elevator")}>Possui elevador</Checkbox>
          </Flex>

          <Flex flexDir="column" gap="8px" w="full">
            <Checkbox {...register("furnished")}>Está mobiliado</Checkbox>
          </Flex>
        </Flex>

        <Flex flexDir={{ mobile: "column", tablet: "row" }} gap="12px">
          <Flex flexDir="column" gap="8px" w="full">
            <Checkbox {...register("petsAllowed")}>Aceita animais</Checkbox>
          </Flex>
        </Flex>

        <Flex flexDir="column" gap="8px" w="full">
          <Label>Outros</Label>
          <Input
            {...register("otherFeatures")}
            placeholder="Insira outras características"
          />
          <ErrorMessage>
            {errors.otherFeatures?.message && (
              <>{errors.otherFeatures?.message}</>
            )}
          </ErrorMessage>
        </Flex>
      </Flex>

      <Flex mt="24px" gap="24px">
        <Button onClick={() => setStep(1)} colorScheme="gray">
          <ArrowLeft color="black" size={24} />
        </Button>

        <Button
          rightIcon={<ArrowRight color="white" size={24} />}
          w="full"
          gap="12px"
          colorScheme="blue"
          onClick={() => setStep(3)}
        >
          Próxima etapa
        </Button>
      </Flex>
    </>
  );
};
