import React from "react";

import Animation from "@/components/atoms/Animation";
import Container from "@/components/atoms/Container";
import Navbar from "@/components/organisms/Navbar";
import Hero from "@/components/atoms/Hero";

import { FaChevronRight } from "react-icons/fa";
import { IAuthentication } from "@/@types/authentication.types";

import walletAnimation from "../../../../public/assets/animations/wallet.json";

interface Props {
  authenticationState: IAuthentication | any;
}

export default function HomeTemplate({ authenticationState }: Props) {
  const makeLogin = (event: React.FormEvent) => {
    event.preventDefault();
    authenticationState.signInMock();
  };

  return (
    <Container>
      <header className="w-full">
        <Navbar className="bg-purple-900" />
        <Hero className="flex items-center justify-between">
          <div>
            <Animation
              width={400}
              height={400}
              loop={true}
              autoplay={true}
              animationData={walletAnimation}
              rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
            />
          </div>
          <div className="w-72 h-fit bg-white rounded p-5">
            <h1 className="font-bold text-lg">Bem vindo novamente...</h1>
            <p className="text-xs mb-3">Por favor, insira seu e-mail e senha</p>

            <form onSubmit={makeLogin}>
              <input
                className="text-xs rounded p-1 px-2 border my-1 w-full"
                type="text"
                name="email"
                id="email"
                placeholder="E-mail"
              />
              <input
                className="text-xs rounded p-1 px-2 border my-1 w-full mb-3"
                type="password"
                name="password"
                id="password"
                placeholder="Senha"
              />
              <label
                htmlFor="agreeTermsOfUse"
                className="flex items-center flex-wrap text-xs mb-3"
              >
                <input
                  className="mr-1 text-purple-950 bg-purple-900"
                  type="checkbox"
                  name="agreeTermsOfUse"
                  id="agreeTermsOfUse"
                  placeholder="test"
                />
                Ao entrar, você concorda com os nossos{" "}
                <span className="underline">termos de uso</span>.
              </label>
              <button
                type="submit"
                className="flex items-center rounded px-4 py-2 bg-purple-950 text-white text-sm font-bold"
              >
                <span>Entrar</span>
                <FaChevronRight />
              </button>
            </form>
          </div>
        </Hero>
      </header>
    </Container>
  );
}
