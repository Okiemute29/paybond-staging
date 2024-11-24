export default function Notification() {
  return (
    <>
      <div id="notification" className="tab-container hidden">
        <h6 className="mt-4">Security Settings</h6>
        <p className="setting-sub-title">
          These settings helps you keep your account secure
        </p>
        {/* <div className="bg-white px-3 py-4 setting-inner-container flex-column rounded-4 d-flex justify-content-start align-items-start"> */}
        {/* <div className="bg-white px-3 py-4 setting-inner-container rounded-4 d-flex justify-content-between align-items-center mb-3">
          <div className="w-available">
            <p className="text-black security-title mb-0">Bright Theme</p>
            
          </div>
          <div className="col-fit d-flex justify-content-end setting-inner-container align-items-center">
            
			<div className="theme-switch-container mr-3">
				<label className="setting-switch">
					<input type="checkbox" className='setting-switch-input' />
					<span className="setting-slider setting-round"></span>
				</label>
			</div>
          </div>
        </div> */}
        <div className="bg-white px-3 py-4 setting-inner-container rounded-4 d-flex justify-content-between align-items-center mb-3">
          <div className="w-available">
            <p className="text-black security-title mb-0">Notification</p>
            {/* <p className="setting-sub-title security-desc">
              Set a unique password to protect your account.
            </p> */}
          </div>
          <div className="col-fit d-flex justify-content-end setting-inner-container align-items-center">
            
			<div className="theme-switch-container mr-3">
				<label className="setting-switch">
					<input type="checkbox" className='setting-switch-input' />
					<span className="setting-slider setting-round"></span>
				</label>
			</div>
          </div>
        {/* </div> */}
		</div>
      </div>
    </>
  );
}
