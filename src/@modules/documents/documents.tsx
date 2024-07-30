import LayoutDefault from "../../layouts/LayoutDefault";
import { Subtitle, Title } from "../../components/Texts/Texts";
import { Button, Flex, Grid, useDisclosure } from "@chakra-ui/react";
import { FilePdf, Plus } from "@phosphor-icons/react";
import { api } from "../../api/axiosInstance";
import { useRef, useState } from "react";
import { ModalAddDocument } from "./components/ModalAddDocument";
import { useQuery } from "react-query";
import { documentsService } from "./service/service";

export const Documents = () => {
  const {
    isLoading,
    error,
    data: dataFetch,
    refetch,
  } = useQuery({
    queryKey: ["documents"],
    queryFn: () => documentsService.getDocuments(),
    keepPreviousData: true,
  });

  const [url, setUrl] = useState("");
  const modal = useDisclosure();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    const file = event.target.files?.[0];
    if (file) {
      formData.append("file", file);
    }
    try {
      const res = await api.post("/upload", formData);

      setUrl(res.data.url);
    } catch {
      console.log("error");
    } finally {
      modal.onOpen();
    }
  };

  const createDocument = async ({
    infos,
  }: {
    infos: { title: string; description: string };
  }) => {
    try {
      await api.post("/new-document", {
        title: infos.title,
        description: infos.description,
        url,
      });
    } catch {
      console.log("error");
    } finally {
      refetch();
      modal.onClose();
    }
  };

  return (
    <>
      <ModalAddDocument
        onSucess={createDocument}
        isOpen={modal.isOpen}
        onClose={modal.onClose}
      />
      <LayoutDefault>
        <Flex flexDir="column" gap="16px" overflow="auto">
          <Flex flexDir="column" gap="4px">
            <Title>Documentos</Title>
            <Subtitle>Your current sales summary and activity.</Subtitle>
          </Flex>

          <Flex align="center" w="full">
            <input
              type="file"
              accept="application/pdf"
              hidden
              ref={inputRef}
              onChange={handleChange}
            />
            <Button
              w={{ mobile: "100%", tablet: "230px" }}
              gap="8px"
              colorScheme="blue"
              onClick={() => inputRef.current?.click()}
            >
              Adicionar documento
              <Plus color="white" size={24} />
            </Button>
          </Flex>

          <Grid
            templateColumns={{
              mobile: "repeat(1, 1fr)",
              tablet: "repeat(2, 1fr)",
            }}
            gap="16px"
          >
            {dataFetch?.data.map((document: any) => (
              <DocumentCard
                url={document.url}
                id={document.id}
                title={document.title}
                description={document.description}
                key={document.description}
              />
            ))}
          </Grid>
        </Flex>
      </LayoutDefault>
    </>
  );
};

const DocumentCard = ({
  id,
  title,
  description,
  url,
}: {
  id: string;
  title: string;
  description: string;
  url: string;
}) => {
  return (
    <Flex
      borderRadius="4px"
      border="2px solid #EAECF0"
      p="16px"
      flexDir="column"
      gap="8px"
      cursor="pointer"
      onClick={() => {
        window.open(url, "_blank");
      }}
    >
      <Flex
        flexDir="column"
        gap="4px"
        justifyContent="center"
        alignItems="center"
      >
        <FilePdf size={96} weight="duotone" />
        <Subtitle textAlign="center">{title}</Subtitle>
        <Subtitle textAlign="center" color="text.secondary">
          {description}
        </Subtitle>
      </Flex>
    </Flex>
  );
};
