import { Box, Button, Flex, Tooltip, useDisclosure } from "@chakra-ui/react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { formatDate } from "../../format/formatDate";
import { formatPhone } from "../../format/formatPhone";
import { Subtitle } from "../../components/Texts/Texts";
import { useState } from "react";
import { useQuery } from "react-query";
import { leadsService } from "./service/service";
import { ArrowLeft, ArrowRight, PencilSimple } from "@phosphor-icons/react";
import { LoadingContent } from "../../components/Feedback/LoadingContent";
import { Lead } from "./types";
import { useCRMStore } from "./store";
import { ModalEditLead } from "./components/ModalEditLead";

const columnHelper = createColumnHelper<Lead>();

export const Table = () => {
  const { setSelectedLead } = useCRMStore();
  const [selectedRows, setSelectedRows] = useState<Lead[]>([]);

  const modalEditLead = useDisclosure();

  const [page, setPage] = useState(1);
  const {
    isLoading,
    error,
    data: dataFetch,
  } = useQuery({
    queryKey: ["leads", page],
    queryFn: () => leadsService.getLeads({ page }),
    keepPreviousData: true,
  });

  const totalPages = dataFetch?.data.totalPages || 1;
  const data = dataFetch?.data.leads || [];

  const columns = [
    columnHelper.accessor("name", {
      header: () => "Name",
      cell: (info) => (
        <Subtitle whiteSpace="nowrap">
          {formatPhone(info.renderValue() as string)}
        </Subtitle>
      ),
    }),
    columnHelper.accessor((row) => row.email, {
      id: "email",
      cell: (info) => (
        <Subtitle whiteSpace="nowrap">{info.getValue()}</Subtitle>
      ),
      header: () => "Email",
    }),
    columnHelper.accessor("phone", {
      header: () => "Phone",
      cell: (info) => (
        <Subtitle whiteSpace="nowrap">
          {formatPhone(info.renderValue() as string)}
        </Subtitle>
      ),
    }),
    columnHelper.accessor("message", {
      header: () => "Mensagem de Interesse",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("propertyId", {
      header: () => "Propriedade",
      cell: (info) => (
        <Box>
          <Link
            style={{
              textDecoration: "underline",
            }}
            to={`/imoveis/detalhes/${info.renderValue()}`}
          >
            <Subtitle whiteSpace="nowrap">Ver Propriedade</Subtitle>
          </Link>
        </Box>
      ),
    }),
    columnHelper.accessor("createdAt", {
      header: () => "Data",
      cell: (info) => (
        <Subtitle whiteSpace="nowrap">
          {formatDate(info.renderValue() as string)}
        </Subtitle>
      ),
    }),
    columnHelper.accessor("propertyId", {
      header: () => "Editar",
      cell: (info) => (
        <Tooltip label="Editar">
          <Button
            onClick={() => {
              setSelectedLead(info.row.original);
              modalEditLead.onOpen();
            }}
            colorScheme="gray"
          >
            <PencilSimple color="black" size={24} />
          </Button>
        </Tooltip>
      ),
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) return <LoadingContent />;
  if (!data.length) return <Subtitle>Nenhum dado encontrado</Subtitle>;

  const onNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const onPreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <>
      <ModalEditLead
        isOpen={modalEditLead.isOpen}
        onClose={modalEditLead.onClose}
      />
      <Flex flexDir="column" gap="12px">
        <Flex
          w="full"
          border="2px solid #C1C2C8"
          borderRadius="4px"
          position="relative"
          maxW="100%"
          h="full"
          overflow="auto"
        >
          <Flex w="full">
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                {table.getHeaderGroups().map((headerGroup, idx) => (
                  <Box
                    as="tr"
                    key={headerGroup.id + idx}
                    borderBottom="2px solid #C1C2C8"
                  >
                    {headerGroup.headers.map((header, idx) => (
                      <Box
                        as="th"
                        px="16px"
                        pr="8px"
                        py="16px"
                        fontWeight="medium"
                        textAlign="left"
                        alignItems="center"
                        key={header.id + idx}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </Box>
                    ))}
                  </Box>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row, idx) => (
                  <Box
                    as="tr"
                    key={row.id + idx}
                    borderBottom="1px solid #C1C2C8"
                    className="border-b"
                  >
                    {row.getVisibleCells().map((cell, idx) => (
                      <Box
                        as="td"
                        key={cell.id + idx}
                        px="16px"
                        pt="14px"
                        pb="18px"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Box>
                    ))}
                  </Box>
                ))}
              </tbody>
            </table>
          </Flex>
        </Flex>
        <Flex justify="space-between" align="center">
          <Tooltip label="Anterior">
            <Button
              isDisabled={page === 1}
              onClick={onPreviousPage}
              colorScheme="gray"
            >
              <ArrowLeft color="black" size={24} />
            </Button>
          </Tooltip>

          <Subtitle>
            Página {page} de {totalPages}
          </Subtitle>

          <Tooltip label="Próxima">
            <Button
              isDisabled={page === totalPages}
              onClick={onNextPage}
              colorScheme="gray"
            >
              <ArrowRight color="black" size={24} />
            </Button>
          </Tooltip>
        </Flex>
      </Flex>
    </>
  );
};
