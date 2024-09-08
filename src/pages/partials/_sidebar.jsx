// Partial Sidebar for Dashboar

import { Link, NavLink } from "react-router-dom";
import _route from "../../constants/routes";


export default function _sidebar() {

	

	return (
    <div
      className="nk-sidebar nk-sidebar-fixed is-light pt-4"
      data-content="sidebarMenu"
    >
      <div className="nk-sidebar-element nk-sidebar-head  mb-3 justify-content-center">
        <div className="nk-sidebar-brand">
          <Link to={_route._admin_dashboard} className="logo-link nk-sidebar-logo">
            <img
              className="logo-dark logo-img"
              src="/assets/images/logo.svg"
              srcSet="/assets/images/logo.svg "
              alt="logo-dark"
            />
          </Link>
        </div>
      </div>
      {/* .nk-sidebar-element */}
      <div className="nk-sidebar-element">
        <div className="nk-sidebar-content">
          <div className="nk-sidebar-menu" data-simplebar="init">
            <div
              className="simplebar-wrapper"
              style={{ margin: "-16px 0px -40px" }}
            >
              <div className="simplebar-height-auto-observer-wrapper">
                <div className="simplebar-height-auto-observer" />
              </div>
              <div className="simplebar-mask">
                <div
                  className="simplebar-offset"
                  style={{ right: 0, bottom: 0 }}
                >
                  <div
                    className="simplebar-content-wrapper"
                    tabIndex={0}
                    role="region"
                    aria-label="scrollable content"
                    style={{ height: "100%", overflow: "scroll" }}
                  >
                    <div
                      className="simplebar-content"
                      style={{ padding: "16px 0px 40px" }}
                    >
                      <ul className="nk-menu">
						<NavLink to={_route._dashboard}  className={(isActive) => "nk-menu-item " + (isActive.isActive ? "active " : "")} >
							<span className="nk-menu-link">
								<span className="nk-menu-icon side-svg">
									<svg
										className="fill-inherit"
										width={24}
										height={25}
										viewBox="0 0 24 25"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M4.53988 2.1521H7.91988C9.32988 2.1521 10.4599 3.3021 10.4599 4.7131V8.1221C10.4599 9.5421 9.32988 10.6821 7.91988 10.6821H4.53988C3.13988 10.6821 1.99988 9.5421 1.99988 8.1221V4.7131C1.99988 3.3021 3.13988 2.1521 4.53988 2.1521ZM4.53988 13.6218H7.91988C9.32988 13.6218 10.4599 14.7628 10.4599 16.1828V19.5918C10.4599 21.0018 9.32988 22.1518 7.91988 22.1518H4.53988C3.13988 22.1518 1.99988 21.0018 1.99988 19.5918V16.1828C1.99988 14.7628 3.13988 13.6218 4.53988 13.6218ZM19.46 2.1521H16.08C14.67 2.1521 13.54 3.3021 13.54 4.7131V8.1221C13.54 9.5421 14.67 10.6821 16.08 10.6821H19.46C20.86 10.6821 22 9.5421 22 8.1221V4.7131C22 3.3021 20.86 2.1521 19.46 2.1521ZM16.08 13.6218H19.46C20.86 13.6218 22 14.7628 22 16.1828V19.5918C22 21.0018 20.86 22.1518 19.46 22.1518H16.08C14.67 22.1518 13.54 21.0018 13.54 19.5918V16.1828C13.54 14.7628 14.67 13.6218 16.08 13.6218Z"
										fill="inherit"
										/>
									</svg>
								</span>
								<span className="nk-menu-text">Dashboard</span>
							</span>
                        </NavLink>
                        {/* .nk-menu-item */}
						<NavLink to={_route._airtime}  className={(isActive) => "nk-menu-item " + (isActive.isActive ? "active " : "")} >
                          <span className="nk-menu-link">
                            <span className="nk-menu-icon side-svg">
                              <svg
                                className="fill-inherit"
                                width=" 24"
                                height={25}
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M19.0714 19.722C16.0152 22.7784 11.4898 23.4388 7.78642 21.7261C7.23971 21.506 6.79148 21.3281 6.36537 21.3281C5.17849 21.3351 3.70117 22.486 2.93336 21.7191C2.16555 20.9512 3.31726 19.4727 3.31726 18.2787C3.31726 17.8525 3.14642 17.4123 2.92632 16.8645C1.21283 13.1617 1.87411 8.63479 4.93026 5.57931C8.8316 1.67653 15.17 1.67653 19.0714 5.5783C22.9797 9.48711 22.9727 15.8202 19.0714 19.722Z"
                                  stroke="inherit"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M15.9394 13.0651H15.9484"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M11.9304 13.0651H11.9394"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M7.9214 13.0651H7.9304"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <span className="nk-menu-text">Airtime</span>
                          </span>
                        </NavLink>
                        {/* .nk-menu-item */}
						<NavLink to={_route._data}  className={(isActive) => "nk-menu-item " + (isActive.isActive ? "active " : "")} >
                          <span className="nk-menu-link">
                            <span className="nk-menu-icon side-svg">
                              <svg
                                className="fill-inherit"
                                width=" 24"
                                height={25}
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M19.0714 19.722C16.0152 22.7784 11.4898 23.4388 7.78642 21.7261C7.23971 21.506 6.79148 21.3281 6.36537 21.3281C5.17849 21.3351 3.70117 22.486 2.93336 21.7191C2.16555 20.9512 3.31726 19.4727 3.31726 18.2787C3.31726 17.8525 3.14642 17.4123 2.92632 16.8645C1.21283 13.1617 1.87411 8.63479 4.93026 5.57931C8.8316 1.67653 15.17 1.67653 19.0714 5.5783C22.9797 9.48711 22.9727 15.8202 19.0714 19.722Z"
                                  stroke="inherit"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M15.9394 13.0651H15.9484"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M11.9304 13.0651H11.9394"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M7.9214 13.0651H7.9304"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <span className="nk-menu-text">Data</span>
                          </span>
                        </NavLink>
                        {/* .nk-menu-item */}
						<NavLink to={_route._electricity}  className={(isActive) => "nk-menu-item " + (isActive.isActive ? "active " : "")} >
                          <span className="nk-menu-link">
                            <span className="nk-menu-icon side-svg">
                              <svg
                                className="fill-inherit"
                                width=" 24"
                                height={25}
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M19.0714 19.722C16.0152 22.7784 11.4898 23.4388 7.78642 21.7261C7.23971 21.506 6.79148 21.3281 6.36537 21.3281C5.17849 21.3351 3.70117 22.486 2.93336 21.7191C2.16555 20.9512 3.31726 19.4727 3.31726 18.2787C3.31726 17.8525 3.14642 17.4123 2.92632 16.8645C1.21283 13.1617 1.87411 8.63479 4.93026 5.57931C8.8316 1.67653 15.17 1.67653 19.0714 5.5783C22.9797 9.48711 22.9727 15.8202 19.0714 19.722Z"
                                  stroke="inherit"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M15.9394 13.0651H15.9484"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M11.9304 13.0651H11.9394"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M7.9214 13.0651H7.9304"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <span className="nk-menu-text">Electricity</span>
                          </span>
                        </NavLink>
                        {/* .nk-menu-item */}
						<NavLink to={_route._cable}  className={(isActive) => "nk-menu-item " + (isActive.isActive ? "active " : "")} >
                          <span className="nk-menu-link">
                            <span className="nk-menu-icon side-svg">
                              <svg
                                className="fill-inherit"
                                width=" 24"
                                height={25}
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M19.0714 19.722C16.0152 22.7784 11.4898 23.4388 7.78642 21.7261C7.23971 21.506 6.79148 21.3281 6.36537 21.3281C5.17849 21.3351 3.70117 22.486 2.93336 21.7191C2.16555 20.9512 3.31726 19.4727 3.31726 18.2787C3.31726 17.8525 3.14642 17.4123 2.92632 16.8645C1.21283 13.1617 1.87411 8.63479 4.93026 5.57931C8.8316 1.67653 15.17 1.67653 19.0714 5.5783C22.9797 9.48711 22.9727 15.8202 19.0714 19.722Z"
                                  stroke="inherit"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M15.9394 13.0651H15.9484"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M11.9304 13.0651H11.9394"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M7.9214 13.0651H7.9304"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <span className="nk-menu-text">Cable TV</span>
                          </span>
                        </NavLink>
                        {/* .nk-menu-item */}
						<NavLink to={_route._betting}  className={(isActive) => "nk-menu-item " + (isActive.isActive ? "active " : "")} >
                          <span className="nk-menu-link">
                            <span className="nk-menu-icon side-svg">
                              <svg
                                className="fill-inherit"
                                width=" 24"
                                height={25}
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M19.0714 19.722C16.0152 22.7784 11.4898 23.4388 7.78642 21.7261C7.23971 21.506 6.79148 21.3281 6.36537 21.3281C5.17849 21.3351 3.70117 22.486 2.93336 21.7191C2.16555 20.9512 3.31726 19.4727 3.31726 18.2787C3.31726 17.8525 3.14642 17.4123 2.92632 16.8645C1.21283 13.1617 1.87411 8.63479 4.93026 5.57931C8.8316 1.67653 15.17 1.67653 19.0714 5.5783C22.9797 9.48711 22.9727 15.8202 19.0714 19.722Z"
                                  stroke="inherit"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M15.9394 13.0651H15.9484"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M11.9304 13.0651H11.9394"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M7.9214 13.0651H7.9304"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <span className="nk-menu-text">Betting</span>
                          </span>
                        </NavLink>
                        {/* .nk-menu-item */}
						<NavLink to={_route._groceries}  className={(isActive) => "nk-menu-item " + (isActive.isActive ? "active " : "")} >
                          <span className="nk-menu-link">
                            <span className="nk-menu-icon side-svg">
                              <svg
                                className="fill-inherit"
                                width=" 24"
                                height={25}
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M19.0714 19.722C16.0152 22.7784 11.4898 23.4388 7.78642 21.7261C7.23971 21.506 6.79148 21.3281 6.36537 21.3281C5.17849 21.3351 3.70117 22.486 2.93336 21.7191C2.16555 20.9512 3.31726 19.4727 3.31726 18.2787C3.31726 17.8525 3.14642 17.4123 2.92632 16.8645C1.21283 13.1617 1.87411 8.63479 4.93026 5.57931C8.8316 1.67653 15.17 1.67653 19.0714 5.5783C22.9797 9.48711 22.9727 15.8202 19.0714 19.722Z"
                                  stroke="inherit"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M15.9394 13.0651H15.9484"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M11.9304 13.0651H11.9394"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M7.9214 13.0651H7.9304"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <span className="nk-menu-text">Groceries</span>
                          </span>
                        </NavLink>
                        {/* .nk-menu-item */}
						<NavLink to={_route._setting}  className={(isActive) => "nk-menu-item " + (isActive.isActive ? "active " : "")} >
                          <span className="nk-menu-link">
                            <span className="nk-menu-icon side-svg">
                              <svg
                                className="fill-inherit"
                                width=" 24"
                                height={25}
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M19.0714 19.722C16.0152 22.7784 11.4898 23.4388 7.78642 21.7261C7.23971 21.506 6.79148 21.3281 6.36537 21.3281C5.17849 21.3351 3.70117 22.486 2.93336 21.7191C2.16555 20.9512 3.31726 19.4727 3.31726 18.2787C3.31726 17.8525 3.14642 17.4123 2.92632 16.8645C1.21283 13.1617 1.87411 8.63479 4.93026 5.57931C8.8316 1.67653 15.17 1.67653 19.0714 5.5783C22.9797 9.48711 22.9727 15.8202 19.0714 19.722Z"
                                  stroke="inherit"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M15.9394 13.0651H15.9484"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M11.9304 13.0651H11.9394"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M7.9214 13.0651H7.9304"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <span className="nk-menu-text">Settings</span>
                          </span>
                        </NavLink>
						
						
                      </ul>
                      {/* .nk-menu */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="simplebar-placeholder"
                style={{ width: "auto", height: 382 }}
              />
            </div>
            <div
              className="simplebar-track simplebar-horizontal"
              style={{ visibility: "hidden" }}
            >
              <div
                className="simplebar-scrollbar"
                style={{ width: 0, display: "none" }}
              />
            </div>
            <div
              className="simplebar-track simplebar-vertical"
              style={{ visibility: "hidden" }}
            >
              <div
                className="simplebar-scrollbar"
                style={{ height: 0, display: "none" }}
              />
            </div>
          </div>
          {/* .nk-sidebar-menu */}
        </div>
        {/* .nk-sidebar-content */}
      </div>
      {/* .nk-sidebar-element */}
    </div>
  );
}
