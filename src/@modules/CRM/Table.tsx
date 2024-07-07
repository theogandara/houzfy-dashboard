import { Box, Button, Checkbox, Flex } from "@chakra-ui/react";
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
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

type Lead = {
  leadId: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyId: string;
  createdAt: string;
};
const columnHelper = createColumnHelper<Lead>();

export const Table = () => {
  const [selectedRows, setSelectedRows] = useState<Lead[]>([]);

  const [page, setPage] = useState(1);
  const {
    isLoading,
    error,
    data: dataFetch,
  } = useQuery(["leads", page], () => leadsService.getLeads());

  const totalPages = dataFetch?.data.totalPages || 1;
  const data = dataFetch?.data.leads || [];

  const columns = [
    columnHelper.accessor("leadId", {
      header: () => (
        <Checkbox
          mt="4px"
          isChecked={selectedRows.length === data.length}
          onChange={() =>
            setSelectedRows(selectedRows.length === data.length ? [] : data)
          }
        />
      ),
      cell: (info) => (
        <Checkbox
          mt="4px"
          isChecked={selectedRows.includes(info.row.original)}
          onChange={() =>
            setSelectedRows(
              selectedRows.includes(info.row.original)
                ? selectedRows.filter((row) => row !== info.row.original)
                : [...selectedRows, info.row.original]
            )
          }
        />
      ),
    }),
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
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) return <Subtitle>Loading...</Subtitle>;

  if (!data.length) return <Subtitle>Nenhum dado encontrado</Subtitle>;

  return (
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
              {table.getHeaderGroups().map((headerGroup) => (
                <Box
                  as="tr"
                  key={headerGroup.id}
                  borderBottom="2px solid #C1C2C8"
                >
                  {headerGroup.headers.map((header) => (
                    <Box
                      as="th"
                      px="16px"
                      pr="8px"
                      py="16px"
                      fontWeight="medium"
                      textAlign="left"
                      alignItems="center"
                      key={header.id}
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
              {table.getRowModel().rows.map((row) => (
                <Box
                  as="tr"
                  key={row.id}
                  borderBottom="1px solid #C1C2C8"
                  className="border-b"
                >
                  {row.getVisibleCells().map((cell) => (
                    <Box as="td" key={cell.id} px="16px" pt="14px" pb="18px">
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
        <Flex></Flex>
      </Flex>
      <Flex justify="space-between" align="center">
        <Button colorScheme="gray">
          <ArrowLeft color="black" size={24} />
        </Button>

        <Subtitle>
          Página {page} de {totalPages}
        </Subtitle>

        <Button colorScheme="gray">
          <ArrowRight color="black" size={24} />
        </Button>
      </Flex>
    </Flex>
  );
};
