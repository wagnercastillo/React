import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import PrimeraApp from "../PrimeraApp";

describe("Pruebas en <PrimeraApp/ >", () => {
	// test('Debe de mostrar el mensaje "Hola, soy goku" ', () => {
	// 	const saludo = "Hola, soy goku";
	// 	const { getByText } = render(<PrimeraApp saludo={saludo} />);
	// 	expect(getByText(saludo)).toBeInTheDocument();
	// });

	test("Debe de mostrar <PrimeraApp /> correctamente ", () => {
		const saludo = "Hola, soy goku";
		const wrapper = shallow(<PrimeraApp saludo={saludo} />);

		expect(wrapper).toMatchSnapshot();
	});

	test("Debe de mostrar el subtitulo enviado por props", () => {
		const saludo = "Hola, soy goku";
		const subtitulo = "Soy un subtitulo";
		const wrapper = shallow(
			
            <PrimeraApp saludo={saludo} subtitulo={subtitulo}
            
            />
		);
        
        const textoParrafo = wrapper.find("p").text();
        expect(textoParrafo).toBe(subtitulo);
	});
});
