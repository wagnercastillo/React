import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategorias }) => {
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		
		if (inputValue.trim().length > 2) {
			setCategorias((categorias) => [inputValue, ...categorias]);
			setInputValue('');
		}
	};
	return (
		<form onSubmit={handleSubmit}>
			<p>{inputValue}</p>
			<input 
				type="text"
				value={inputValue}
				onChange={handleInputChange} 
			/>
		</form>
	);
};

AddCategory.defaultProps = {
	setCategorias: { setCategorias: ["One Punch", "Samurai X", "Dragon Ball"] },
};

AddCategory.propTypes = {
	setCategorias: PropTypes.func.isRequired,
};
