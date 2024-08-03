

export default function Card ({icon, text}) {
  return (
	<>
	<div className="col-6 col-lg-4 p-3">
		<div className='widget'>
			<img src={icon} alt='airtime' />
			<p>{text}</p>
		</div>
	</div>
	  
	</>
  )
}

 
