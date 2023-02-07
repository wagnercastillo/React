import shallow from 'enzyme/shallow';
import React from 'react';

import GifExpertApp from "../GifExpertApp";

describe("Pruebas en el componente <GifExpertApp />", () => {
	
    test("Debe mostrar correctamente el componente", () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar una lista de categorias', () => { 

        const categories = ['One Punch', 'Samurai X'];
        const wrapper = shallow(<GifExpertApp defaultCategorias={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);



     })

});
