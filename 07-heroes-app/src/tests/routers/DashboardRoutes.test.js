import { mount } from "enzyme";
import { DashboardRoutes } from "../../components/routers/DashboardRoutes";
import { AuthContext } from "../../auth/authContext";
import { MemoryRouter } from "react-router-dom";

describe("Prueba en <DasboardRoutes />", () => {
	const contextValue = {
		user: {
			logged: true,
			name: "Wagner",
		},
	};

	test("debe de mostrar el componente de marvel si está autenticado ", () => {
		const wrapper = mount(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter initialEntries={ ['/'] }>
					<DashboardRoutes />
				</MemoryRouter>
			</AuthContext.Provider>
		);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find(".text-info").text().trim()).toBe("Wagner");
	});

	test("debe de mostrar el componente de dc  ", () => {
		const wrapper = mount(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter initialEntries={ ['/dc'] }>
					<DashboardRoutes />
				</MemoryRouter>
			</AuthContext.Provider>
		);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('h1').text().trim()).toBe("DcScreen");
	
	});

});
