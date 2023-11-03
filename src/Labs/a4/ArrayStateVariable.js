import React, { useState } from "react";
function ArrayStateVariable() {
	const [array, setArray] = useState([1, 2, 3, 4, 5]);
	const addElement = () => {
		setArray([...array, Math.floor(Math.random() * 100)]);
	};
	const deleteElement = (index) => {
		setArray(array.filter((item, i) => i !== index));
	};
	return (
		<div>
			<h2>Array State Variable</h2>
			<button onClick={addElement} className="btn btn-success">
				Add Element
			</button>
			<div className="list-group w-25">
				{array.map((item, index) => (
					<div className="list-group-item d-flex" key={index}>
						{item}
						<button onClick={() => deleteElement(index)} className="btn btn-danger ms-auto">
							Delete
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
export default ArrayStateVariable;