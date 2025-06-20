import { HeroList } from "../components/HeroList";

export const Marvel = () => {
  return (
    <>
      <h1 className="my-4">Marvel Page</h1>
      <HeroList publisher="Marvel Comics" />
    </>
  );
};
