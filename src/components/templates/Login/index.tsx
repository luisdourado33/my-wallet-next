import React from "react";

import Container from "@/components/atoms/Container";
import LoginForm from "@/features/LoginForm";
import Brand from "@/components/atoms/Brand";

type Props = {};

export default function LoginTemplate({}: Props) {
  return (
    <Container className="flex w-full h-screen items-center justify-center flex-col">
      <Brand className="mb-5" />
      <LoginForm />
    </Container>
  );
}
