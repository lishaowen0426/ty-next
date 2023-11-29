import classes from "./TyTable.module.css";
import {
  Table,
  TableProps,
  Group,
  Card,
  Select,
  Menu,
  ActionIcon,
  Paper,
  Text,
  Button,
  ButtonProps,
} from "@mantine/core";
import { useState, useEffect } from "react";
import { PageButton } from "../UserButton/UserButton";
import { Trash, Eye, DotsVertical } from "tabler-icons-react";

const rowCountData = [10, 20, 50];

export interface Notification {
  title: string;
  sender: string;
  date: string;
  content: string;
}

export interface TyNotificationTableProps extends TableProps {
  headers: string[];
  dataUpdater: (start: number, count?: number) => Notification[];
  initialRows?: number;
}

const MessageCard = ({ text }: { text: string }) => {
  return (
    <Card className={classes["message"]}>
      <Text>{text}</Text>
    </Card>
  );
};

interface TyNotificationTableActionProps
  extends React.ComponentPropsWithoutRef<"button"> {
  id: string;
  onPreviewClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onDeleteClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const NotificationAction = (props: TyNotificationTableActionProps) => {
  return (
    <Menu withinPortal position="bottom-end" shadow="sm">
      <Menu.Target>
        <ActionIcon variant="subtle" color="gray">
          <DotsVertical size={18} />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          leftSection={<Eye size={18} />}
          id={props.id && props.id.toString()}
          onClick={props.onPreviewClick}
        >
          展开
        </Menu.Item>
        <Menu.Item
          leftSection={<Trash size={18} />}
          id={props.id && props.id.toString()}
          onClick={props.onDeleteClick}
          color="red"
        >
          删除
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export function TyNotificationTable(props: TyNotificationTableProps) {
  const [data, setData] = useState<Notification[]>([]);
  const [page, setPage] = useState(0);
  const [rowCount, setRowCount] = useState(
    props.initialRows || rowCountData[0]
  );
  const [totalRows, setTotalRows] = useState(0);
  const [rowState, setRowState] = useState<boolean[]>([]);

  useEffect(() => {}, []);

  useEffect(() => {
    setData((_) => props.dataUpdater(page * rowCount, rowCount));
  }, [page, rowCount]);

  const headers = props.headers.map((h) => <Table.Th>{h}</Table.Th>);
  headers.push(<Table.Th></Table.Th>);

  let rows = new Array(rowCount).fill(
    <Table.Tr>
      <Table.Td colSpan={props.headers.length} />
    </Table.Tr>
  );

  const onPreviewClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    let id = parseInt((event.currentTarget as Element).id);
    const state = [...rowState];
    state[id] = state[id] ?? false;

    state[id] = !state[id];
    console.log(id);
    console.log(state);

    setRowState(state);
  };
  const onDeleteClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    let id = (event.currentTarget as Element).id;
    console.log(id);
  };

  data.forEach((v, i) => {
    rows[i] = (
      <>
        <Table.Tr id={i.toString()}>
          {Object.entries(v).map(([_, v], index) =>
            index != 3 ? (
              <Table.Td>
                <Text truncate="end">{v}</Text>
              </Table.Td>
            ) : (
              <Table.Td>
                <NotificationAction
                  id={i.toString()}
                  onPreviewClick={onPreviewClick}
                  onDeleteClick={onDeleteClick}
                />
              </Table.Td>
            )
          )}
        </Table.Tr>
        {rowState[i] && <MessageCard text={v.content} />}
      </>
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
