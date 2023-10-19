import { FaCheckCircle, FaEllipsisV, FaPlus } from "react-icons/fa";
import ModuleList from "./ModuleList";
function Modules() {
	return (
		<div>
			<div className="d-flex justify-content-end">
				<button type="button" className="btn btn-light btn-outline-secondary text-nowrap m-1">
					Collapse All
				</button>
				<button type="button" className="btn btn-light btn-outline-secondary text-nowrap m-1">
					View Progress
				</button>
				<div className="dropdown m-1">
					<button
						className="btn btn-light btn-outline-secondary dropdown-toggle d-flex align-items-center"
						type="button"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						<FaCheckCircle className="text-success" />
						Publish All
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li>Action</li>
						<li>Another action</li>
					</ul>
				</div>
				<button type="button" className="btn btn-danger m-1 d-flex align-items-center">
					<FaPlus />
					Module
				</button>
				<button type="button" className="btn btn-light btn-outline-secondary m-1">
					<FaEllipsisV />
				</button>
			</div>
			<hr />
			<ModuleList />
		</div>
	);
}
export default Modules;
