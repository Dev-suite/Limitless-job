import {
  Button,
  Container,
  Divider,
  FileInput,
  Paper,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";

function Job() {
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      resume: null,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const submitHandler = (apply) => {
    console.log(apply);

    //
    fetch("http://localhost:8080/apply/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(apply),
    }).then(() => {
      console.log("Candidate added to database");
      alert("You have successfully applied for this job");
    });
  };

  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Job Application Form
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Please fill out the form below to submit your job application
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form
          onSubmit={form.onSubmit((values) => submitHandler(values))}
          className="flex flex-col gap-4"
        >
          <TextInput
            label="First name"
            placeholder="John"
            required
            {...form.getInputProps("firstName")}
          />
          <TextInput
            label="Last name"
            placeholder="Doe"
            required
            {...form.getInputProps("lastName")}
          />
          <TextInput
            label="Email"
            placeholder="email@limitlessOpportunities.com"
            required
            type="email"
            {...form.getInputProps("email")}
          />
          <TextInput
            label="phone number"
            placeholder="phone number"
            required
            {...form.getInputProps("phoneNumber")}
          />
          <FileInput
            placeholder="Choose a file"
            label="Your resume"
            withAsterisk
            required
            {...form.getInputProps("resume")}
          />

          <Button fullWidth mt="sm" className="bg-[#1c7ed6]" type="submit">
            Apply
          </Button>
          <Divider />

          <p className="text-center">
            <span>
              OR{" "}
              <a
                href="https://example.com"
                className="text-center text-[#1c7ed6] hover:underline underline-offset-4"
              >
                login
              </a>
            </span>
          </p>
        </form>
      </Paper>
    </Container>
  );
}

export default Job;
