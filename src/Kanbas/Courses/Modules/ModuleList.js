import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaCaretDown, FaCheckCircle, FaEllipsisV, FaGripVertical, FaPlus } from "react-icons/fa";

function ModuleList() {
	const { courseId } = useParams();
	const modules = db.modules;
	return (
		<ul className="list-group">
			{modules
				.filter((module) => module.course === courseId)
				.map((module, index) => (
					<div className="list-group pt-2 modules">
						<div className="list-group-item list-group-item-dark mt-3 d-flex flex-row align-items-center">
							<FaGripVertical />
							<FaCaretDown className="p-1" />
							<div className="d-flex justify-content-left flex-column">
								<b>{module.name}</b>
								{module.description}
							</div>
							<div className="ms-auto">
								<FaCheckCircle className="text-success" />
								<FaCaretDown />
								<FaPlus />
								<FaEllipsisV />
							</div>
						</div>
					</div>
				))}
		</ul>
	);
}
export default ModuleList;
