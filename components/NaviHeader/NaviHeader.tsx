import { Autocomplete, Group, Burger, rem } from "@mantine/core";
import classes from "./NaviHeader.module.css";
import { Search } from "tabler-icons-react";

const HeaderItems = [
  { label: "升学", link: "/" },
  { label: "就业", link: "/" },
  { label: "服务", link: "/" },
];

export default function NaviHeader(props: { style?: React.CSSProperties }) {
  const items = HeaderItems.map((item) => (
    <a
      key={item.label}
      href={item.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {item.label}
    </a>
  ));

  return (
    <Group className={classes.header} {...props}>
      {items}
      <Autocomplete
        placeholder="搜索"
        data={["React", "JAVA", "Go"]}
        leftSection={<Search strokeWidth={1.5} />}
      />
    </Group>
  );
}
