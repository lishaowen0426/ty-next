import classes from "./NotificationCard.module.css";
import { TyCard, TyCardProps } from "../TyCard";
import { useState, useEffect } from "react";
import { TyTableProps, TyTable } from "@/components/TyTable/TyTable";

interface Notification {
  title?: string;
  sender?: string;
  date?: string;
}

const mockNotification = new Array<Notification>(100).fill({}).map((_, i) => {
  return i % 2
    ? { title: "提交作业: " + i, sender: "老师", date: "2023-11-1" }
    : { title: "参加活动: " + i, sender: "同学", date: "2023-11-2" };
});

const headers = ["主题", "发信人", "时间"];

export default function NotificationCard(props: TyCardProps = {}) {
  return (
    <TyCard {...props}>
      <TyTable<Notification>
        headers={headers}
        initialRows={10}
        dataUpdater={(start, count) =>
          mockNotification.slice(start, count ? start + count : undefined)
        }
        striped
        stripedColor="var(--mantine-color-gray-3)"
      ></TyTable>
    </TyCard>
  );
}
