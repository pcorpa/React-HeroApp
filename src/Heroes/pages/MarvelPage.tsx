import type { JSX } from "react";
import { HeroList } from "../components/HeroList";

export const Marvel = (): JSX.Element => {
  return (
    <>
      <h1 className="my-4">Marvel Page</h1>
      <HeroList publisher="Marvel Comics" />
    </>
  );
};
