import { Box, Button, useToast } from "@chakra-ui/react";
import { Subtitle, Title } from "../../components/Texts/Texts";
import { useRedirect } from "../../hooks/useRedirect";
import LayoutHeader from "../../layouts/LayoutHeader";
import { Trash } from "@phosphor-icons/react";
import { useParams } from "react-router-dom";
import { propertiesService } from "../properties/service/service";
import { useMutation, useQuery } from "react-query";
import { ErrorPage } from "../../components/Feedback/ErrorPage";
import { Property } from "../properties/components/Property";

export const HouseDetails = () => {
  const { navigateTo } = useRedirect();
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

  return (
    <LayoutHeader
      title="Detalhes do imóvel"
      onClickBack={() => navigateTo("/imoveis")}
    >
      <Box>
        <Property
          propertyId={property?.id}
          title={property?.title}
          description={property?.description}
          address={property?.address}
          number={property?.number}
          neighborhood={property?.neighborhood}
          city={property?.city}
          state={property?.state}
          zipCode={property?.zipCode}
          price={property?.price}
          purpose={property?.purpose}
        />
        <Title>Detalhes do imóvel</Title>
        <Subtitle>Veja os detalhes do imóvel que você selecionou.</Subtitle>
        <Box>
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
        </Box>
      </Box>
    </LayoutHeader>
  );
};
