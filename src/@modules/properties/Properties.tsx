import LayoutDefault from "../../layouts/LayoutDefault";
import { Subtitle, Title } from "../../components/Texts/Texts";
import { propertiesService } from "./service/service";
import { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { Property } from "./components/Property";

export const Properties = () => {
  const [properties, setProperties] = useState([
    {
      propertyId: "d96b35f7-bc09-42be-8de8-2d57da1dfb96",
      title:
        "Luxurious Beachfront Villa Luxurious Beachfront VillaLuxurious Beachfront VillaLuxurious Beachfront VillaLuxurious Beachfront VillaLuxurious Beachfront VillaLuxurious Beachfront Villa",
      price: "1200",
      description:
        "Stunning villa with panoramic ocean views, featuring 5 bedrooms, private pool, and BBQ area.Stunning villa with panoramic ocean views, featuring 5 bedrooms, private pool, and BBQ area.Stunning villa with panoramic ocean views, featuring 5 bedrooms, private pool, and BBQ area.Stunning villa with panoramic ocean views, featuring 5 bedrooms, private pool, and BBQ area.Stunning villa with panoramic ocean views, featuring 5 bedrooms, private pool, and BBQ area.",
      purpose: "rent",
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
          return <Property key={Math.random()} {...property} />;
        })}
      </Flex>
    </LayoutDefault>
  );
};
