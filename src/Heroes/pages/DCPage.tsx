import type { JSX } from "react";
import { HeroList } from "../components/HeroList";

export const DC = (): JSX.Element => {
  return (
    <>
      <h1 className="my-4">DC Page</h1>
      <HeroList publisher="DC Comics" />
    </>
  );
};
