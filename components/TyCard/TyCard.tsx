import { Text, Card, CardProps } from "@mantine/core";

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
    <Card withBorder p={p} radius={radius} {...props}>
      {title ? (
        <Text fz="xl" fw="600">
          {title}
        </Text>
      ) : undefined}
      {children}
    </Card>
  );
}
