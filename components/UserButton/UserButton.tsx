import { Button, Group, Avatar, Text, rem, ButtonProps } from "@mantine/core";
import classes from "@/components/UserButton/UserButton.module.css";

export default function UserButton({ label, ...props }: UserButtonProps) {
  return (
    <Button variant="default" {...props}>
      {label}
    </Button>
  );
}
