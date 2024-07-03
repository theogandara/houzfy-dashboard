import LayoutDefault from "../../layouts/LayoutDefault";
import { Subtitle, Title } from "../../components/Texts/Texts";
import { propertiesService } from "./service/service";
import { Flex, Skeleton, Stack } from "@chakra-ui/react";
import { Property } from "./components/Property";
import { useQuery } from "react-query";
import { ErrorPage } from "../../components/Feedback/ErrorPage";

export const Properties = () => {
  const { isLoading, error, data } = useQuery("properties", () =>
    propertiesService.getProperties()
  );
  const properties = data?.data.properties;

  if (error) return <ErrorPage />;

  return (
    <LayoutDefault>
      <Title>Propriedades cadastradas</Title>
      <Subtitle>
        Aqui você pode ver todas as propriedades cadastradas na sua imobiliária.
      </Subtitle>

      <Flex mt="32px" flexDir="column" gap="24px">
        {properties?.map((property: any) => {
          return <Property key={Math.random()} {...property} />;
        })}
      </Flex>

      {isLoading && (
        <Stack mt="32px" gap="24px">
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <Skeleton
                key={index}
                startColor="#eeeef0"
                height={{ mobile: "330px", tablet: "180px" }}
              />
            ))}
        </Stack>
      )}
    </LayoutDefault>
  );
};
