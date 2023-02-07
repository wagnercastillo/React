import React from "react";
import { shallow } from "enzyme";
import { GifGridtem } from "../../components/GifGridtem";

describe("Pruebas en <GifGrid />", () => {

	const title = "Titulo de prueba";
	const url = "https://localhost/algo.jpg";

	const wrapper = shallow(<GifGridtem title={title} url={url} />);

	test("Debe de mostrar el componente correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("Debe de tener un parrafo con title", () => {
		const p = wrapper.find("p");
		expect(p.text().trim()).toBe(title);
	});

	test("Debe de tener la imagen igual al url y alt de los props", () => {
		const img = wrapper.find("img");
		expect(img.prop("src")).toBe(url);
		expect(img.prop("alt")).toBe(title);
	});

	test("Debe de tener animate__fadeIn", () => {
		const div = wrapper.find("div");
		expect(div.hasClass("animate__animated")).toBe(true);

	});
});
