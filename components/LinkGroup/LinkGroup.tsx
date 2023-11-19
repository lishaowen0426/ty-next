import classes from "./LinkGroup.module.css";
import { useState } from "react";
import {
  Group,
  Text,
  UnstyledButton,
  Box,
  ThemeIcon,
  Collapse,
  rem,
} from "@mantine/core";
import { ChevronRight } from "tabler-icons-react";

interface LinkGroupProps {
  label: string;
  icon: React.FC<any>;
  link: string;
  initiallyOpened?: boolean;
  children?: { label: string }[];
}

export default function LinkGroup({
  label,
  icon: Icon,
  link,
  initiallyOpened,
  children,
}: LinkGroupProps) {
  const hasChildren = Array.isArray(children);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const childLinks = (hasChildren ? children : []).map((c) => (
    <Text
      component="a"
      href={link}
      key={c.label}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {c.label}
    </Text>
  ));

  return (
    <div>
      <UnstyledButton
        className={classes.button}
        onClick={() => setOpened((o) => !o)}
      >
        <Group justify="space-between">
          <Box style={{ display: "flex", alignItems: "center" }}>
            <ThemeIcon variant="light" size={30}>
              <Icon style={{ width: rem(18), height: rem(18) }} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          {hasChildren && (
            <ChevronRight
              className={classes.chevron}
              style={{
                width: rem(16),
                height: rem(16),
                transform: opened ? "rotate(-90deg)" : "none",
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasChildren && <Collapse in={opened}>{childLinks}</Collapse>}
    </div>
  );
}
