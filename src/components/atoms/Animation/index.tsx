import React from "react";

import Lottie from "react-lottie";

type Props = {
  loop: boolean;
  autoplay: boolean;
  animationData: any;
  rendererSettings: {
    preserveAspectRatio: string;
  };

  width: number;
  height: number;

  isStopped?: boolean;
  isPaused?: boolean;
};

export default function Animation({
  loop,
  autoplay,
  animationData,
  rendererSettings,
  width,
  height,
  isPaused = false,
  isStopped = false,
}: Props) {
  return (
    <Lottie
      options={{
        loop,
        autoplay,
        animationData,
        rendererSettings,
      }}
      width={width}
      height={height}
      isPaused={isPaused}
      isStopped={isStopped}
    />
  );
}
