import ModuleList from "../Modules/ModuleList";
import {
  FaArrowAltCircleRight,
  FaBan,
  FaBell,
  FaBullhorn,
  FaBullseye,
  FaCalendarAlt,
  FaChartBar,
  FaCheck,
  FaCheckCircle,
  FaCircle,
  FaEllipsisV,
  FaFileImport,
  FaPlus,
  FaTimes,
} from "react-icons/fa";
import "./index.css";

function Home() {
  return (
    <div>
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-light btn-outline-secondary btn-outline-secondary text-nowrap m-1"
        >
          Collapse All
        </button>
        <button
          type="button"
          className="btn btn-light btn-outline-secondary btn-outline-secondary text-nowrap m-1"
        >
          View Progress
        </button>
        <div className="dropdown m-1">
          <button
            className="btn btn-light btn-outline-secondary btn-outline-secondary dropdown-toggle d-flex align-items-center"
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
        <button
          type="button"
          className="btn btn-danger m-1 d-flex align-items-center"
        >
          <FaPlus />
          Module
        </button>
        <button
          type="button"
          className="btn btn-light btn-outline-secondary btn-outline-secondary m-1"
        >
          <FaEllipsisV />
        </button>
      </div>
      <hr />
      <div className="row">
        <div className="col-9 col-md-12 col-lg-9">
          <ModuleList />
        </div>
        <div className="col-3 d-none d-md-block">
          <div className="pt-3">
            <button
              type="button"
              className="btn btn-light btn-outline-secondary text-nowrap w-100 text-start mb-1"
            >
              <span className="pe-2">
                <FaFileImport />
              </span>
              Import Existing Content
            </button>
            <button
              type="button"
              className="btn btn-light btn-outline-secondary text-nowrap w-100 text-start mb-1"
            >
              <span className="pe-2">
                <FaArrowAltCircleRight />
              </span>
              Import from Commons
            </button>
            <button
              type="button"
              className="btn btn-light btn-outline-secondary text-nowrap w-100 text-start mb-1"
            >
              <span className="pe-2">
                <FaBullseye />
              </span>
              Choose Home Page
            </button>
            <button
              type="button"
              className="btn btn-light btn-outline-secondary text-nowrap w-100 text-start mb-1"
            >
              <span className="pe-2">
                <FaChartBar />
              </span>
              View Course Stream
            </button>
            <button
              type="button"
              className="btn btn-light btn-outline-secondary text-nowrap w-100 text-start mb-1"
            >
              <span className="pe-2">
                <FaBullhorn />
              </span>
              New Announcement
            </button>
            <button
              type="button"
              className="btn btn-light btn-outline-secondary text-nowrap w-100 text-start mb-1"
            >
              <span className="pe-2">
                <FaChartBar />
              </span>
              New Analytics
            </button>
            <button
              type="button"
              className="btn btn-light btn-outline-secondary text-nowrap w-100 text-start mb-1"
            >
              <span className="pe-2">
                <FaBell />
              </span>
              View Course Notifications
            </button>
          </div>
          <div className="mt-3">
            <p className="fw-bold">To Do</p>
            <hr />
            <div className="d-flex">
              <span className="text-danger px-1">
                <FaCircle />
              </span>
              <div>
                <p className="course-item-title">Grade A1 - ENV + HTML</p>
                <small className="text-muted text-truncate pt-0">
                  100 points &#x2022; Sep 18 a 11:59pm
                </small>
              </div>
              <span className="text-secondary fa-xs">
                <FaTimes />
              </span>
            </div>
          </div>
          <div className="mt-3">
            <div className="d-flex justify-content-between pb-0 text-nowrap">
              <p className="fw-bold">Coming Up</p>
              <div className="d-flex align-items-baseline">
                <span className="text-secondary pe-1">
                  <FaCalendarAlt />
                </span>
                <p className="fw-bold text-danger fs-6">View Calendar</p>
              </div>
            </div>
            <hr className="mt-0" />
            <div className="d-flex mb-2">
              <span className="text-secondary px-1">
                <FaCalendarAlt />
              </span>
              <div>
                <p className="course-item-title">Lecture</p>
                <small className="text-muted text-truncate pt-0">
                  CS4550.12631.202410 <br />
                  Sep 11 at 11:45am
                </small>
              </div>
            </div>
            <div className="d-flex mb-2">
              <span className="text-secondary px-1">
                <FaCalendarAlt />
              </span>
              <div>
                <p className="course-item-title">CS5610 06 SP23 Lecture</p>
                <small className="text-muted text-truncate pt-0">
                  CS4550.12631.202410 <br />
                  Sep 11 at 6pm
                </small>
              </div>
            </div>
            <div className="d-flex mb-2">
              <span className="text-secondary px-1">
                <FaCalendarAlt />
              </span>
              <div>
                <p className="course-item-title">
                  CS5610 Web Development Summer 1 2023 - LECTURE
                </p>
                <small className="text-muted text-truncate pt-0">
                  CS4550.12631.202410 <br />
                  Sep 11 at 7pm
                </small>
              </div>
            </div>
            <div className="more-courses-items">
              12 more in the next week...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
