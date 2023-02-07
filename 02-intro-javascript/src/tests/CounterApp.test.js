import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import CounterApp from "../CounterApp";

describe("Pruebas en <CounterApp/ >", () => {
	test("Debe de mostrar <CounterApp /> correctamente ", () => {
		const wrapper = shallow(<CounterApp value={0} />);

		expect(wrapper).toMatchSnapshot();
	});

	test("Debe de mostrar el valor por defecto enviado por props", () => {
		const wrapper = shallow(<CounterApp value={100} />);

		const ValorCountWrapper = wrapper.find('h2').text().trim();
		expect(ValorCountWrapper).toBe('100');
	});

	test("Debe de incrementar el valor en 1", () => {
		const wrapper = shallow(<CounterApp value={0} />);

		const button = wrapper.find('button').at(0);
		button.simulate('click');

		const ValorCountWrapper = wrapper.find('h2').text().trim();
		expect(ValorCountWrapper).toBe('1');
	});

	test("Debe de decrementar el valor en 1", () => {
		const wrapper = shallow(<CounterApp value={0} />);

		const button = wrapper.find('button').at(1);
		button.simulate('click');

		const ValorCountWrapper = wrapper.find('h2').text().trim();
		expect(ValorCountWrapper).toBe('0');
	});
	
	test('Debe de colocar el valor por defecto con el boton ', () => { 
		const wrapper = shallow(<CounterApp value={100} />);
		
		wrapper.find('button').at(0).simulate('click');
		wrapper.find('button').at(0).simulate('click');
		wrapper.find('button').at(1).simulate('click');

		const ValorCountWrapper = wrapper.find('h2').text().trim();
		expect(ValorCountWrapper).toBe('0');
		
		
	 })
});
