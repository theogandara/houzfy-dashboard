import LayoutDefault from "../../layouts/LayoutDefault";
import { P, Subtitle, Title } from "../../components/Texts/Texts";
import { propertiesService } from "./service/service";
import { useEffect, useState } from "react";
import { Flex, Image } from "@chakra-ui/react";

export const Properties = () => {
  const [properties, setProperties] = useState([
    {
      propertyId: "d96b35f7-bc09-42be-8de8-2d57da1dfb96",
      title: "Luxurious Beachfront Villa",
      price: "1500000",
      description:
        "Stunning villa with panoramic ocean views, featuring 5 bedrooms, private pool, and BBQ area.",
      purpose: "sale",
      category: "house",
      address: "Ocean Drive",
      number: "123",
      neighborhood: "Beachfront Paradise",
      city: "Coastal City",
      state: "SP",
      zipCode: "54321",
      totalArea: "800",
      builtArea: "450",
      bedrooms: 5,
      bathrooms: 6,
      suites: 4,
      parkingSpaces: 3,
      pool: true,
      gym: false,
      elevator: false,
      petsAllowed: true,
      barbecueArea: true,
      security24h: true,
      furnished: true,
      others: "Includes home theater room and spacious outdoor terrace.",
      createdAt: "2024-06-19T21:08:54.947Z",
    },
    {
      propertyId: "d96b35f7-bc09-42be-8de8-2d57da1dfb96",
      title: "Luxurious Beachfront Villa",
      price: "1500000",
      description:
        "Stunning villa with panoramic ocean views, featuring 5 bedrooms, private pool, and BBQ area.",
      purpose: "sale",
      category: "apartment",
      address: "Ocean Drive",
      number: "123",
      neighborhood: "Beachfront Paradise",
      city: "Coastal City",
      state: "SP",
      zipCode: "54321",
      totalArea: "800",
      builtArea: "450",
      bedrooms: 5,
      bathrooms: 6,
      suites: 4,
      parkingSpaces: 3,
      pool: true,
      gym: false,
      elevator: false,
      petsAllowed: true,
      barbecueArea: true,
      security24h: true,
      furnished: true,
      others: "Includes home theater room and spacious outdoor terrace.",
      createdAt: "2024-06-19T21:08:54.947Z",
    },
    {
      propertyId: "d96b35f7-bc09-42be-8de8-2d57da1dfb96",
      title: "Luxurious Beachfront Villa",
      price: "1500000",
      description:
        "Stunning villa with panoramic ocean views, featuring 5 bedrooms, private pool, and BBQ area.",
      purpose: "sale",
      category: "commercial",
      address: "Ocean Drive",
      number: "123",
      neighborhood: "Beachfront Paradise",
      city: "Coastal City",
      state: "SP",
      zipCode: "54321",
      totalArea: "800",
      builtArea: "450",
      bedrooms: 5,
      bathrooms: 6,
      suites: 4,
      parkingSpaces: 3,
      pool: true,
      gym: false,
      elevator: false,
      petsAllowed: true,
      barbecueArea: true,
      security24h: true,
      furnished: true,
      others: "Includes home theater room and spacious outdoor terrace.",
      createdAt: "2024-06-19T21:08:54.947Z",
    },

    {
      propertyId: "d96b35f7-bc09-42be-8de8-2d57da1dfb96",
      title: "Luxurious Beachfront Villa",
      price: "1500000",
      description:
        "Stunning villa with panoramic ocean views, featuring 5 bedrooms, private pool, and BBQ area.",
      purpose: "sale",
      category: "land",
      address: "Ocean Drive",
      number: "123",
      neighborhood: "Beachfront Paradise",
      city: "Coastal City",
      state: "SP",
      zipCode: "54321",
      totalArea: "800",
      builtArea: "450",
      bedrooms: 5,
      bathrooms: 6,
      suites: 4,
      parkingSpaces: 3,
      pool: true,
      gym: false,
      elevator: false,
      petsAllowed: true,
      barbecueArea: true,
      security24h: true,
      furnished: true,
      others: "Includes home theater room and spacious outdoor terrace.",
      createdAt: "2024-06-19T21:08:54.947Z",
    },
  ]);

  const getProperties = async () => {
    try {
      const res = await propertiesService.getProperties();
      setProperties(res.data.properties);
    } catch (e) {}
  };

  // useEffect(() => {
  //   getProperties();
  // }, []);

  return (
    <LayoutDefault>
      <Title>Propriedades cadastradas</Title>
      <Subtitle>
        Aqui você pode ver todas as propriedades cadastradas na sua imobiliária.
      </Subtitle>

      <Flex mt="32px" flexDir="column" gap="24px">
        {properties?.map((property: any) => {
          return <PropertyCard key={Math.random()} {...property} />;
        })}
      </Flex>
    </LayoutDefault>
  );
};

const PropertyCard = (props: any) => {
  return (
    <Flex
      w="full"
      border="2px solid"
      borderColor="text.tertiary"
      borderRadius="2px"
      flexDir={{ mobile: "column", desktop: "row" }}
    >
      <Flex
        h="180px"
        overflow="hidden"
        w={{ mobile: "full", desktop: "260px" }}
        position="relative"
        mx={{ mobile: "auto", tablet: "0" }}
      >
        <Flex
          bg={
            props.category === "house"
              ? "blue.500"
              : props.category === "apartment"
              ? "gray.500"
              : props.category === "commercial"
              ? "green.500"
              : props.category === "land"
              ? "yellow.500"
              : "gray.500"
          }
          p="6px"
          px="12px"
          position="absolute"
          borderBottomRightRadius="10px"
          borderBottom="2px solid"
          borderRight="2px solid"
          borderColor="text.tertiary"
        >
          {props.category === "house" && (
            <Subtitle fontWeight="700" color="text.primary">
              CASA
            </Subtitle>
          )}

          {props.category === "apartment" && (
            <Subtitle fontWeight="700" color="text.primary">
              APARTAMENTO
            </Subtitle>
          )}

          {props.category === "commercial" && (
            <Subtitle fontWeight="700" color="text.primary">
              COMERCIAL
            </Subtitle>
          )}

          {props.category === "land" && (
            <Subtitle fontWeight="700" color="text.primary">
              TERRENO
            </Subtitle>
          )}
        </Flex>
        <Image
          objectFit="cover"
          w="full"
          h={{ mobile: "full", desktop: "180px" }}
          src="/default/house-default.jpeg"
        />
      </Flex>

      <Flex w="full" p="4px" border="1px solid red">
        <Flex flexDir="column">
          <Subtitle color="text.black">{props.title}</Subtitle>
          <P>{props.description}</P>
          <P>
            {props.address} - {props.number} - {props.neighborhood}
          </P>
          <P>
            {props.city} - {props.state} - {props.zipCode}
          </P>
          <P>
            {props.price} - {props.purpose}
          </P>

          <P>{props.others}</P>
        </Flex>

        <Flex flexDir="column">
          <P>{props.totalArea}</P>
          <P>{props.builtArea}</P>
          <P>{props.bedrooms}</P>
          <P>{props.bathrooms}</P>
          <P>{props.suites}</P>
          <P>{props.parkingSpaces}</P>
          <P>{props.pool}</P>
          <P>{props.gym}</P>
          <P>{props.elevator}</P>
          <P>{props.petsAllowed}</P>
          <P>{props.barbecueArea}</P>
          <P>{props.furnished}</P>
        </Flex>
      </Flex>
    </Flex>
  );
};
