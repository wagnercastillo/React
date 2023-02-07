import React, { useEffect, useState } from "react";

export const Message = () => {
	const [coords, setcoords] = useState({ x: 0, y: 0 });
	const { x, y } = coords;

	useEffect(() => {
		const mouseMove = (e) => {
			const coods = { x: e.x, y: e.y };
			setcoords(coods);
		};

		window.addEventListener("mousemove", mouseMove);

		return () => {  
			window.removeEventListener("mousemove", mouseMove);
		};
	}, []);

	return (
		<>
			<h2>Eres genial!</h2>
			<p>
				x:{x} y:{y}
			</p>
		</>
	);
};
