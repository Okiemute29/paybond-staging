
import sidepic from "../../assets/images/electricity-img.png"

import port from "../../assets/images/port.png"
import eko from "../../assets/images/eko.png"
import enugu from "../../assets/images/enugu.png"
import abuja from "../../assets/images/abuja.png"
import benin from "../../assets/images/benin.png"
import dropdown from "../../assets/images/dropdown.svg"
import Spinnar from '../../component/spinnar'
import { useEffect, useState } from 'react'
import DropDown from '../../helpers/dropdown'
import DropDownData from '../../helpers/dropdowndata'
import InputField from "../../component/common/input"
import useGetBillCategory from "../../hooks/airtime/usegetbillcategory"
import useGetBillFromCategory from "../../hooks/airtime/usegetbillfromcategory"
import LoadingModal from "../../helpers/paybillsmodal"
import Modal from "../../helpers/modal"
import usePostVerifyBill from "../../hooks/airtime/usepostverifybill"
import useCreateCard from "../../hooks/airtime/usecreatecardtr"
// import OtpInput from 'react-otp-input';
import { useSelector } from 'react-redux'
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import successImg from "../../assets/success.png"
import failImg from "../../assets/fail.png"


export default function Electricity() {
	const user = useSelector((state) => state.auth.user)
	const [selectProvider, setSelectProvider] = useState(false)
	const [selectDataPlan, setSelectDataPlan] = useState(false)
	const {getBillCategory, data, loading} = useGetBillCategory();
	const {createCardTransaction, data: cardData, loading: cardLoading,  error: cardError, isSuccess } = useCreateCard()
	const [showSuccess, setShowSuccess] = useState(false)
	const [showError, setShowError] = useState(false)
	const [details, setDetails] = useState(null)
	const {getBillFromCategory, data: billFromCategoryData, loading: billFromCategoryLoading} = useGetBillFromCategory()
	const {postVerifyBill, data: verifyBillData, loading: verifyBillLoading} = usePostVerifyBill()
	const [selectedProvider, setSelectedProvider] = useState(null)
	const [selectedData, setSelectedData] = useState(null)
	const [updatedBillers, setUpdatedBillers] = useState([]);
	const [formData, setFormData] = useState({
		amount: "",
		item_code: "",
		code: "",
		customer: ""
	})

	const [paymentConfig, setPaymentConfig] = useState({
		public_key: process.env.REACT_APP_FLUTTER_WAVE,
		tx_ref: `tx-${Date.now()}`,
		amount: 0,
		currency: 'NGN',
		payment_options: 'card,mobilemoney,ussd',
		customer: {
		  email: user.username,
		//   phone_number: '070********',
		  name: user.fullname,
		},
		customizations: {
		  title: 'Data Payment',
		  description: 'Payment for Airtime',
		  logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
		},
		meta: {
		  source: window.location.origin, // Add your website name
		},
		redirect_url: '', // Add redirect URL
		mode: 'payment',
		payment_plan: null,
		subaccounts: null,
		theme: {
		  mode: 'light', // or 'dark'
		}
	  });
	const handleFlutterPayment = useFlutterwave(paymentConfig);

	// Update config when amount changes
	useEffect(() => {
		if (formData?.amount) {
			setPaymentConfig(prevConfig => ({
			...prevConfig,
			amount: formData.amount,
			tx_ref: `tx-${Date.now()}`,
			}));
		}
	}, [formData?.amount, verifyBillData]);

	const handleClick = (item) => {
		setSelectedProvider(item);
		setFormData(prv => ({...prv, code: item.biller_code}))
		setSelectProvider(prv => !prv)
	};

	const handleInputChange = (e) =>{
		const {name, value} = e.target 
		const rawValue = value.replace(/[^\d]/g, ''); // Remove non-numeric characters
		console.log(rawValue);
		setFormData(prv => ({...prv, [name]: rawValue}))
	}	

	const formatNumber = (num) => {
		return `N${new Intl.NumberFormat().format(num)}`;
	};


	const items = [
		{
			img: abuja,
			value: "Abujae "
		},
		{
			img: enugu,
			value: "Enugue "
		},
		{
			img: eko,
			value: "Ekoe  "
		},
		{
			img: port,
			value: "Porte Harcourt "
		},
		{
			img: benin,
			value: "Benine"
		},
	]

	const handleGetBillCategory = async () =>{
		await getBillCategory("utilitybills")
	}
	const handleGetBillFromCategory = async () =>{
		await getBillFromCategory(selectedProvider.biller_code)
	} 
	
	const handleVerifyBill = async (e) =>{
		e.preventDefault()
		console.log("submit verify", formData)
		if(formData.amount && formData.code && formData.customer && formData.item_code){
			var verifyData = {
				item_code: formData.item_code,
				code: formData.code,
				customer: formData.customer
			}
			await postVerifyBill(verifyData)
		}else{
			window.NioApp.Toast("Fill all available field", "warning");

		}
	} 
	const handleBillPayment = async (data)=>{
		const cardData={
			status: data.status,
			description: "A new card payment",
			flutterwave: data
		}
		const billData = {
			amount: `${formData.amount}`,
			customer_id: formData.customer,
			biller_code: formData.code,
			item_code: formData.item_code,
			payment_method: "card",
			category: "Electricity"

		}
		await createCardTransaction(cardData, billData)
	}

	useEffect(()=>{
		handleGetBillCategory()
	},[])

	useEffect(()=>{
		if(selectedProvider){
			handleGetBillFromCategory()
		}
	}, [selectedProvider])



	useEffect(() => {
		if(data) {
			// Update logos in the billers array
			const updated = data.map(biller => {
				// Find matching logo by checking if biller name includes the logo value
				const matchingLogo = items.find(logo => 
					biller.name.toUpperCase().includes(logo.value.toUpperCase())
				);
				console.log("matchingLogo", matchingLogo)
				
				// If found, update the logo, otherwise keep as is
				return matchingLogo 
					? { ...biller, logo: matchingLogo.img }
					: biller;
			});
	
			setUpdatedBillers(updated);
			setSelectedProvider(updated[0])
			setFormData(prv => ({...prv, code: updated[0]?.biller_code}))
		}
	}, [data]); // Added items to dependency array
	console.log("updatedBillers", updatedBillers)
	// Set the first item_code by default if billFromCategoryData is available
	useEffect(() => {
		if (billFromCategoryData?.length > 0 ) {
			handleDataClick(billFromCategoryData[0])
		}
	}, [billFromCategoryData,]);

	// Function to handle payment initiation
	const initiatePayment = (data) => {
		try {
		  handleFlutterPayment({
			callback: async (response) => {
			  console.log('Payment Response:', response);
			  if (response.status === 'successful') {
				// Verify the transaction on your backend
				if (window.event) {
					window.event.preventDefault();
				  }
				  handleBillPayment(response)
				
			  }
			  closePaymentModal();
			},
			onClose: () => {
			  console.log('Payment modal closed');
			},
		  });
		} catch (error) {
		  console.error('Error initiating payment:', error);
		}
	  };

	  
	useEffect(()=>{
		if(verifyBillData.status?.toLowerCase() === "success"){			
			initiatePayment(verifyBillData)
			setDetails(verifyBillData)
			
		}
	}, [verifyBillData])


	const handlePaybillSuccess = () => {
		setShowSuccess(false)
		setFormData({
			amount: "",
			item_code: "",
			code: "",
			customer: ""
		})
		setDetails(null)
	}
	const handlePaybillError = () => {
		setShowError(false)
	}

	// useEffect(()=>{
	// 	if(cardData){
	// 		setShowSuccess(true)
	// 	}
	// }, [cardData])
	useEffect(() => {
        if(isSuccess) {
            setShowSuccess(true);
            setShowError(false);
			console.log("details", details)
			console.log("cardData", cardData)
			console.log("verifyBillData", verifyBillData)
        } else if (cardError.cardError || cardError.billError) {
            setShowError(true);
            setShowSuccess(false);
        }
    }, [isSuccess, cardData, cardError]);

	const handleDataClick = (item)=>{
		console.log("selectedData", item)
		setSelectDataPlan(false)
		setSelectedData(item)
		setFormData(prv => ({...prv, item_code: item.item_code, amount: item.amount}))
	}

	console.log("cardData", cardData)
	console.log("details", details)
	console.log("cardData", cardData)
	console.log("verifyBillData", verifyBillData)




	return ( 
	<>
		<div className="nk-content ">
		<div className="container-fluid">
			<div className="nk-content-inner">
			<div className="nk-content-body">
				<div className="nk-block-head nk-block-head-sm mt-4">
				<div className="nk-block-between">
					<div className="nk-block-head-content">
						<h4 className="page-title cus-page-title text-paybond">Buy Electricity</h4>
						
					</div>
					{/* .nk-block-head-content */}
				</div>
				{/* .nk-block-between */}
				</div>
				{/* .nk-block */}
				<div className="nk-block">
				<div className="row g-gs">
					<div className={`col-md-6`}>
						<div className='col-md-9'>
							<div className="card shodowles-card bg-transparent">
								<div className="nk-ecwg nk-ecwg2">
								<div className="card-inner p-0">
									<p className='auth-label'>Select Provider</p>
									<div onClick={()=> setSelectProvider(prv => !prv)} className='bg-white cursor-pointer d-flex justify-content-between align-items-center rounded-4 py-2 px-3'>
										<div className="select-item">
										{((selectedProvider?.logo && selectedProvider?.logo !== null) || !selectedProvider) &&<div className='selected-product-img'>
											{(selectedProvider?.logo && selectedProvider?.logo !== null) &&<img src={selectedProvider?.logo} alt='select-img' />}
											</div>
										}
												{selectedProvider?.name && <p>{selectedProvider?.name}</p>}
										</div>
										<div className='dropdown-con'>
											<img src={dropdown} alt='dropdown' />
										</div>
									</div>
								</div>
								{/* .card-inner */}
								</div>
								{/* .nk-ecwg */}
							</div>


							<DropDown 
								show={selectProvider}
								items={updatedBillers}
								handleClick={handleClick}
								loading={loading}
								checkMark
								selectedProvider={selectedProvider}

							/>
								
							{
								billFromCategoryData && <div className="card shodowles-card bg-transparent">
											<div className="nk-ecwg nk-ecwg2">
											<div className="card-inner p-0">
											<p className='auth-label'>Select Meter Type</p>
												<div onClick={()=> setSelectDataPlan(prv => !prv)} className='bg-white cursor-pointer d-flex justify-content-between align-items-center rounded-4 py-2 px-3'>
													{
														selectedData === null && <div className='selected-product-img me-2'></div>
													}
													<div className="select-item">
														{selectedData && <p>{`${selectedData?.biller_name} ${(selectedData?.amount && selectedData?.amount!== 0) ? `(${formatNumber(selectedData?.amount)})` : ""}`}</p>}
													</div>
													<div className='dropdown-con px-1'>
														<img src={dropdown} alt='dropdown' />
													</div>
												</div>
											</div>
											{/* .card-inner */}
											</div>
											{/* .nk-ecwg */}
										</div>
							}

							<DropDownData 
								show={selectDataPlan}
								items={billFromCategoryData}
								handleClick={handleDataClick}
								loading={billFromCategoryLoading}
								name={selectedProvider}
								formatNumber={formatNumber}

							/>
							<div className="card mt-0 shodowles-card bg-transparent">
								<div className="nk-ecwg nk-ecwg2">
								<div className="card-inner p-0">
									<div className='rounded-4 py-2'>								
										<div className="form-group">												
											<InputField 
												label="Meter Number"
												name="customer"
												type="number"
												placeholder="Enter meter number"
												value={formData.customer}
												change={handleInputChange}
											/>
										</div>
									</div>
								</div>
								{/* .card-inner */}
								</div>
								{/* .nk-ecwg */}
							</div>
							{/* <div className="card mt-0 shodowles-card bg-transparent">
								<div className="nk-ecwg nk-ecwg2">
								<p className='auth-label'>Select Meter Type</p>
								<div className="card-inner p-0">
									<div className='rounded-4 py-2 d-flex justify-content-start align-items-center paybound-gap-2'>
										
										<div onClick={() => setFormData(prv => ({...prv, meterType: "prepaid"}))} className={`meter-type-con ${formData.meterType === "prepaid" && "active-meter-type"}`}>
											Prepaid
										</div>
										<div onClick={() => setFormData(prv => ({...prv, meterType: "postpaid"}))} className={`meter-type-con ${formData.meterType === "postpaid" && "active-meter-type"}`}>
											Postpaid
										</div>
									</div>
								</div>
								</div>
							</div> */}
							<div className="card mt-0 shodowles-card bg-transparent">
								<div className="nk-ecwg nk-ecwg2">
								<div className="card-inner p-0">
									<div className='rounded-4 py-2'>
										<form onSubmit={handleVerifyBill}>										
											<div className="form-group">												
												<InputField 
													label="Amount"
													name="amount"
													type="number"
													placeholder="Enter Amount"
													value={formData.amount}
													change={handleInputChange}
												/>
											</div>
											{/* .form-group */}
											<div className="form-group col-12">
											<button className="auth-btn btn btn-lg btn-primary btn-block">
												{verifyBillLoading ? <Spinnar /> : 'Pay'}
											</button>
											</div>
										</form>
										
									</div>
								</div>
								{/* .card-inner */}
								</div>
								{/* .nk-ecwg */}
							</div>
						</div>
					{/* .card */}
					</div>
					{/* .col */}
					<div className="d-none d-md-block col-md-6">
						<div className="card bg-transparent">
							<div className="nk-ecwg nk-ecwg2">
							<div className="card-inner flex-grow-1 d-flex flex-column p-0">
								<div className="col-12 rounded-5 overflow-hidden">
									<img className="product-sidepic" src={sidepic} alt="airtime" />
								</div>
							</div>
							{/* .card-inner */}
							</div>
							{/* .nk-ecwg */}
						</div>
					</div>
					{/* .col */}
				</div>
				{/* .row */}
				</div>
				{/* .nk-block */}
			</div>
			</div>
		</div>
		</div>

{
	(billFromCategoryLoading || cardLoading) &&<LoadingModal />
}
{showSuccess && <Modal
	handleClose={handlePaybillSuccess}
	showModal={showSuccess}
	myStyle="modal-sm"
>
	
	<div className="success-card">
		<img src={successImg} alt="successful-check" />
		<p className="payment-success-text text-paybond mb-0">Payment Successful</p>
		<p className="text-center"> {`Your utility bill payment of ${formatNumber(formData.amount)} for ${details.name} at ${details.address} (Customer ID: ${details.customer}) was successful.  Your recharge token is ${cardData?.bill?.recharge_token}. Thank you for your payment!`}</p>
	</div>
</Modal>}
{showError && <Modal
	handleClose={handlePaybillError}
	showModal={showError}
	myStyle="modal-sm"
>
	
	<div className="success-card">
		<img src={failImg} alt="successful-check" />
		<p style={{color: "red"}} className="payment-fail-text mb-0">Payment Failed</p>
		<p className="text-center">{`Your utility bill payment of ${formatNumber(formData.amount)} for ${details.name} at ${details.address} (Customer ID: ${details.customer}) could not be processed. Please try again later.`}</p>
	</div>
</Modal>}


	</>

  );
}
