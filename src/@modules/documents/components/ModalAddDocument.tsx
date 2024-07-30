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
import { Label, ErrorMessage } from "../../../components/Texts/Texts";
import { useEffect, useState } from "react";

export const ModalAddDocument = ({
  isOpen,
  onClose,
  onSucess,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSucess: ({
    infos,
  }: {
    infos: { title: string; description: string };
  }) => void;
}) => {
  const [value, setValue] = useState({ title: "", description: "" });

  const [error, setError] = useState("");

  useEffect(() => {
    if (value.title.length > 0 && value.description.length > 0) {
      setError("");
    }

    if (value.title.length === 0 || value.description.length === 0) {
      setError("Nome e descrição são obrigatórios");
    }
  }, [isOpen, value]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        setValue({ title: "", description: "" });
        onClose();
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Adicionar Lead</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Flex flexDir="column" gap="16px">
            <Flex flexDir="column" gap="8px" w="full">
              <Label>Nome</Label>
              <Input
                value={value.title}
                onChange={(e) => setValue({ ...value, title: e.target.value })}
                placeholder="Nome do documento"
              />
              <ErrorMessage>{error && <>{error}</>}</ErrorMessage>
            </Flex>

            <Flex flexDir="column" gap="8px" w="full">
              <Label>Descrição</Label>
              <Input
                value={value.description}
                onChange={(e) =>
                  setValue({ ...value, description: e.target.value })
                }
                placeholder="Insira a descrição"
              />
            </Flex>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            onClick={() => {
              onSucess({ infos: value });
              setTimeout(() => {
                setValue({ title: "", description: "" });
                onClose();
              }, 1000);
            }}
          >
            Cadastrar documento
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
