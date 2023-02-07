import React from "react";
import PropTypes from "prop-types";

export const GifGridtem = ({ id, title, url }) => {
	return (
		<div className="card animate__animated animate__bounce animate__delay-2s">
			<img src={url} alt={title} />
			<p>{title}</p>
		</div>
	);
};

GifGridtem.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};
