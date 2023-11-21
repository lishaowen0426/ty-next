import { Card, CardProps } from "@mantine/core";

export default function TyCard({
  withBorder = true,
  p = "md",
  radius = "md",
  ...props
}: CardProps) {
  return <Card withBorder p={p} radius={radius} {...props}></Card>;
}
