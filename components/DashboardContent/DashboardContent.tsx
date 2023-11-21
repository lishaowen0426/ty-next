import classes from "./DashboardContent.module.css";
import ProgressCard from "../TyCard/ProgressCard/ProgressCard";
import { Group, Stack } from "@mantine/core";

const UpperRowCardList = [
  <ProgressCard key={"progress"} className={classes["first-row"]} style={{}} />,
  <ProgressCard className={classes["first-row"]} style={{}} />,
  <ProgressCard className={classes["first-row"]} style={{}} />,
];
const LowerRowCardList = [
  <ProgressCard className={classes["second-row"]} style={{}} />,
  <ProgressCard className={classes["second-row"]} style={{}} />,
];

export const UserContent = () => {
  return (
    <Stack
      justify="space-between"
      align="stretch"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Group className={classes["content-row"]} mt="md" ml="md" mr="md">
        {UpperRowCardList}
      </Group>
      <Group className={classes["content-row"]} mb="md" ml="md" mr="md">
        {LowerRowCardList}
      </Group>
    </Stack>
  );
};
