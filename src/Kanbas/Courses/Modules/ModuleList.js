import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaCaretDown, FaCheckCircle, FaEllipsisV, FaGripVertical, FaPlus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./modulesReducer";

function ModuleList() {
	const { courseId } = useParams();
	const modules = useSelector((state) => state.modulesReducer.modules);
	const module = useSelector((state) => state.modulesReducer.module);
	const dispatch = useDispatch();

	return (
		<ul className="list-group">
			<li className="list-group-item d-flex">
				<form className="w-50">
					<input
						value={module.name}
						className="form-control "
						onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
					/>
					<textarea
						value={module.description}
						className="form-control mt-1"
						onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
					/>
				</form>
				<div className="ms-auto h-25">
					<button className="btn btn-primary" onClick={() => dispatch(updateModule(module))}>
						Update
					</button>
					<button
						className="btn btn-success "
						onClick={() => dispatch(addModule({ ...module, course: courseId }))}
					>
						Add
					</button>
				</div>
			</li>

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
								<button
									className="btn btn-danger"
									onClick={() => dispatch(deleteModule(module._id))}
								>
									Delete
								</button>
								<button className="btn btn-success" onClick={() => dispatch(setModule(module))}>
									Edit
								</button>
							</div>
						</div>
					</div>
				))}
		</ul>
	);
}
export default ModuleList;

