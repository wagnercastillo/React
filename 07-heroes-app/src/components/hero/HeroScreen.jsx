import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroesById";

export const HeroScreen = () => {
	const { heroeId } = useParams();

	const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

	const { id, superhero, publisher, alter_ego, first_appearance, characters } =
		hero;

	const imagePath = `/assets/heroes/${id}.jpg`;

	const navigate = useNavigate();

	if (!hero) {
		return <Navigate to="/" />;
	}

	const handleReturn = () => {
		navigate(-1);
	};

	return (
		<div className="row mt-5 animate__animated animate__fadeIn">
			<div className="col-4">
				<img
					src={imagePath}
					alt={superhero}
					className="img-thumbnail animate__animated animate__fadeIn"
				/>
			</div>
			<div className="col-8">
				<h3>{superhero}</h3>
				<ul className="list-group list-group">
					<li className="list-group-item">
						<b>Alter Ego: </b> {alter_ego}
					</li>
					<li className="list-group-item">
						<b>Publisher: </b> {publisher}
					</li>
					<li className="list-group-item">
						<b>Firt Appearance: </b> {first_appearance}
					</li>
				</ul>

				<h5 className=" mt-4">Characters</h5>
				<p> {characters}</p>

				<button className="btn btn-outline-info" onClick={handleReturn}>
					Regresar
				</button>
			</div>
		</div>
	);
};
