import { Navigate, useNavigate, useParams } from "react-router-dom";
import { filterCharacters, getHeroesById } from "../helpers";
import type { Hero } from "../interfaces/Hero";

export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(-1);
  };

  if (!id) {
    return <Navigate to={"/marvel"} />;
  }

  const hero: Hero = getHeroesById(id);
  console.log(filterCharacters(hero));

  if (!hero) {
    return <Navigate to={"/marvel"} />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          className="img-thumbnail"
          src={`../../../assets/heroes/${id}.jpg`}
          alt={hero.superhero}
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush ">
          <li className="list-group-item">
            <b>Alter ego: </b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance: </b>
            {hero.first_appearance}
          </li>
        </ul>
        {filterCharacters(hero).length > 0 && (
          <>
            <h5 className="mt-5">Characters: </h5>
            <p>{filterCharacters(hero)}</p>
          </>
        )}

        <button onClick={onGoBack} className="btn btn-outline-info mt-5">
          Go back
        </button>
      </div>
    </div>
  );
};
