import classes from "./TyTable.module.css";
import { Table, TableProps, Pagination } from "@mantine/core";
import { useState, useEffect } from "react";

export interface TyTableProps extends TableProps {
  headers: string[];
  fixedRows?: number;
}

export function TyTable<ItemType extends object>(props: TyTableProps) {
  const headers = props.headers.map((h) => <Table.Th>{h}</Table.Th>);
  const [data, setData] = useState<ItemType[]>([]);
  const [page, setPage] = useState(1);

  console.log(props.fixedRows);

  let rows = new Array(props.fixedRows || 0).fill(
    <Table.Tr>
      <Table.Td colSpan={3} />
    </Table.Tr>
  );
  console.log(rows.length);

  data.forEach((v, i) => {
    rows[i] = (
      <Table.Tr>
        {Object.entries(v).map((_, p) => (
          <Table.Td>{p}</Table.Td>
        ))}
      </Table.Tr>
    );
  });

  console.log(rows);

  return (
    <div>
      <Table {...props}>
        <Table.Thead>
          <Table.Tr key="header">{headers}</Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      <Pagination
        value={page}
        onChange={setPage}
        total={10}
        classNames={{
          root: classes["pagination"],
        }}
      />
    </div>
  );
}
