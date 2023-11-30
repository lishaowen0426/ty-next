import { chdir } from "process";
import classes from "./Auth.module.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={classes["paper"]}>
      {children}
      <div className={classes["ocean"]}>
        <div className={classes["wave"]} />
        <div className={`${classes["wave"]} ${classes["wave2"]}`} />
      </div>
    </div>
  );
}
