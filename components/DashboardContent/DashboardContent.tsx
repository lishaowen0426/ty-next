import classes from "./DashboardContent.module.css";
import ProgressCard from "../TyCard/ProgressCard/ProgressCard";
import NotificationCard from "../TyCard/NotificationCard/NotificationCard";
import { Group, Stack } from "@mantine/core";
import { TyPaper } from "../TyCard/TyCard";

const UpperRowCardList = [
  <ProgressCard
    key={"progress"}
    className={classes["first-row"]}
    style={{}}
    title="学习进度"
  />,
  <ProgressCard className={classes["first-row"]} style={{}} />,
  <ProgressCard className={classes["first-row"]} style={{}} />,
];
const LowerRowCardList = [
  <TyPaper title={"学习"} className={classes["second-row"]} />,
  <NotificationCard
    key={"notification"}
    className={classes["second-row"]}
    title="通知"
  />,
];

export const UserContent = () => {
  return (
    <>
      <Group
        className={classes["content-row"]}
        mt="md"
        ml="md"
        mr="md"
        mb="sm"
        style={{
          height: "40%",
        }}
      >
        {UpperRowCardList}
      </Group>
      <Group
        className={classes["content-row"]}
        mb="md"
        ml="md"
        mr="md"
        style={{
          height: "55%",
        }}
      >
        {LowerRowCardList}
      </Group>
    </>
  );
};
