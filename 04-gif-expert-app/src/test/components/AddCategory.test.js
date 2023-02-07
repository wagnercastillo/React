import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
	const setCategorias = jest.fn();
	let wrapper = shallow(<AddCategory setCategorias={setCategorias} />);

	beforeEach(() => {
		jest.clearAllMocks();
		wrapper = shallow(<AddCategory setCategorias={setCategorias} />);
	});

	test("debe de mostrarse correctamente />", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("debe e cambiar la caja de texto", () => {
		const input = wrapper.find("input");
		const value = "Hola Mundo";

		input.simulate("change", { target: { value } });

		expect(wrapper.find("p").text().trim()).toBe(value);
	});

	test("No debe de postear la información sumit ", () => {
		wrapper.find("form").simulate("submit", { preventDefault() {} });

		expect(setCategorias).not.toHaveBeenCalled();
	});

	test("debe de llamar el setCategorias y limpiar la caja de texto", () => {
		const value = "Hola Mundo";

		wrapper.find("input").simulate("change", { target: { value } });

		expect(wrapper.find("p").text().trim()).toBe(value);

		wrapper.find("form").simulate("submit", { preventDefault() {} });

		expect(setCategorias).toHaveBeenCalled();
		expect(setCategorias).toHaveBeenCalledTimes(1);
		expect(setCategorias).toHaveBeenCalledWith(expect.any(Function));

		expect(wrapper.find("input").prop("value")).toBe("");
	});
});
