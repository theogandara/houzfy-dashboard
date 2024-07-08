import { Button, Flex, useToast } from "@chakra-ui/react";
import { P, Subtitle, Title } from "../../components/Texts/Texts";
import { useRedirect } from "../../hooks/useRedirect";
import LayoutHeader from "../../layouts/LayoutHeader";
import { Trash } from "@phosphor-icons/react";
import { useParams } from "react-router-dom";
import { propertiesService } from "../properties/service/service";
import { useMutation, useQuery } from "react-query";
import { ErrorPage } from "../../components/Feedback/ErrorPage";
import { LoadingContent } from "../../components/Feedback/LoadingContent";

export const HouseDetails = () => {
  const { navigateTo, goBack } = useRedirect();
  const { id } = useParams();
  const toast = useToast();

  const deleteProperty = useMutation({
    mutationFn: () => propertiesService.deleteProperty(id || ""),
    onSuccess: (res: any) => {
      toast({
        description: "Imóvel excluído com sucesso!",
        status: "success",
        duration: 1500,
        isClosable: true,
      });
      navigateTo("/imoveis");
    },
    onError: (err: any) => {
      toast({
        description: "Erro ao deletar, se persistir, contate o suporte.",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
    },
  });

  const { isLoading, error, data } = useQuery(["property", id], () =>
    propertiesService.getProperty(id || "")
  );

  const propertyDefault = {
    id: "",
    title: "",
    description: "",
    address: "",
    number: "",
    neighborhood: "",
    city: "",
    state: "",
    zipCode: "",
    price: "",
    purpose: "sale",
  };

  const property = data?.data.property || propertyDefault;

  if (error) return <ErrorPage />;

  if (isLoading)
    return (
      <LayoutHeader title="Detalhes do imóvel" onClickBack={goBack}>
        <LoadingContent />
      </LayoutHeader>
    );

  return (
    <LayoutHeader title="Detalhes do imóvel" onClickBack={goBack}>
      <Flex flexDir="column" gap="16px" overflow="auto">
        <Flex flexDir="column" gap="4px">
          <Title>Detalhes do imóvel</Title>
          <Subtitle>Veja os detalhes do imóvel que você selecionou.</Subtitle>
        </Flex>

        <Flex
          borderRadius="4px"
          flexDir={{ mobile: "column", tablet: "row" }}
          gap="16px"
        >
          <Flex p="16px" flexDir="column" gap="8px">
            <Subtitle>Informações básicas</Subtitle>

            <Flex flexDir="column" gap="8px">
              <Item label="Título" value={property.title} />
              <Item label="Descrição" value={property.description} />
              <Item label="Preço" value={property.price} />
              <Item label="Finalidade" value={property.purpose} />
              <Item label="Categoria" value={property.category} />
            </Flex>
          </Flex>

          <Flex p="16px" flexDir="column" gap="8px">
            <Subtitle>Localização</Subtitle>

            <Flex flexDir="column" gap="8px">
              <Item label="Endereço" value={property.address} />
              <Item label="Número" value={property.number} />
              <Item label="Bairro" value={property.neighborhood} />
              <Item label="Cidade" value={property.city} />
              <Item label="Estado" value={property.state} />
              <Item label="CEP" value={property.zipCode} />
              <Item label="Complemento" value="" />
            </Flex>
          </Flex>

          <Flex p="16px" flexDir="column" gap="8px">
            <Subtitle>Detalhes do imóvel</Subtitle>

            <Flex flexDir="column" gap="8px">
              <Item label="Área" value={property.area} />
              <Item label="Quartos" value={property.bedrooms} />
              <Item label="Banheiros" value={property.bathrooms} />
              <Item label="Vagas de garagem" value={property.parkingSpaces} />
              <Item
                label="Elevador"
                value={property.elevator ? "Sim" : "Não"}
              />
              <Item
                label="Mobiliado"
                value={property.furnished ? "Sim" : "Não"}
              />
              <Item
                label="Portaria 24h"
                value={property.doorman ? "Sim" : "Não"}
              />
            </Flex>
          </Flex>
        </Flex>

        <Flex justify="space-between">
          <Button colorScheme="blue">Salvar</Button>

          <Button
            colorScheme="red"
            display="flex"
            alignItems="center"
            gap="8px"
            onClick={() => deleteProperty.mutate()}
          >
            <Trash />
            Excluir imóvel
          </Button>
        </Flex>
      </Flex>
    </LayoutHeader>
  );
};

const Item = ({ label, value }: { label: string; value: string }) => {
  return (
    <Flex flexDir="column" gap="8px">
      <P>
        <strong>{label}:</strong> {value}
      </P>
    </Flex>
  );
};
