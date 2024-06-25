import LayoutDefault from "../../layouts/LayoutDefault";
import { Subtitle, Title } from "../../components/Texts/Texts";
import { BasicInfos } from "./form/BasicInfos";
import { LocationInfos } from "./form/LocationInfos";
import { DetailInfos } from "./form/DetailInfos";
import { useNewPropertyStore } from "./store/NewPropertyStore";
import { Divider, Flex } from "@chakra-ui/react";

export const NewProperty = () => {
  const { step } = useNewPropertyStore();

  const RenderForm = () => {
    switch (step) {
      case 0:
        return <BasicInfos />;
      case 1:
        return <LocationInfos />;
      case 2:
        return <DetailInfos />;
      default:
        return <BasicInfos />;
    }
  };

  return (
    <LayoutDefault>
      <Title>Cadastrar imóvel</Title>
      <Subtitle>Your current sales summary and activity.</Subtitle>
      <Divider mt="24px" />

      <Flex w="full" gap="12px" flexDir="column" mt="24px">
        <RenderForm />
      </Flex>
    </LayoutDefault>
  );
};
