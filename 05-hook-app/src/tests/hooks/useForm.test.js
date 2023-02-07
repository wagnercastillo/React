import React from "react";
import { shallow } from "enzyme";
import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("Pruebas en <UseForm />", () => {
	const initialForm = {
		name: "wagner",
		email: "wagner.castillo@unl.edu.ec",
	};

	test("debe de regresar un formulario por defecto", () => {
		const { result } = renderHook(() => useForm(initialForm));
		const [values, handleInputChange, reset] = result.current;

		expect(values).toEqual(initialForm);
		expect(typeof handleInputChange).toBe("function");
		expect(typeof reset).toBe("function");
	});

	test("debe de cambiar el valor del formulario (cambiar name)", () => {
		const { result } = renderHook(() => useForm(initialForm));
		const [, handleInputChange] = result.current;

		act(() => {
			handleInputChange({ target: { name: "name", value: "wagner2" } });
		});

		const [values] = result.current;
		expect(values).toEqual({ ...initialForm, name: "wagner2" });
	});

	test("debe de reestablecer el formulario con RESET", () => {
		const { result } = renderHook(() => useForm(initialForm));
		const [, handleInputChange, reset] = result.current;

		act(() => {
			handleInputChange({ target: { name: "name", value: "wagner2" } });
			reset();
		});

		const [values] = result.current;
		expect(values).toEqual(initialForm);
	});
});
