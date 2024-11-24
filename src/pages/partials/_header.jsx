import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import TwoCharacterComponent from "../../helpers/twocharactercomponent";
import _route from "../../constants/routes";
import useLogOutUser from "../../hooks/auth/uselogout";
import Profile from "../../component/data/profile";


export default function _header() {
	const user = useSelector((state) => state.auth.user)
	const {logOutUser, loading} = useLogOutUser()

	const handleMenu = ()=>{
		console.log(document.getElementsByTagName('body')[0].classList.contains('nav-shown'));
	}

	const handleLogOut = async ()=>{
		await logOutUser()
	}

	return (
		
		<div className="nk-header nk-header-fixed is-light">
		<div className="container-fluid">
			<div className="nk-header-wrap my-1">
				<div className="nk-menu-trigger d-xl-none ms-n1">
					<a href="javascript:void(0)" onClick={() => handleMenu()} className="nk-nav-toggle nk-quick-nav-icon" data-target="sidebarMenu"><em className="icon ni ni-menu" /></a>
				</div>
				<div className="nk-header-brand d-xl-none">
					<a href="/" className="logo-link">
						<img className="logo-dark logo-img" src="/assets/images/logo.svg" srcSet="/assets/images/logo.svg 2x" alt="logo-dark" />
					</a>
				</div>{/* .nk-header-brand */}
				{/* <div className="nk-header-search d-none d-lg-block ms-3 ms-xl-0">
					<div className="header-search">
						<em className="icon ni header-search-icon ni-search" />
						<input type="text" className="form-control border-transparent form-focus-none" placeholder="Search anything" />
					</div>
				</div> */}
				<div className="nk-header-tools">
					<ul className="nk-quick-nav">
						{/* <li className="dropdown notification-dropdown">
							<span className="dropdown-toggle nk-quick-nav-icon" data-bs-toggle="dropdown">
								<div className="icon-status icon-status-info"><em className="icon ni ni-bell" /></div>
							</span>
							<div className="dropdown-menu dropdown-menu-xl dropdown-menu-end">
								<div className="dropdown-head">
									<span className="sub-title nk-dropdown-title">Notifications</span>
									<Link to={'/notification'}>Mark All as Read</Link>
								</div>
								<div className="dropdown-body">
									<div className="nk-notification">
										<div className="nk-notification-item dropdown-inner">
											<div className="nk-notification-icon">
												<em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
											</div>
											<div className="nk-notification-content">
												<div className="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
												<div className="nk-notification-time">2 hrs ago</div>
											</div>
										</div>
										<div className="nk-notification-item dropdown-inner">
											<div className="nk-notification-icon">
												<em className="icon icon-circle bg-success-dim ni ni-curve-down-left" />
											</div>
											<div className="nk-notification-content">
												<div className="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
												<div className="nk-notification-time">2 hrs ago</div>
											</div>
										</div>
										<div className="nk-notification-item dropdown-inner">
											<div className="nk-notification-icon">
												<em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
											</div>
											<div className="nk-notification-content">
												<div className="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
												<div className="nk-notification-time">2 hrs ago</div>
											</div>
										</div>
										<div className="nk-notification-item dropdown-inner">
											<div className="nk-notification-icon">
												<em className="icon icon-circle bg-success-dim ni ni-curve-down-left" />
											</div>
											<div className="nk-notification-content">
												<div className="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
												<div className="nk-notification-time">2 hrs ago</div>
											</div>
										</div>
										<div className="nk-notification-item dropdown-inner">
											<div className="nk-notification-icon">
												<em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
											</div>
											<div className="nk-notification-content">
												<div className="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
												<div className="nk-notification-time">2 hrs ago</div>
											</div>
										</div>
										<div className="nk-notification-item dropdown-inner">
											<div className="nk-notification-icon">
												<em className="icon icon-circle bg-success-dim ni ni-curve-down-left" />
											</div>
											<div className="nk-notification-content">
												<div className="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
												<div className="nk-notification-time">2 hrs ago</div>
											</div>
										</div>
									</div>
								</div>
								<div className="dropdown-foot center">
									<Link to={'/notification'}>View All</Link>
								</div>
							</div>
						</li> */}
						<li className="dropdown user-dropdown">
							<span className="dropdown-toggle me-n1" data-bs-toggle="dropdown">
								<div className="user-toggle">
									<div className="user-avatar sm">
										{/* {user.image ? <img src="/assets/images/avatar/avatar.png" alt='avatar' /> : <TwoCharacterComponent data={`${'Godwin'} ${"Robert"}`} />} */}
										{
											user?.avatar ?
											
											<img
											src={Profile[+user.avatar - 1]?.name || ''}
											alt="avatar"
											/>
											:									
											<span><TwoCharacterComponent data={user.fullname} /> </span>
										}
									</div>
									<div className="user-info d-none d-xl-block">
										<div className="user-name dropdown-indicator">{user.fullname}</div>
									</div>
								</div>
							</span>
							<div className="dropdown-menu dropdown-menu-md dropdown-menu-end">
								<div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
									<div className="user-card">
										<div className="user-avatar">
											<span><TwoCharacterComponent data={user.fullname} /></span>
										</div>
										<div className="user-info w-available me-5">
											<span className="lead-text">{user.fullname}</span>
											<span className="sub-text w-100 line-clamp-1">{user.username}</span>
										</div>
									</div>
								</div>
								<div className="dropdown-inner">
									<ul className="link-list">
										{/* <li><span ><em className="icon ni ni-user-alt" /><span>View Profile</span></span></li> */}
										<li className='pointer'><Link to={_route._setting}><em className="icon ni ni-setting-alt" /><span>Account Setting</span></Link></li>
										{/* <li><span ><em className="icon ni ni-activity-alt" /><span>Login Activity</span></span></li> */}
										{/* <li><span className="dark-switch" ><em className="icon ni ni-moon" /><span>Dark Mode</span></span></li> */}
									</ul>
								</div>
								<div className="dropdown-inner">
									<ul className="link-list">
										<li onClick={() => handleLogOut()}><a href="javascript:void(0)"><em className="icon ni ni-signout" /><span>Sign out</span></a></li>
									</ul>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>{/* .nk-header-wrap */}
		</div>{/* .container-fliud */}
	</div>
	);
}