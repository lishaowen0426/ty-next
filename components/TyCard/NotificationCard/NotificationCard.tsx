import classes from "./NotificationCard.module.css";
import { TyCard, TyCardProps, TyPaper, TyPaperProps } from "../TyCard";
import { useState, useEffect } from "react";
import {
  TyNotificationTableProps,
  TyNotificationTable,
  Notification,
} from "@/components/TyTable/TyTable";

const mockNotification = new Array<Notification>(100)
  .fill({ title: "", sender: "", date: "", content: "" })
  .map((_, i) => {
    return i % 2
      ? {
          title: "提交作业aaaaaaaaaaaaaaaaaaaaaaaaaa: " + i,
          sender: "老师",
          date: "2023-11-1",
          content: "快交作业".repeat(256),
        }
      : {
          title: "参加活动: " + i,
          sender: "同学",
          date: "2023-11-2",
          content: "快出来玩".repeat(256),
        };
  });

const headers = ["主题", "发信人", "时间"];

export default function NotificationCard(props: TyPaperProps = {}) {
  return (
    <TyPaper {...props}>
      <TyNotificationTable
        headers={headers}
        initialRows={10}
        dataUpdater={(start, count) =>
          mockNotification.slice(start, count ? start + count : undefined)
        }
        striped
        stripedColor="var(--mantine-color-gray-3)"
      ></TyNotificationTable>
    </TyPaper>
  );
}
