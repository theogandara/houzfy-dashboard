import LayoutDefault from "../../layouts/LayoutDefault";
import { Subtitle, Title } from "../../components/Texts/Texts";
import { Table } from "./Table";
import { Flex } from "@chakra-ui/react";

export const CRM = () => {
  return (
    <LayoutDefault>
      <Flex w="full" flexDir="column" gap="16px" h="full">
        <Flex flexDir="column" gap="4px">
          <Title>CRM</Title>
          <Subtitle>
            O CRM é uma ferramenta que ajuda a gerenciar o relacionamento com
            possíveis clientes, desde o primeiro contato até a conversão.
          </Subtitle>
        </Flex>

        <Table />
      </Flex>
    </LayoutDefault>
  );
};
