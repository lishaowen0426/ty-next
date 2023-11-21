"use client";

import { Group, Stack, Grid } from "@mantine/core";
import Logo from "./logo";
import { ScrollArea } from "@mantine/core";
import { Home, Book, Abc, Cash, Affiliate, Scooter } from "tabler-icons-react";
import UserButton from "@/components/UserButton/UserButton";
import LinkGroup from "@/components/LinkGroup/LinkGroup";
import classes from "./Dashboard.module.css";
import NaviHeader from "@/components/NaviHeader/NaviHeader";
import UserInfo from "@/components/UserInfo/UserInfo";
import CSS from "csstype";
import { UserContent } from "@/components/DashboardContent/DashboardContent";

const NaviItems = [
  {
    label: "我的",
    icon: Home,
    initiallyOpened: true,
    link: "/",
  },
  { label: "知识检索", initiallyOpened: false, icon: Book, link: "/" },
  {
    label: "自主学习",
    initiallyOpened: false,
    icon: Abc,
    link: "/",
    children: [
      { label: "学习路径", link: "/" },
      { label: "考试", link: "/" },
    ],
  },
  { label: "作业", initiallyOpened: false, icon: Abc, link: "/" },
];

const mockUser: UserInfoProps = {
  avatarSrc:
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
  school: "立石大学",
  name: "小王",
};
const Dashboard = () => {
  return (
    <div className={classes.dashboard}>
      <div className={classes.header} style={{ gridColumn: 1, gridRow: "1/3" }}>
        <Logo size="100px" />
      </div>
      <Navi style={{ gridColumn: 1, gridRow: "3/20" }} />
      <NaviHeader style={{ gridColumn: "2 / 6", gridRow: "1/3" }} />
      <div key="content" style={{ gridColumn: "2/6", gridRow: "3/21" }}>
        <UserContent />
      </div>
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
    <Stack justify="space-between" {...props} className={classes.bar}>
      <nav className={classes.navi}>
        <ScrollArea className={classes.link}>
          <div className={classes.linksInner}>{links}</div>
        </ScrollArea>
      </nav>
      <UserInfo {...mockUser} />
    </Stack>
  );
};

export default Dashboard;
