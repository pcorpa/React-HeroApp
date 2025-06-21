import type { JSX } from "react";
import { useForm } from "../../hooks";
import { HeroCard } from "../components";
import { heroes } from "../data/Heroes";
import type { Hero } from "../interfaces/Hero";
import { useLocation, useNavigate } from "react-router-dom";

export const Search = (): JSX.Element => {
  const { formState, onInputChange } = useForm<string>("");
  const navigate = useNavigate();
  const location = useLocation();

  const filteredHeros = (name: string): Hero =>
    heroes.filter((hero) => hero.superhero === name)[0];

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (formState.trim().length < 1) return;

    navigate(`?q=${formState.toLocaleLowerCase().trim()}`);
  };

  return (
    <>
      <h1 className="my-4">Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSubmit}>
            <input
              type=""
              placeholder="Search for a hero"
              value={formState}
              onChange={(event) => onInputChange(event.target.value)}
              className="form-control"
              name="formState"
              autoComplete="off"
            />
            <button className="btn btn-primary mt-3 ">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results:</h4>
          <hr />
          <div>
            {filteredHeros(formState) ? (
              <HeroCard {...filteredHeros(formState)} />
            ) : (
              <div className="alert alert-danger">There's no results</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
