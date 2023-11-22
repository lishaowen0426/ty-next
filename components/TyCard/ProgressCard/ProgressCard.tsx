import classes from "./ProgressCard.module.css";
import { Text, Card, RingProgress, Group, Button } from "@mantine/core";
import UserButton from "../../UserButton/UserButton";
import { ArrowBadgeRight, AlignRight } from "tabler-icons-react";
import { TyCard, TyCardProps } from "../TyCard";

interface Progress {
  label: string;
  value: number;
}

const progressItems = [
  { label: "已完成", value: 128 },
  { label: "待学习", value: 32 },
];

export default function ProgressCard(props: TyCardProps = {}) {
  const completed = progressItems[0].value;
  const total = progressItems[1].value + completed;
  const labels = progressItems.map((item: Progress) => {
    return (
      <div key={item.label}>
        <Text style={{ fontWeight: 700 }} size="lg">
          {item.value}
        </Text>
        <Text style={{}} size="md">
          {item.label}
        </Text>
      </div>
    );
  });

  return (
    <TyCard {...props}>
      <Group
        style={{
          justifyContent: "space-between",
          margin: "var(--mantine-spacing-lg)",
        }}
      >
        <div>
          <div>
            <Text style={{ fontWeight: 700 }} size="lg">
              JAVA
            </Text>
            <Text style={{}} size="md">
              科目
            </Text>
          </div>
          {labels}
        </div>
        <RingProgress
          roundCaps
          thickness={6}
          sections={[{ value: (completed / total) * 100, color: "blue" }]}
          label={
            <div>
              <Text ta="center" fz="lg">
                {((completed / total) * 100).toFixed(0)}%
              </Text>
              <Text ta="center" fz="xs" c="dimmed">
                完成
              </Text>
            </div>
          }
        ></RingProgress>
      </Group>
      <Group>
        <UserButton label="继续学习" rightSection={<ArrowBadgeRight />} />
        <UserButton label="切换科目" rightSection={<AlignRight />} />
      </Group>
    </TyCard>
  );
}
