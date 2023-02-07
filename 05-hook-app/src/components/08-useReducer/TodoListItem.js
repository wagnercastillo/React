import React from "react";

export const TodoListItem = ({ todo, i, handleDelete, handleToggle }) => {
	return (
		<li key={todo.id} className="list-group-item">
			<p
				className={`${todo.done && "complete"}`}
				onClick={() => {
					handleToggle(todo.id);
				}}
			>
				{i + 1}. {todo.desc}
			</p>
			<button
				onClick={() => {
					handleDelete(todo.id);
				}}
				className="btn btn-danger"
			>
				Borrar
			</button>
		</li>
	);
};
