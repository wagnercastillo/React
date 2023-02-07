import React from "react";
import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe("Pruebas en <HookApp />", () => {
	test("Debe mostrar correctamente el hook app", () => {
		const wrapper = shallow(<HookApp />);
		expect(wrapper).toMatchSnapshot();
	});
});
