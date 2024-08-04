import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
  } from 'react-router-dom';
  import { 
	  Dashboard,
	  Airtime, 
	  Data,
	  Electricity,
	  Betting,
	  Cable,
	  
  
  } from "./pages/user/index";
  import { 
	Home, 
	About,
	Contact
	  
  
  } from "./pages/landingpage/index";
import PageLayouts from "./pages/layout/index";
import Login from './pages/login'
import SignUp from './pages/signup'
import RegisterOtp from './pages/registerOTP'
import SetTransactionPin from './pages/setTransactionpin'
import _route from './constants/routes';
import PrivateRoute from './routeguard/privateroute'
import './App.css';

const router = createBrowserRouter(
	createRoutesFromElements(
	<>
	<Route path={_route._login}  element={<Login />} />
	<Route path={_route._signup}  element={<SignUp />} />
	<Route path={_route._register_otp}  element={<RegisterOtp />} />
	<Route path={_route._transaction_pin}  element={<SetTransactionPin />} />

	
	<Route path={_route._landing_page} element={<PageLayouts.RootLandingPageLayout />}>
	<Route path={_route._landing_page}  element={<Home />} />
	<Route path={_route._about_us}  element={<About />} />
	<Route path={_route._contact_us}  element={<Contact />} />

	</Route>
	<Route element={<PrivateRoute />} >
		<Route path={_route._landing_page} element={<PageLayouts.RootLayout />}>
		<Route path={_route._dashboard}  element={<Dashboard />} />
		<Route path={_route._airtime}  element={<Airtime />} />
		<Route path={_route._data}  element={<Data />} />
		<Route path={_route._electricity}  element={<Electricity />} />
		<Route path={_route._betting}  element={<Betting />} />
		<Route path={_route._cable}  element={<Cable />} />

		</Route>
	</Route>
	</>
	)
  );

function App() {
  return (
    <div className="App">
	<RouterProvider router={router} />
	</div>
  );
}

export default App;
