describe("Pruebas en el archivo test.js", () => {
	test("deben ser iguales", () => {
		// 1. Inicialización
		const mensaje1 = "Hola";

		// 2. Estímulo
		const mensaje2 = "Hola";

		// 3. Obervación del resultado
		expect(mensaje1).toBe(mensaje2);
	});
});
