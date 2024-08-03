// Partial Sidebar for Dashboar

import { NavLink, useLocation } from "react-router-dom";
import _route from "../../constants/routes";


export default function _agentsidebar() {
	const location = useLocation();

	return (
    <div
      className="nk-sidebar nk-sidebar-fixed is-light pt-4"
      data-content="sidebarMenu"
    >
      <div className="nk-sidebar-element nk-sidebar-head  mb-3 justify-content-center">
        <div className="nk-sidebar-brand">
          <a href="/" className="logo-link nk-sidebar-logo">
            <img
              className="logo-dark logo-img"
              src="/assets/images/logo.svg"
              srcSet="/assets/images/logo.svg "
              alt="logo-dark"
            />
          </a>
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
                    style={{ height: "100%", overflow: "hidden" }}
                  >
                    <div
                      className="simplebar-content"
                      style={{ padding: "16px 0px 40px" }}
                    >
                      <ul className="nk-menu">
						
						<NavLink  to={_route._agent_dashboard}  className={(isActive) => "nk-menu-item " + (isActive.isActive ? "active " : "")} >
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
                        <NavLink to={_route._agent_chatbox}  className={(isActive) => "nk-menu-item " + (isActive.isActive ? "active current-page" : "")} >
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
                            <span className="nk-menu-text">Chatbox</span>
                          </span>
                        </NavLink>
                        {/* .nk-menu-item */}
						<NavLink  to={_route._agent_transaction}  className={(isActive) => "nk-menu-item " + (isActive.isActive ? "active " : "")} >
                          <span className="nk-menu-link">
                            <span className="nk-menu-icon">
                              <em className="icon ni ni-money" />
                            </span>
                            <span className="nk-menu-text">Transaction</span>
                          </span>
                        </NavLink>
                        {/* .nk-menu-item */}
						<NavLink  to={_route._agent_payment_info}  className={(isActive) => "nk-menu-item " + (isActive.isActive ? "active " : "")} >
                          <span className="nk-menu-link">
                            <span className="nk-menu-icon side-svg">
								<svg width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M7.74766 3.1521H16.3911C19.2892 3.1521 21.6388 5.50161 21.6388 8.39976V15.5768C21.6388 18.475 19.2892 20.8245 16.3911 20.8245H7.74766C4.84951 20.8245 2.5 18.475 2.5 15.5768V8.39976C2.5 5.50161 4.84951 3.1521 7.74766 3.1521Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M7.03516 7.6903H12.4341" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M21.6389 14.5478H17.5906C16.1042 14.5469 14.8993 13.343 14.8984 11.8566C14.8984 10.3701 16.1042 9.16619 17.5906 9.16528H21.6389" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M18.049 11.795H17.7373" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
                            </span>
                            <span className="nk-menu-text">Payment Info</span>
                          </span>
                        </NavLink>
                        {/* .nk-menu-item */}
						<NavLink  to={_route._agent_avatar}  className={(isActive) => "nk-menu-item " + (isActive.isActive ? "active " : "")} >
                          <span className="nk-menu-link">
                            <span className="nk-menu-icon side-svg-diff side-svg">
								<svg 
									xmlns="http://www.w3.org/2000/svg" 
									width="24" 
									height="25" 
									viewBox="0 0 24 25" 
									
									fill="none"
								>
									<path d="M12.1205 14.1828C12.1005 14.1828 12.0705 14.1828 12.0505 14.1828C12.0205 14.1828 11.9805 14.1828 11.9505 14.1828C9.68047 14.1128 7.98047 12.3428 7.98047 10.1628C7.98047 7.94281 9.79047 6.13281 12.0105 6.13281C14.2305 6.13281 16.0405 7.94281 16.0405 10.1628C16.0305 12.3528 14.3205 14.1128 12.1505 14.1828C12.1305 14.1828 12.1305 14.1828 12.1205 14.1828ZM12.0005 7.62281C10.6005 7.62281 9.47047 8.76281 9.47047 10.1528C9.47047 11.5228 10.5405 12.6328 11.9005 12.6828C11.9305 12.6728 12.0305 12.6728 12.1305 12.6828C13.4705 12.6128 14.5205 11.5128 14.5305 10.1528C14.5305 8.76281 13.4005 7.62281 12.0005 7.62281Z"  strokeWidth="0.1" fill="currentColor"/>
									<path d="M12.0008 23.4027C9.31081 23.4027 6.74081 22.4027 4.75081 20.5827C4.57081 20.4227 4.49081 20.1827 4.51081 19.9527C4.64081 18.7627 5.38081 17.6527 6.61081 16.8327C9.59081 14.8527 14.4208 14.8527 17.3908 16.8327C18.6208 17.6627 19.3608 18.7627 19.4908 19.9527C19.5208 20.1927 19.4308 20.4227 19.2508 20.5827C17.2608 22.4027 14.6908 23.4027 12.0008 23.4027ZM6.08081 19.7527C7.74081 21.1427 9.83081 21.9027 12.0008 21.9027C14.1708 21.9027 16.2608 21.1427 17.9208 19.7527C17.7408 19.1427 17.2608 18.5527 16.5508 18.0727C14.0908 16.4327 9.92081 16.4327 7.44081 18.0727C6.73081 18.5527 6.26081 19.1427 6.08081 19.7527Z"  strokeWidth="0.1" fill="currentColor"/>
									<path d="M12 23.4023C6.07 23.4023 1.25 18.5823 1.25 12.6523C1.25 6.72234 6.07 1.90234 12 1.90234C17.93 1.90234 22.75 6.72234 22.75 12.6523C22.75 18.5823 17.93 23.4023 12 23.4023ZM12 3.40234C6.9 3.40234 2.75 7.55234 2.75 12.6523C2.75 17.7523 6.9 21.9023 12 21.9023C17.1 21.9023 21.25 17.7523 21.25 12.6523C21.25 7.55234 17.1 3.40234 12 3.40234Z"  strokeWidth="0.1" fill="currentColor"/>
								</svg>
                            </span>
                            <span className="nk-menu-text">Avatar</span>
                          </span>
                        </NavLink>
                        {/* .nk-menu-item */}
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
