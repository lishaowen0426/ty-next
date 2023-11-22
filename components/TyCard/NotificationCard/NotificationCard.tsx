import classes from "./NotificationCard.module.css";
import { TyCard, TyCardProps } from "../TyCard";
import { useState, useEffect } from "react";
import { Table } from "@mantine/core";

interface Notification {
  title: string;
  sender: string;
  time: string;
}

export default function NotificationCard(props: TyCardProps = {}) {
  return <TyCard {...props}></TyCard>;
}
