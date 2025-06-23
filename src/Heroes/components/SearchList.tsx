import React, { type JSX } from "react";
import type { Hero } from "../interfaces/Hero";
import { HeroCard } from "./HeroCard";

interface SearchListProps {
  heros: Hero[];
  query: string;
  showError: boolean;
  showMessage: boolean;
}

export const SearchList = ({
  heros,
  query,
  showError,
  showMessage,
}: SearchListProps): JSX.Element => {
  return (
    <div className="col-7">
      <h4>Results:</h4>
      <hr />
      <div>
        {heros &&
          heros.map((hero) => (
            <React.Fragment key={hero.id}>
              <HeroCard {...hero} />
              <hr />
            </React.Fragment>
          ))}

        <div
          className="alert alert-primary animate__animated animate__zoomIn"
          style={{ display: showMessage ? "" : "none" }}
        >
          Search for a hero
        </div>

        <div
          className="alert alert-danger animate__animated animate__zoomIn "
          style={{ display: showError ? "" : "none" }}
        >
          There's no results for <b>{query}</b>
        </div>
      </div>
    </div>
  );
};
