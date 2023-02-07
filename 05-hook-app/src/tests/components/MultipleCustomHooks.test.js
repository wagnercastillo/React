import React from "react";
import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../src/hooks/useFetch";
// import { useCounter } from "../../../hooks/useCounter";
jest.mock("../../../src/hooks/useFetch");

describe("Pruebas en <MultipleCustomHooks />", () => {
	// useCounter.mockReturnValue({
	// 	counter: 10,
	// 	increment: () => {},
	// });

	test("debe mostrarse correctamente", () => {
		useFetch.mockReturnValue({
			data: null,
			loading: true,
			error: null,
		});

		const wrapper = shallow(<MultipleCustomHooks />);
		expect(wrapper).toMatchSnapshot();
	});

	test("debe de monstrar la información", () => {
		useFetch.mockReturnValue({
			data: [{ author: "wagner", qoute: "hola" }],
			loading: true,
			error: null,
		});
		const wrapper = shallow(<MultipleCustomHooks />);
		expect(wrapper.find(".alert").exists()).toBe(true);
		// expect(wrapper.find(".mb-0").text().trim()).toBe("hola");
	});
});
