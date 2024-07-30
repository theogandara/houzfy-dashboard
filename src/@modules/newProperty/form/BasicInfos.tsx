import { ErrorMessage, Label, Subtitle } from "../../../components/Texts/Texts";
import {
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Textarea,
} from "@chakra-ui/react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, UploadSimple } from "@phosphor-icons/react";
import { useNewPropertyStore } from "../store/NewPropertyStore";
import { useRef, useState } from "react";
import { api } from "../../../api/axiosInstance";

const schema = z.object({
  title: z
    .string()
    .max(200, { message: "Título inválido" })
    .min(5, { message: "Título inválido" }),
  price: z.string({ message: "Preço inválido" }).min(1, {
    message: "Preço inválido",
  }),
  description: z.string().max(300, { message: "Descrição inválida" }).min(5, {
    message: "Descrição inválida",
  }),
  purpose: z.enum(["sale", "rent"], { message: "Finalidade inválida" }),
  category: z.enum(["apartment", "house", "commercial", "land"], {
    message: "Categoria inválida",
  }),
});

export const BasicInfos = () => {
  const {
    setStep,
    setBasicInfos,
    basicInfos,
    setImages: setImagesStore,
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
      title: basicInfos.title,
      price: basicInfos.price,
      description: basicInfos.description,
      purpose: basicInfos.purpose,
      category: basicInfos.category,
    },
  });

  function CurrencyFormat(value: number | string) {
    if (isNaN(Number(value))) return "R$ 0,00";

    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(value));
  }

  const price = watch("price") || "";
  const formattedPrice = CurrencyFormat(price);

  const [images, setImages] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    const file = event.target.files?.[0];
    if (file) {
      formData.append("file", file);
    }
    try {
      const res = await api.post("/upload", formData);
      setImages((state) => [...state, res.data.url]);
    } catch {
    } finally {
    }
  };

  const onSubmit = (data: any) => {
    setImagesStore(images);
    setBasicInfos({
      title: data.title,
      price: data.price,
      description: data.description,
      purpose: data.purpose,
      category: data.category,
    });
    setStep(1);
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      style={{ width: "100%" }}
    >
      <Subtitle color="text.black" mb="16px">
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
          <InputGroup>
            <InputLeftElement pointerEvents="none" color="gray.300">
              R$
            </InputLeftElement>
            <Input
              value={price.replace(/\D/g, "")}
              {...register("price")}
              placeholder="Insira o preço"
            />
          </InputGroup>
          <Label fontSize="12px" lineHeight="14px">
            {formattedPrice}
          </Label>
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

      <Flex flexDir="column" gap="24px" mt="12px">
        <input
          type="file"
          accept="image/*"
          hidden
          ref={inputRef}
          onChange={handleChange}
        />
        <Button
          gap="24px"
          w={{ mobile: "full", tablet: "calc(50% - 8px)" }}
          onClick={() => inputRef.current?.click()}
        >
          <UploadSimple color="black" size={24} />
          Adicionar Fotos
        </Button>

        <Flex>
          {images.map((image, index) => {
            return (
              <Image
                key={index}
                src={image}
                alt="Imagem do imóvel"
                style={{ width: 100, height: 100, objectFit: "cover" }}
              />
            );
          })}
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
