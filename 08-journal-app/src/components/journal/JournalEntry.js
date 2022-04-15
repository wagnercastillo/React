import React from "react";

export const JournalEntry = () => {
	return (
		<div>
			<div className="journal__entry pointer">
				<div
					className="journal__entry-picture"
					style={{
						backgroundSize: "cover",
						backgroundImage: `url(https://picsum.photos/200/300?random=${Math.random()})`,
					}}
				></div>

				<div className="journal__entry-body">
					<p className="journal__entry-title">Un nuevo día</p>
					<p className="journal__entry-content">
						Lorem ipsum es el texto que se usa habitualmente en diseño gráfico
						en demostraciones 
					</p>
				</div>
				<div className="journal__entry-date-box">
					<span>Monday</span>
					<h4>28</h4>
				</div>
			</div>
		</div>
	);
};
