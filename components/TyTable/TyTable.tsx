import classes from "./TyTable.module.css";
import { Table, TableProps, Group, Select, Stack } from "@mantine/core";
import { useState, useEffect } from "react";
import { PageButton } from "../UserButton/UserButton";

const rowCountData = [10, 20, 50];

export interface TyTableProps<ItemType> extends TableProps {
  headers: string[];
  dataUpdater: (start: number, count?: number) => ItemType[];
  initialRows?: number;
}

export function TyTable<ItemType extends object>(
  props: TyTableProps<ItemType>
) {
  const [data, setData] = useState<ItemType[]>([]);
  const [page, setPage] = useState(0);
  const [rowCount, setRowCount] = useState(
    props.initialRows || rowCountData[0]
  );
  const [totalRows, setTotalRows] = useState(0);

  useEffect(() => {}, []);

  useEffect(() => {
    setData((_) => props.dataUpdater(page * rowCount, rowCount));
  }, [page, rowCount]);

  const headers = props.headers.map((h) => <Table.Th>{h}</Table.Th>);

  let rows = new Array(rowCount).fill(
    <Table.Tr>
      <Table.Td colSpan={props.headers.length} />
    </Table.Tr>
  );

  data.forEach((v, i) => {
    rows[i] = (
      <Table.Tr>
        {Object.entries(v).map(([_, v], index) => (
          <Table.Td>{v}</Table.Td>
        ))}
      </Table.Tr>
    );
  });

  const Pagination = (props: any) => (
    <Group
      style={{
        flexWrap: "nowrap",
        width: "100%",
        justifyContent: "flex-end",
      }}
      {...props}
    >
      <Select
        placeholder="数量"
        data={rowCountData.map((r) => r.toString())}
        style={{
          width: "5rem",
        }}
        onChange={(c: string | null) => c && setRowCount(parseInt(c))}
      />
      <PageButton
        prevLabel="上一页"
        nextLabel="下一页"
        onPrevEvent={(e) => {
          if (page > 0) {
            setPage((p) => p - 1);
          }
        }}
        onNextEvent={(e) => {
          setPage((p) => p + 1);
        }}
      />
    </Group>
  );

  return (
    <>
      <Table {...props} className={classes["table"]}>
        <Table.Thead>
          <Table.Tr key="header">{headers}</Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      <Pagination className={classes["page"]} />
    </>
  );
}
