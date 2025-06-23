import { useNavigate } from "react-router-dom";
import { type JSX } from "react";
import { SearchList } from "../components";
import { useForm, useSearch } from "../../hooks";

export const Search = (): JSX.Element => {
  const navigate = useNavigate();
  const { query, heros } = useSearch();
  const { formState, onInputChange, onResetForm } = useForm<string>(query);

  const showMessage = query.length === 0;
  const showError = query.length > 0 && heros.length === 0;

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (formState.trim().length < 1) onResetForm();

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
              type="text"
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
        <SearchList
          heros={heros}
          query={query}
          showError={showError}
          showMessage={showMessage}
        />
      </div>
    </>
  );
};
