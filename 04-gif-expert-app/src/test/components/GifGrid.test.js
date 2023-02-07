import React from "react";
import "@testing-library/jest-dom";
import shallow from "enzyme/shallow";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en el componente <GifGrid />", () => {
	const categoria = "One Punch";

	test("debe de mostrar el componente correctamente", () => {
		useFetchGifs.mockReturnValue({
			data: [],
			loading: true,
		});

		const wrapper = shallow(<GifGrid categoria={categoria} />);
		expect(wrapper).toMatchSnapshot();
	});

	test("debe de mostrar items cuando se cargan imágenes useFetchGifs", () => {
		const gifs = [
			{
				id: "ABC",
				url: "https://localhost/cualquiercosa.jpg",
				title: "Cualquier cosa",
			},
			{
				id: "123",
				url: "https://localhost/cualquiercosa.jpg",
				title: "Cualquier cosa",
			},
		];

		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false,
		});

		const wrapper = shallow(<GifGrid categoria={categoria} />);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find("p").exists()).toBe(false);
		expect(wrapper.find("GifGridtem").length).toBe(gifs.length);
	});
});
