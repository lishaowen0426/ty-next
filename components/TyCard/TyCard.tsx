import {
  Text,
  Card,
  CardProps,
  Paper,
  PaperProps,
  Stack,
  MantineTheme,
  useMantineTheme,
  Title,
} from "@mantine/core";
import classes from "./TyCard.module.css";
import { clsx } from "clsx";

export interface TyCardProps extends CardProps {
  title?: string;
}

export function TyCard({
  withBorder,
  p = "md",
  radius = "md",
  title,
  children,
  ...props
}: TyCardProps = {}) {
  return (
    <Card withBorder p={p} radius={radius} {...props} style={{}}>
      {title ? (
        <Text fz="xl" fw="600">
          {title}
        </Text>
      ) : undefined}
      <div style={{}}>{children}</div>
    </Card>
  );
}

export interface TyPaperProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
  key?: string;
}

export function TyPaper(props: TyPaperProps = {}) {
  const theme = useMantineTheme();
  const classNames = clsx(classes["container"], props.className);
  return (
    <div className={classNames} key={props.key}>
      {props.title ? (
        <Title
          size="1.17rem"
          style={{
            marginLeft: "0.5rem",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          {props.title}
        </Title>
      ) : undefined}
      <div className={classes["children"]}>{props.children}</div>
    </div>
  );
}
