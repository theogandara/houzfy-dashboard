import { Flex, Image } from "@chakra-ui/react";
import { P, Subtitle } from "../../../components/Texts/Texts";
import { Badge } from "../../../components/Badge/Badge";
import { serializePurpose } from "../../../serialize/property.serialize";
import { serializeMoney } from "../../../serialize/money.serialize";
import { serializeString } from "../../../serialize/string.serialize";
import { useRedirect } from "../../../hooks/useRedirect";

export const Property = (props: {
  propertyId: string;
  title: string;
  description: string;
  address: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  price: string;
  purpose: "sale" | "rent";
}) => {
  const formatedValues = {
    title: serializeString(props.title, 100),
    description: serializeString(props.description, 200),
    address: serializeString(props.address),
    number: props.number,
    neighborhood: props.neighborhood,
    city: props.city,
    state: props.state,
    zipCode: props.zipCode,
    price:
      props.purpose === "rent"
        ? `${serializeMoney(props.price)}/mês`
        : serializeMoney(props.price),
    purpose: serializePurpose(props.purpose),
  };

  const { navigateTo } = useRedirect();

  return (
    <Flex
      w="full"
      border="2px solid"
      borderColor="text.tertiary"
      borderRadius="2px"
      flexDir={{ mobile: "column", desktop: "row" }}
      cursor="pointer"
      onClick={() => navigateTo(`/imoveis/detalhes/${props.propertyId}`)}
    >
      <Flex
        h="180px"
        overflow="hidden"
        w={{ mobile: "full", desktop: "260px" }}
        position="relative"
        mx={{ mobile: "auto", tablet: "0" }}
      >
        <Image
          objectFit="cover"
          w="full"
          h={{ mobile: "full", desktop: "180px" }}
          src="/default/house-default.jpeg"
        />
      </Flex>

      <Flex w="full" p="12px">
        <Flex flexDir="column" gap="8px">
          <Subtitle color="text.black">{formatedValues.title}</Subtitle>
          <Flex gap="8px">
            <Badge text={formatedValues.price} color="blue" />
            <Badge
              text={formatedValues.purpose}
              color={props.purpose === "rent" ? "yellow" : "green"}
            />
          </Flex>
          <P>{formatedValues.description}</P>
          <P color="text.black" fontWeight="500">
            {formatedValues.address} - {formatedValues.number} -{" "}
            {formatedValues.neighborhood}
          </P>
          <P color="text.black" fontWeight="500">
            {formatedValues.city} - {formatedValues.state} -{" "}
            {formatedValues.zipCode}
          </P>
        </Flex>
      </Flex>
    </Flex>
  );
};
