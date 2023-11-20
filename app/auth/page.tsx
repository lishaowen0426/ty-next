import classes from "./Auth.module.css";
import { useForm } from "@mantine/form";
import { Paper } from "@mantine/core";

const Register = () => {};
const Login = () => {
  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },
  });
};

export default function Auth() {
  return <Paper radius="md" p="xl" withBorder className={classes.paper} />;
}
