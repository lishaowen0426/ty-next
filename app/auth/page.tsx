"use client";
import classes from "./Auth.module.css";
import {
  Paper,
  Button,
  Modal,
  Group,
  Divider,
  PaperProps,
  Text,
  rem,
  Title,
  ButtonProps,
  Stack,
  TextInput,
  Checkbox,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";

const WechatButton = (props: ButtonProps) => {
  const Icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 7.159 7.156"
    >
      <path
        d="M4.062.98C3.318.56 2.39.496 1.6.786c-.526.19-1.002.54-1.296 1.02-.267.432-.367.97-.238 1.466.13.55.51 1.01.973 1.317l-.254.762.874-.466c.352.113.722.167 1.09.155a1.88 1.88 0 0 1-.075-.881 1.88 1.88 0 0 1 .597-1.06c.514-.482 1.244-.685 1.938-.636C5.07 1.827 4.623 1.29 4.062.98zM2.068 2.133c-.052.25-.386.37-.58.202-.226-.16-.163-.556.103-.635.26-.1.556.164.478.433zm1.807-.072c.002.287-.38.466-.595.27a.37.37 0 0 1 .102-.629c.234-.092.51.105.493.358z"
        fill="#9de60b"
      />
      <path
        d="M7.022 3.8c-.182-.41-.524-.737-.922-.94a2.54 2.54 0 0 0-2.275.008c-.487.25-.893.697-1.008 1.242-.095.4-.01.832.203 1.182.317.525.888.86 1.483.967.43.088.876.036 1.294-.086.25.098.475.255.718.372l-.2-.626c.272-.194.52-.436.67-.74.222-.423.235-.946.04-1.38zm-2.444.157c-.062.194-.345.253-.48.105-.15-.137-.092-.423.105-.484.22-.092.472.16.376.38zm1.43.027c-.075.175-.337.215-.466.08-.063-.056-.078-.142-.103-.218.034-.136.124-.278.28-.284.214-.03.402.23.3.422z"
        fill="#2e3233"
      />
    </svg>
  );

  return (
    <Button variant="default" leftSection={Icon} {...props}>
      {props.children}
    </Button>
  );
};

function LoginPaper(props: PaperProps) {
  const form = useForm({
    initialValues: {
      phone: "",
      password: "",
    },
  });

  return (
    <Paper>
      <Group
        mb="md"
        grow
        style={{
          justifyContent: "center",
        }}
      >
        <WechatButton style={{ flexGrow: 0, flexBasis: "60%" }}>
          使用微信登陆
        </WechatButton>
      </Group>

      <Divider label="或者使用手机登陆" labelPosition="center" my="lg" />
      <form>
        <Stack>
          <TextInput
            label="手机"
            required
            {...form.getInputProps("phone")}
            radius="md"
          />
          <TextInput
            label="密码"
            required
            {...form.getInputProps("password")}
            radius="md"
          />

          <Button>登陆</Button>
        </Stack>
      </form>
    </Paper>
  );
}
function RegistrationPaper(props: PaperProps) {
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      termOfService: false,
    },
  });

  return (
    <Paper>
      <Group
        mb="md"
        grow
        style={{
          justifyContent: "center",
        }}
      >
        <WechatButton style={{ flexGrow: 0, flexBasis: "60%" }}>
          使用微信注册
        </WechatButton>
      </Group>

      <Divider label="或者使用手机注册" labelPosition="center" my="lg" />
      <form>
        <Stack>
          <Group justify="space-between">
            <TextInput
              label="姓"
              required
              {...form.getInputProps("lastName")}
              radius="md"
            />
            <TextInput
              label="名"
              required
              {...form.getInputProps("firstName")}
              radius="md"
            />
          </Group>
          <TextInput
            label="邮箱"
            placeholder="example@mail.com"
            required
            {...form.getInputProps("email")}
            radius="md"
          />
          <TextInput
            label="手机"
            required
            {...form.getInputProps("phone")}
            radius="md"
          />
          <TextInput
            label="密码"
            required
            {...form.getInputProps("password")}
            radius="md"
          />
          <Checkbox
            label="同意条款"
            mt="sm"
            size="md"
            {...form.getInputProps("termOfService", { type: "checkbox" })}
            styles={{}}
          />
          <Button>注册</Button>
        </Stack>
      </form>
    </Paper>
  );
}

export default function Auth() {
  const [regOpened, { open: setRegOpen, close: setRegClose }] =
    useDisclosure(false);
  const [loginOpened, { open: setLoginOpen, close: setLoginClose }] =
    useDisclosure(false);

  return (
    <>
      <div className={`${classes["modal"]} ${classes["reg"]}`}>
        <Modal
          opened={regOpened}
          onClose={setRegClose}
          title={<Title order={3}>注册</Title>}
          styles={{
            header: {},
          }}
        >
          <RegistrationPaper />
        </Modal>

        <Button
          onClick={setRegOpen}
          variant="default"
          classNames={{
            root: classes["button"],
          }}
        >
          注册
        </Button>
      </div>
      <div className={`${classes["modal"]} ${classes["login"]}`}>
        <Modal
          opened={loginOpened}
          onClose={setLoginClose}
          title={<Title order={3}>登陆</Title>}
        >
          <LoginPaper />
        </Modal>

        <Button
          onClick={setLoginOpen}
          variant="default"
          classNames={{
            root: classes["button"],
          }}
        >
          登陆
        </Button>
      </div>
    </>
  );
}
