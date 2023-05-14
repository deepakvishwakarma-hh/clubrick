import Link from "next/link";
import { useState } from 'react'
import { useForm } from "@mantine/form";
import { loginUserClientSide } from "../services/login_user";
import { login_form_schema } from "../schemas/login_form_schema";
import { Box, Button, PasswordInput, TextInput, Flex, Text, Checkbox, UnstyledButton } from "@mantine/core";

export default function LoginForm() {
  const [isLoading, setLoading] = useState(false)
  const form = useForm({
    initialValues: {
      username: "",

      password: "",
    },

    validate: login_form_schema,
  });

  const style = {
    root: {
    },
    label: {
      margin: "1rem 0rem .5rem 0rem",
    },
  };

  return (
    <Box mb={10}  >
      <form
        onSubmit={form.onSubmit(() => {
          setLoading(true)
          void loginUserClientSide({
            identifier: form.values.username,
            password: form.values.password,
          }).then(() => {
            setLoading(false)
          })
        })}
      >
        <TextInput
          styles={style}
          size={"md"}
          className="!font-light"
          label="Username"
          {...form.getInputProps("username")}
        />

        <PasswordInput
          styles={style}
          size={"md"}
          label="Password"
          {...form.getInputProps("password")}
        />

        <div className="my-2.5 flex md:items-center gap-y-2 justify-between md:flex-row flex-col">
          <Flex >
            <Checkbox
              mr={5}
              styles={style}
              size={"sm"}
              {...form.getInputProps("gdpr", { type: "checkbox" })}
            />

            <Text size={"sm"} weight={400}>
              Remember Me
            </Text>
          </Flex>

          <Link href="/auth/forgot" className="block">
            <UnstyledButton className="text-c_primary font-[400] text-c_sm">Forgot my password</UnstyledButton>
          </Link>

        </div>


        <Box my={5} >

          <Link href="/register" className="block mb-2 ">
            <UnstyledButton className="text-c_primary font-[400] text-c_sm">Register</UnstyledButton>
          </Link>

        </Box>

        <Button
          type="submit"
          w={"full"}
          mt={5}
          size="md"
          variant="white"
          className="w-full bg-c_lightpurple hover:bg-c_primary text-white"
          loading={isLoading}
        >
          Submit
        </Button>
        <Text size={'xs'} mt={5} py={20}>
          Don&apos;t you have an account? Register Now! it&apos;s really simple and you can start enjoying all the benefits!
        </Text>

      </form>
    </Box>
  );
}
