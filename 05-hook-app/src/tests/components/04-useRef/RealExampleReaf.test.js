import React from "react";
import { shallow } from "enzyme";
import { RealExampleReaf } from "../../../components/04-useRef/RealExampleReaf";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";

describe("Pruebas en <RealExampleReaf />", () => {
	const wrapper = shallow(<RealExampleReaf />);

	test("debe de mostrarse correctamente", () => {
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find("MultipleCustomHooks").exists()).toBe(false);
	});

	test("debe de mostrar el componente <MultipleCustomHooks />", () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
	});
});
