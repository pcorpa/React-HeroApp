import { Link } from "react-router-dom";
import { filterCharacters } from "../helpers";
import type { Hero } from "../interfaces/Hero";
import type { JSX } from "react";

export const HeroCard = (hero: Hero): JSX.Element => {
  const heroImgUrl = `../../../assets/heroes/${hero.id}.jpg`;

  return (
    <div className="col animate__animated animate__zoomIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img
              src={heroImgUrl}
              className="card-img-top"
              alt={hero.superhero}
            ></img>
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{hero.superhero}</h5>
              <p className="card-text"> {hero.alter_ego}</p>
              <p className="card-text">{filterCharacters(hero)}</p>
              <p className="card-text">
                <small className="text-muted">{hero.first_appearance}</small>
              </p>
              <Link to={`/hero/${hero.id}`}>Mas...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
