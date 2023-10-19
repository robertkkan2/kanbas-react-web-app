import { FaEllipsisV, FaPlus } from "react-icons/fa";

const AssignHeader = () => (
	<>
		<div class="d-flex justify-content-between align-items-center">
			<div class="form-group w-25">
				<input type="text" class="form-control" placeholder="Search for Assignment" />
			</div>
			<div class="d-flex">
				<button type="button" class="btn btn-light btn-outline-secondary text-nowrap m-1">
					<FaPlus />
					Group
				</button>

				<button type="button" class="btn btn-danger m-1">
					<FaPlus />
					Assignment
				</button>

				<button type="button" class="btn btn-light btn-outline-secondary m-1">
					<FaEllipsisV />
				</button>
			</div>
		</div>
		<hr />
	</>
);

export default AssignHeader;