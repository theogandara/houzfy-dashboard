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
} from "@chakra-ui/react";
import { ErrorMessage, Label } from "../../../components/Texts/Texts";

export const ModalAddLead = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Adicionar Lead</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Flex flexDir="column" gap="8px" w="full">
            <Label>Nome</Label>
            <Input placeholder="Insira o título" />
            <ErrorMessage>
              {/* {errors.description?.message && (
                <>{errors.description?.message}</>
              )} */}{" "}
            </ErrorMessage>
          </Flex>

          <Flex flexDir="column" gap="8px" w="full">
            <Label>Email</Label>
            <Input placeholder="Insira o título" />
            <ErrorMessage>
              {/* {errors.description?.message && (
                <>{errors.description?.message}</>
              )} */}{" "}
            </ErrorMessage>
          </Flex>

          <Flex flexDir="column" gap="8px" w="full">
            <Label>Celular</Label>
            <Input placeholder="Insira o título" />
            <ErrorMessage>
              {/* {errors.description?.message && (
                <>{errors.description?.message}</>
              )} */}{" "}
            </ErrorMessage>
          </Flex>

          <Flex flexDir="column" gap="8px" w="full">
            <Label>Mensagem</Label>
            <Input placeholder="Insira o título" />
            <ErrorMessage>
              {/* {errors.description?.message && (
                <>{errors.description?.message}</>
              )} */}{" "}
            </ErrorMessage>
          </Flex>

          <Flex flexDir="column" gap="8px" w="full">
            <Label>Propriedade</Label>
            <Input placeholder="Insira o título" />
            <ErrorMessage>
              {/* {errors.description?.message && (
                <>{errors.description?.message}</>
              )} */}{" "}
            </ErrorMessage>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
