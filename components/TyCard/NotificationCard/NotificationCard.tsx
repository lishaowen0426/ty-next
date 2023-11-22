import classes from "./NotificationCard.module.css";
import { TyCard, TyCardProps } from "../TyCard";
import { useState, useEffect } from "react";
import { TyTableProps, TyTable } from "@/components/TyTable/TyTable";

interface Notification {
  title: string;
  sender: string;
  time: string;
}

const headers = ["主题", "发信人", "时间"];

export default function NotificationCard(props: TyCardProps = {}) {
  return (
    <TyCard {...props}>
      <TyTable
        headers={headers}
        fixedRows={10}
        striped
        stripedColor="var(--mantine-color-gray-3)"
      ></TyTable>
    </TyCard>
  );
}
