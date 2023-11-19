import { TwoFA } from "tabler-icons-react";
import { Image } from "@mantine/core";

interface LogoProps {
  color?: string;
  size: string | number;
}
export default function Logo({ color = "blue", size }: LogoProps) {
  //return <TwoFA color={color} size={size} />;
  return (
    <Image src="/ty.png" alt="TY logo" fit="contain" h="100%" style={{}} />
  );
}
