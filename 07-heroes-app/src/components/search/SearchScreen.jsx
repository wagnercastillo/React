import { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";

import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";
import { useForm } from "../hooks/useForm";

export const SearchScreen = () => {
	
	const navigate = useNavigate();
	const location = useLocation();
	const { q = "" } = queryString.parse(location.search);
	const [values, handleInputChange] = useForm({
		searchText: q,
	});
	const { searchText } = values;
	const heroesFitered = useMemo(() => getHeroesByName(q), [q]);

	const handleSearch = (e) => {
		e.preventDefault();
		navigate(`?q=${searchText}`);
	};

	return (
		<div>
			<h1>Búsquedas</h1>
			<hr />

			<div className="row">
				<div className="col-5">
					<h4>Buscar</h4>
					<hr />

					<form onSubmit={handleSearch}>
						<input
							type="text"
							placeholder="Buscar un Heroe"
							className="form-control"
							name="searchText"
							autoComplete="off"
							value={searchText}
							onChange={handleInputChange}
						/>
						<button
							className="btn btn-outline-primary mt-1 btn-block"
							type="submit"
						>
							Buscar...
						</button>
					</form>
				</div>
				<div className="col-7">
					<h4>Resultados</h4>
					<hr />

					{q === "" ? (
						<div className="alert alert-info"> Buscar un héroe</div>
					) : (
						heroesFitered.length === 0 && (
							<div className="alert alert-danger"> No hay resutados: {q}</div>
						)
					)}

					{heroesFitered.map((heroe) => (
						<HeroCard key={heroe.id} {...heroe} />
					))}
				</div>
			</div>
		</div>
	);
};
