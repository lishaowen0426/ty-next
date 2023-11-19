"use client";

import { Group } from "@mantine/core";
import Logo from "./logo";
import { ScrollArea } from "@mantine/core";
import { Home, Book, Abc, Cash, Affiliate, Scooter } from "tabler-icons-react";
import UserButton from "@/components/UserButton/UserButton";
import LinkGroup from "@/components/LinkGroup/LinkGroup";
import classes from "./Dashboard.module.css";
import NaviHeader from "@/components/NaviHeader/NaviHeader";
import CSS from "csstype";

const NaviItems = [
  {
    label: "我的",
    icon: Home,
    initiallyOpened: true,
    link: "/",
    children: [
      { label: "钱包", link: "/" },
      { label: "朋友", link: "/" },
    ],
  },
  { label: "课程", initiallyOpened: false, icon: Book, link: "/" },
  { label: "考试", initiallyOpened: false, icon: Abc, link: "/" },
];

const Dashboard = () => {
  return (
    <div className={classes.dashboard}>
      <div className={classes.header} style={{ gridColumn: 1, gridRow: "1/3" }}>
        <Logo size="100px" />
      </div>
      <Navi style={{ gridColumn: 1, gridRow: "3/20" }} />
      <NaviHeader style={{ gridColumn: "2 / 20", gridRow: "1/3" }} />
    </div>
  );
};

interface NaviProps {
  style?: React.CSSProperties;
}

const Navi = (props: NaviProps) => {
  const links = NaviItems.map((item) => (
    <LinkGroup {...item} key={item.label} />
  ));
  return (
    <nav className={classes.navi} {...props}>
      <ScrollArea className={classes.link}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>
    </nav>
  );
};

export default Dashboard;
