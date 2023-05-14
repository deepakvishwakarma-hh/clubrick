import { useForm } from "@mantine/form";
// import "dayjs/locale/ru";
import {
  Checkbox,
  TextInput,
  Button,
  Box,
  PasswordInput,
  Overlay,
  Loader,
  Select,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { Flex, Text, UnstyledButton } from "@mantine/core";

import { useState } from 'react'

import Link from "next/link";
import { registration_Schema } from "../schemas/registration_schema";
import { type COUNTRIES_INTERFACE } from "../types/country";
import { api } from "~/utils/api";
import { notifications } from "@mantine/notifications";
import { loginUserClientSide } from "../services/login_user";



export default function RegistrationForm({ countries }: COUNTRIES_INTERFACE) {
  const [isLoading, setLoading] = useState(false)

  const style = {
    label: {
      margin: "1rem 0rem .5rem 0rem",
    },
  };
  const { mutate, data, error } = api.auth.register.useMutation();

  const form = useForm({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      country: "",
      gdpr: false,
      birthday: new Date(),
    },


    // functions will be used to validate values at corresponding key
    validate: registration_Schema,
  });
  console.log(form.errors);

  return (
    <Box>
      <form
        onSubmit={form.onSubmit(() => {
          setLoading(true)
          void mutate(form.values, {
            onError(error) {
              setLoading(false)
              notifications.show({ message: error?.message, color: "red" });
              console.error("Mutation failed:", error?.message);
            },
            onSuccess(data) {
              void loginUserClientSide({
                identifier: data.user.email as string,
                password: data.password,
                path:"/started"
              });
              console.log(data);
              setLoading(false)
            },
          });
        })}


      >

        <TextInput
          styles={style}
          size={"md"}
          label="Username"
          placeholder="Username"
          {...form.getInputProps("username")}
        />
        <TextInput
          styles={style}
          size={"md"}
          label="Email"
          placeholder="Email address"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          styles={style}
          size={"md"}
          label="Password"
          placeholder="Password"
          {...form.getInputProps("password")}
        />

        <PasswordInput
          styles={style}
          size={"md"}
          label="Confirm password"
          placeholder="Confirm password"
          {...form.getInputProps("confirmPassword")}
        />

        <DateInput
          styles={style}
          size={"md"}
          dateParser={(input) => {
            if (input === "WW2") {
              return new Date(1939, 8, 1);
            }
            return new Date(input);
          }}
          valueFormat="DD/MM/YYYY"
          label="Birthday"
          placeholder="Birthday"
          {...form.getInputProps("birthday")}
        />
        <Select
          searchable
          clearable
          styles={style}
          size={"md"}
          label="Country"
          placeholder="Country"
          data={countries}
          {...form.getInputProps("country")}
        />

        <Flex mt={20} mb={20}>
          <Checkbox
            mr={20}
            styles={style}
            size={"md"}
            {...form.getInputProps("gdpr", { type: "checkbox" })}
          />

          <Text size={"sm"} weight={400}>
            {" "}
            By creating your account, you agree to our{" "}
            <Link className="px-1 text-c_primary font-semibold" href="/legals/twippie-Terms-and-Conditions-en">
              Terms of Use
            </Link>{" "}
            &{" "}
            <Link className="px-1 text-c_primary font-semibold" href="/legals/twippie-Privacy-Policy-sul-Trattamento-dei-Dati-en">
              Privacy Policy
            </Link>{" "}
          </Text>
        </Flex>

        <Box my={10} >

          <Link href="/login" className="block mb-2 ">
            <UnstyledButton className="text-c_primary font-[400] text-c_sm">Already have an account</UnstyledButton>
          </Link>

        </Box>
        <Button
          loading={isLoading}
          type="submit"
          w={"full"}
          mt={10}
          size="md"
          variant="white"
          className="w-full bg-c_lightpurple hover:bg-c_primary text-white"
        >
          Submit
        </Button>
      </form>

    </Box>
  );
}

