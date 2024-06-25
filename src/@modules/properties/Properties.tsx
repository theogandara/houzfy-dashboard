import LayoutDefault from "../../layouts/LayoutDefault";
import { Subtitle, Title } from "../../components/Texts/Texts";
import { propertiesService } from "./service/service";
import { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { Property } from "./components/Property";

export const Properties = () => {
  const [properties, setProperties] = useState([]);

  const getProperties = async () => {
    try {
      const res = await propertiesService.getProperties();
      setProperties(res.data.properties);
    } catch (e) {}
  };

  useEffect(() => {
    getProperties();
  }, []);

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
    </LayoutDefault>
  );
};
