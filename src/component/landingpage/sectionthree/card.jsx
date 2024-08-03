

export default function ServiceProviderCard ({icon, background}) {
  return (
	<>
	<div className="col-4 col-lg-2 p-1">		
		<div className={`service-provider ${background ? background : "bg-white"}`}>
			<img src={icon} alt="service-provider" />
		</div>
	</div>
	  
	</>
  )
}

 
