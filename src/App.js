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
	  Groceries,
	  GroceriesProduct,
	  Favourites,
	  Category,
	  CheckOut,
	  Settings,
	  Transaction,
	  Error
	  
  
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
import PrivatePinRoute from './routeguard/privatepinroute'
import './App.css';
import PrivacyPolicy from './pages/privacypolicy';
import TermsOfService from './pages/termsofservice';
import KYCAMLPolicy from './pages/kycpolicy';

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
		<Route path={_route._admin_privacy_policy}  element={<PrivacyPolicy />} />
		<Route path={_route._admin_terms_of_service}  element={<TermsOfService />} />
		<Route path={_route._admin_kyc}  element={<KYCAMLPolicy />} />
	</Route>
	<Route element={<PrivateRoute />} >
		<Route element={<PrivatePinRoute />} >
			<Route path={_route._landing_page} element={<PageLayouts.RootLayout />}>
			<Route path={_route._dashboard}  element={<Dashboard />} />
			<Route path={_route._airtime}  element={<Airtime />} />
			<Route path={_route._data}  element={<Data />} />
			<Route path={_route._electricity}  element={<Electricity />} />
			{/* <Route path={_route._betting}  element={<Betting />} /> */}
			<Route path={_route._cable}  element={<Cable />} />
			<Route path={_route._groceries} element={<Groceries /> } />
			<Route path={_route._groceries_details} element={<GroceriesProduct /> } />
			<Route path={_route._favourite} element={<Favourites /> } />
			<Route path={_route._category} element={<Category /> } />
			<Route path={_route._checkout} element={<CheckOut /> } />
			<Route path={_route._setting} element={<Settings /> } />
			<Route path={_route._transaction} element={<Transaction /> } />
			<Route path={_route._not_found} element={<Error /> } />

			</Route>
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
