import LayoutDefault from "../../layouts/LayoutDefault";
import { Subtitle, Title } from "../../components/Texts/Texts";
import { propertiesService } from "./service/service";
import { Flex } from "@chakra-ui/react";
import { Property } from "./components/Property";
import { useQuery } from "react-query";
import { ErrorPage } from "../../components/Feedback/ErrorPage";
import { LoadingContent } from "../../components/Feedback/LoadingContent";

export const Properties = () => {
  const { isLoading, error, data } = useQuery("properties", () =>
    propertiesService.getProperties()
  );
  const properties = data?.data.properties;

  if (error) return <ErrorPage />;

  if (isLoading)
    return (
      <LayoutDefault>
        <LoadingContent />
      </LayoutDefault>
    );

  return (
    <LayoutDefault>
      <Title>Propriedades cadastradas</Title>
      <Subtitle>
        Aqui você pode ver todas as propriedades cadastradas na sua imobiliária.
      </Subtitle>

      <Flex mt="32px" flexDir="column" gap="24px">
        {properties?.map((property: any) => {
          return (
            <Property
              key={Math.random()}
              {...property}
              imageURL={property.images[0]}
            />
          );
        })}
      </Flex>
    </LayoutDefault>
  );
};
