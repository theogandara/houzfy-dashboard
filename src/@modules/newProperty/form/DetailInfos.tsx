import { ErrorMessage, Label, Subtitle } from "../../../components/Texts/Texts";
import { Button, Checkbox, Flex, Input } from "@chakra-ui/react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { useNewPropertyStore } from "../store/NewPropertyStore";
import { api } from "../../../api/axiosInstance";
import { useRedirect } from "../../../hooks/useRedirect";

const schema = z.object({
  totalArea: z.string({ message: "Área total inválida" }),
  builtArea: z.string({ message: "Área construída inválido" }),
  bedrooms: z.string({ message: "Insira o número de quartos" }),
  bathrooms: z.string({ message: "Insira o número de banheiros" }),
  suites: z.string({ message: "Insira o número de suítes" }),
  parkingSpaces: z.string({ message: "Insira o número de vagas" }),
});

export const DetailInfos = () => {
  const {
    setStep,
    setDetailInfos,
    basicInfos,
    locationInfos,
    detailInfos,
    clear,
  } = useNewPropertyStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      totalArea: detailInfos.totalArea || "",
      builtArea: detailInfos.builtArea || "",
      bedrooms: detailInfos.bedrooms || "",
      bathrooms: detailInfos.bathrooms || "",
      suites: detailInfos.suites || "",
      parkingSpaces: detailInfos.parkingSpaces || "",
      pool: detailInfos.pool,
      gym: detailInfos.gym,
      elevator: detailInfos.elevator,
      petsAllowed: detailInfos.petsAllowed,
      barbecueArea: detailInfos.barbecueArea,
      security24h: detailInfos.security24h,
      furnished: detailInfos.furnished,
    },
  });

  const onBack = () => {
    setDetailInfos({
      totalArea: watch("totalArea"),
      builtArea: watch("builtArea"),
      bedrooms: watch("bedrooms"),
      bathrooms: watch("bathrooms"),
      suites: watch("suites"),
      parkingSpaces: watch("parkingSpaces"),
      pool: watch("pool"),
      gym: watch("gym"),
      elevator: watch("elevator"),
      petsAllowed: watch("petsAllowed"),
      barbecueArea: watch("barbecueArea"),
      security24h: watch("security24h"),
      furnished: watch("furnished"),
    });
    setStep(1);
  };

  const { navigateTo } = useRedirect();

  const onSubmit = (data: any) => {
    setDetailInfos({
      totalArea: data.totalArea,
      builtArea: data.builtArea,
      bedrooms: data.bedrooms,
      bathrooms: data.bathrooms,
      suites: data.suites,
      parkingSpaces: data.parkingSpaces,
      pool: watch("pool"),
      gym: watch("gym"),
      elevator: watch("elevator"),
      petsAllowed: watch("petsAllowed"),
      barbecueArea: watch("barbecueArea"),
      security24h: watch("security24h"),
      furnished: watch("furnished"),
    });

    try {
      api.post("/new-property", {
        ...basicInfos,
        ...locationInfos,
        ...detailInfos,
      });

      clear();
      navigateTo("/imoveis");
    } catch (err) {
      console.error(err);
    } finally {
      console.log("Property created");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Subtitle color="text.black" mb="16px">
        Detalhes do imóvel
      </Subtitle>
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
              {...register("parkingSpaces")}
              placeholder="Insira a quantidade de vagas de garagem"
            />
            <ErrorMessage>
              {errors.parkingSpaces?.message && (
                <>{errors.parkingSpaces?.message}</>
              )}
            </ErrorMessage>
          </Flex>
        </Flex>

        <Flex flexDir={{ mobile: "column", tablet: "row" }} gap="12px">
          <Flex flexDir="column" gap="8px" w="full">
            <Checkbox {...register("pool")}>Possui piscina</Checkbox>
          </Flex>

          <Flex flexDir="column" gap="8px" w="full">
            <Checkbox {...register("barbecueArea")}>
              Possui churrasqueira
            </Checkbox>
          </Flex>
        </Flex>

        <Flex flexDir={{ mobile: "column", tablet: "row" }} gap="12px">
          <Flex flexDir="column" gap="8px" w="full">
            <Checkbox {...register("gym")}>Possui academia</Checkbox>
          </Flex>

          <Flex flexDir="column" gap="8px" w="full">
            <Checkbox {...register("security24h")}>
              Possui portaria 24h
            </Checkbox>
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
          <Input placeholder="Insira outras características" />
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
          Finalizar
        </Button>
      </Flex>
    </form>
  );
};
