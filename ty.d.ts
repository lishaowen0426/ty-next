/// <reference types="react" />

interface UserInfoProps {
  avatarSrc: string;
  school: string;
  name: string;
  [propName: string]: any;
}

interface ProgressCardProps {
  style?: React.CSSProperties;
  className?: string;
}

interface UserButtonProps {
  label: string;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  style?: React.CSSProperties;
}
