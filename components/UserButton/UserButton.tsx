import {
  Button,
  Group,
  Avatar,
  Text,
  rem,
  ButtonProps,
  GroupProps,
} from "@mantine/core";
import classes from "@/components/UserButton/UserButton.module.css";
import { ArrowBadgeLeft, ArrowBadgeRight } from "tabler-icons-react";

export default function UserButton({ label, ...props }: UserButtonProps) {
  return (
    <Button variant="default" {...props}>
      {label}
    </Button>
  );
}

export interface PageButtonProps extends GroupProps {
  prevLabel: string;
  prevIcon?: React.ReactNode;
  nextLabel: string;
  nextIcon?: React.ReactNode;

  onPrevEvent?: React.ReactEventHandler;
  onNextEvent?: React.ReactEventHandler;
}

export function PageButton({
  prevLabel,
  prevIcon = <ArrowBadgeLeft />,
  nextLabel,
  nextIcon = <ArrowBadgeRight />,
  onPrevEvent,
  onNextEvent,
  ...props
}: PageButtonProps) {
  const SingleButton = ({
    label,
    leftIcon,
    rightIcon,
    onClick,
  }: {
    label: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }) => (
    <Button
      leftSection={leftIcon}
      rightSection={rightIcon}
      variant="default"
      style={{}}
      onClick={onClick}
    >
      {label}
    </Button>
  );

  return (
    <Group
      grow
      style={{
        flexWrap: "nowrap",
        boxSizing: "border-box",
        justifyContent: "space-between",
      }}
      {...props}
    >
      <SingleButton
        label={prevLabel}
        leftIcon={prevIcon}
        onClick={onPrevEvent}
      />
      <SingleButton
        label={nextLabel}
        rightIcon={nextIcon}
        onClick={onNextEvent}
      />
    </Group>
  );
}
