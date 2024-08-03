import avatar from '../data/profile'
import Spinnar from '../spinnar';

const ProfileForm = ({setAgentDetails, selectAvatar, setAvatar, handleClose}) => {

	const handleSubmit = async () =>{
		if(selectAvatar){
			
			setAgentDetails(prv => ({...prv, avatar: selectAvatar.toString()}))
			handleClose()
		}
	}

	console.log(typeof selectAvatar)
  return (
	
	<div className="modal-body avatar-modal">
	{
		avatar.map((element, index)=>{
			return (
				<div onClick={() => setAvatar(parseFloat(element.id))} style={{width: '60px', height: '60px'}} className="nk-activity-media relative user-avatar agent-logo ">
					<img src={element.name} alt="avatar"></img>
					{
						(selectAvatar === element.id) && <div className='active-avatar'>
							<em className="icon ni ni-check-thick" />
						</div>
					}
				</div>
			)
		})
	}
	<div className="col-12">
	  <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
		<li>
		  <button
			type="submit "
			className="btn btn-lg btn-primary tb-ff"
			onClick={()=> handleSubmit()}
		  >
			Update Avatar
		  </button>
		</li>
		<li onClick={()=> handleClose()}>
		  <a
			href="javascript:void(0)"
			data-dismiss="modal"
			className="link link-light tb-ff"
		  >
			Cancel
		  </a>
		</li>
	  </ul>
	</div>

	</div>
  );
}

export default ProfileForm
