import React from "react";

import Animation from "@/components/atoms/Animation";
import Container from "@/components/atoms/Container";
import Navbar from "@/components/organisms/Navbar";
import Hero from "@/components/atoms/Hero";

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
        {/* <Hero className="flex items-center justify-between">
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
        </Hero> */}
      </header>
    </Container>
  );
}
