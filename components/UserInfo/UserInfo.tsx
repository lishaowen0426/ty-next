import classes from "./UserInfo.module.css";
import { Group, Avatar, Text } from "@mantine/core";

export default function UserInfo({
  avatarSrc,
  school,
  name,
  ...props
}: UserInfoProps) {
  return (
    <Group wrap="nowrap" {...props}>
      <Avatar className={classes.info} src={avatarSrc} size={90} radius="md" />
      <div>
        <Text fz="xs" fw={700} c="dimmed" className={classes.name}>
          {school}
        </Text>

        <Text fz="md" fw={500} className={classes.name} mt="xs">
          {name}
        </Text>
      </div>
    </Group>
  );
}
