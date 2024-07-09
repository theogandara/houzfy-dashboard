import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Textarea,
} from "@chakra-ui/react";
import { Label } from "../../../components/Texts/Texts";
import { useCRMStore } from "../store";
import { Trash } from "@phosphor-icons/react";

export const ModalEditLead = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { selectedLead } = useCRMStore();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Editar Lead</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Flex flexDir="column" gap="8px" w="full">
            <Label>Nome</Label>
            <Input defaultValue={selectedLead.name} />
          </Flex>

          <Flex flexDir="column" gap="8px" w="full">
            <Label>Email</Label>
            <Input defaultValue={selectedLead.email} />
          </Flex>

          <Flex flexDir="column" gap="8px" w="full">
            <Label>Celular</Label>
            <Input defaultValue={selectedLead.phone} />
          </Flex>

          <Flex flexDir="column" gap="8px" w="full">
            <Label>Mensagem</Label>

            <Textarea
              defaultValue={selectedLead.message}
              maxH={{ mobile: "200px", tablet: "300px" }}
              placeholder="Insira a mensagem"
            />
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="red"
            display="flex"
            alignItems="center"
            gap="8px"
            onClick={onClose}
          >
            <Trash />
          </Button>
          <Spacer />
          <Button colorScheme="blue" mr={3}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
