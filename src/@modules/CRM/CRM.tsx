import LayoutDefault from "../../layouts/LayoutDefault";
import { Subtitle, Title } from "../../components/Texts/Texts";
import { Table } from "./Table";
import { Button, Flex, Tooltip, useDisclosure } from "@chakra-ui/react";
import { Plus } from "@phosphor-icons/react";
import { ModalAddLead } from "./components/ModalAddLead";

export const CRM = () => {
  const modalAddLead = useDisclosure();
  return (
    <>
      <LayoutDefault>
        <Flex w="full" flexDir="column" gap="16px" h="full">
          <Flex flexDir="column" gap="4px">
            <Title>CRM</Title>
            <Subtitle>
              O CRM é uma ferramenta que ajuda a gerenciar o relacionamento com
              possíveis clientes, desde o primeiro contato até a conversão.
            </Subtitle>
          </Flex>

          <Flex justify="end" align="center" w="full">
            <Tooltip label="Adicionar manualmente">
              <Button
                onClick={modalAddLead.onOpen}
                gap="8px"
                colorScheme="blue"
              >
                <Plus color="white" size={24} />
              </Button>
            </Tooltip>
          </Flex>

          <Table />
        </Flex>
      </LayoutDefault>

      <ModalAddLead
        isOpen={modalAddLead.isOpen}
        onClose={modalAddLead.onClose}
      />
    </>
  );
};
