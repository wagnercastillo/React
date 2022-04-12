import { mount } from "enzyme";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { HeroScreen } from "../../../components/hero/HeroScreen";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useNavigate: () => mockNavigate,
}));

describe("Pruebas en <HeroScreen />", () => {
	const wrapper = mount(
		<MemoryRouter initialEntries={["/hero"]}>
			<Routes>
				<Route path="/hero" element={<HeroScreen />} />
				<Route path="/" element={<h1>No Hero Page</h1>} />
			</Routes>
		</MemoryRouter>
	);
	test("no debe de mostrar el HeroScreen si no hay un héroe en el Url", () => {
		// expect(wrapper.find('h1').text().trim()).toBe("No Hero Page");
		console.log(wrapper.html());
	});

	test("debe de mostrar un hero si el parámetro existe y se encuentra", () => {});
});
