import React from 'react'
import download from '../../assets/images/download.png'

export default function DashboardAnalysis({value, title, accept, decline, wallet}) {
  return (
    <>
      
      <div className="d-flex justify-content-center align-items-center">
        <div className="card wallet-card-bg box-shadow-none justify-content-center align-items-center bg-transparent card-full">
          <div className="card-inner">
            <div className="card-title-group justify-content-center align-start mb-0">
              <div className="card-title">
                <h6 className="subtitle text-white tb-ff">
                  {title}
                </h6>
              </div>
              {/* <div className="card-tools">
                <em
                  className="card-hint icon ni ni-help-fill"
                  data-toggle="tooltip"
                  data-placement="left"
                  title
                  data-original-title="Total Deposited"
                />
              </div> */}
            </div>
            <div className="card-amount justify-content-center" id="totalapprovedcrypto">
              
              <span className="amount text-white">₦ {value}</span>
            </div>
            <div className="invest-data mt-3">
              <div className="invest-data-amount g-2">
                {wallet && <button className="fund-wallet-btn">
                  Fund Wallet
                  <img src={download} alt='download-icon' />
                </button>}
                {decline && <div className="invest-data-history">
                  <div className="title">Total Declined</div>
                  <div className="amount" id="totaldeclinedcrypto">
                    {" "}
                    <span className="amount">₦ {decline}</span>
                  </div>
                </div>}
              </div>
            </div>
          </div>
        </div>
        {/* .card */}
      </div>
    </>
  );
}
