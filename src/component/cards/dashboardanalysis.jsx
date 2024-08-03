import React from 'react'

export default function DashboardAnalysis({value, title, accept, decline}) {
  return (
    <>
      
      <div className="col-md-4">
        <div className="card card-bordered card-full">
          <div className="card-inner">
            <div className="card-title-group align-start mb-0">
              <div className="card-title">
                <h6 className="subtitle tb-ff">
                  {title}
                </h6>
              </div>
              <div className="card-tools">
                <em
                  className="card-hint icon ni ni-help-fill"
                  data-toggle="tooltip"
                  data-placement="left"
                  title
                  data-original-title="Total Deposited"
                />
              </div>
            </div>
            <div className="card-amount" id="totalapprovedcrypto">
              {" "}
              <span className="amount">₦ {value}</span>
            </div>
            <div className="invest-data">
              <div className="invest-data-amount g-2">
                {accept && <div className="invest-data-history">
                  <div className="title">Total pending</div>
                  <div className="amount" id="totalpendingcrypto">
                    {" "}
                    <span className="amount">₦ {accept}</span>
                  </div>
                </div>}
                {decline && <div className="invest-data-history">
                  <div className="title">Total Declined</div>
                  <div className="amount" id="totaldeclinedcrypto">
                    {" "}
                    <span className="amount">₦ {decline}</span>
                  </div>
                </div>}
              </div>
              <div className="invest-data-ck">
                <div className="chartjs-size-monitor">
                  <div className="chartjs-size-monitor-expand">
                    <div className />
                  </div>
                  {/* <div className="chartjs-size-monitor-shrink">
                    <div className />
                  </div> */}
                </div>
                <div className="chartjs-size-monitor">
                  <div className="chartjs-size-monitor-expand">
                    <div className />
                  </div>
                  <div className="chartjs-size-monitor-shrink">
                    <div className />
                  </div>
                </div>
                <canvas
                  className="iv-data-chart chartjs-render-monitor"
                  id="totalDeposit"
                  width={204}
                  height={136}
                  style={{ display: "block", height: 68, width: 102 }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* .card */}
      </div>
    </>
  );
}
