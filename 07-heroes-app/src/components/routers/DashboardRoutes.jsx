import { Routes, Route } from "react-router-dom";

import { DcScreen } from "../dc/DcScreen";
import { MarvelScreen } from "../marvel/MarvelScreen";
import { SearchScreen } from "../search/SearchScreen";
import { HeroScreen } from "../hero/HeroScreen";

import { Navbar } from "../ui/NavBar";

export const DashboardRoutes = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path="marvel" element={<MarvelScreen />} />
					<Route path="dc" element={<DcScreen />} />
					<Route path="hero/:heroeId" element={<HeroScreen />} />
					<Route path="search" element={<SearchScreen />} />

					<Route path="/" element={<MarvelScreen />} />
				</Routes>
			</div>
		</>
	);
};
