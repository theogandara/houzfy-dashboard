import LayoutDefault from "../../layouts/LayoutDefault";
import { Subtitle, Title } from "../../components/Texts/Texts";
import { Button, Flex, Grid } from "@chakra-ui/react";
import { FilePdf, Plus } from "@phosphor-icons/react";

const documentsMock = [
  {
    id: "1",
    title: "Contrato Aluguel",
    description: "Locação de imóvel residencial",
  },
  {
    id: "2",
    title: "Contrato Venda",
    description: "Compra e venda de imóvel residencial",
  },
];

export const Documents = () => {
  return (
    <LayoutDefault>
      <Flex flexDir="column" gap="16px" overflow="auto">
        <Flex flexDir="column" gap="4px">
          <Title>Documentos</Title>
          <Subtitle>Your current sales summary and activity.</Subtitle>
        </Flex>

        <Flex align="center" w="full">
          <Button
            w={{ mobile: "100%", tablet: "230px" }}
            gap="8px"
            colorScheme="blue"
          >
            Adicionar documento
            <Plus color="white" size={24} />
          </Button>
        </Flex>

        <Grid
          templateColumns={{
            mobile: "repeat(1, 1fr)",
            tablet: "repeat(2, 1fr)",
            desktop: "repeat(3, 1fr)",
          }}
          gap="16px"
        >
          {documentsMock.map((document) => (
            <DocumentCard
              id={document.id}
              title={document.title}
              description={document.description}
              key={document.id}
            />
          ))}
        </Grid>
      </Flex>
    </LayoutDefault>
  );
};

const DocumentCard = ({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) => {
  return (
    <Flex
      borderRadius="4px"
      border="2px solid #EAECF0"
      p="16px"
      flexDir="column"
      gap="8px"
      cursor="pointer"
    >
      <Flex
        flexDir="column"
        gap="4px"
        justifyContent="center"
        alignItems="center"
      >
        <FilePdf size={96} weight="duotone" />
        <Subtitle textAlign="center">{title}</Subtitle>
        <Subtitle textAlign="center" color="text.secondary">
          {description}
        </Subtitle>
      </Flex>
    </Flex>
  );
};
