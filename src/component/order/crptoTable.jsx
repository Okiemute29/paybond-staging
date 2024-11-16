import emptyState from "../../assets/images/oops.png";
import _route from "../../constants/routes";
import Skeleton from "../skeletons/skeleton";
import { Link } from "react-router-dom";
import Profile from "../data/profile";
import dataImg from "../../assets/images/tx-data.png";
import airtimeImg from "../../assets/images/tx-airtime.png";
import electricityImg from "../../assets/images/tx-electicity.png";
import cableImg from "../../assets/images/tx-tv.png";
import walletImg from "../../assets/images/tx-wallet.png";
import SideModal from "../../helpers/sidemodal";
import { useState } from "react";

export default function CrptoTable({ data, loading }) {
  const options = { month: "long", year: "numeric", day: "numeric" };
  const [showTransaction, setTransaction] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const icon = [
    {
      id: "airtime",
      name: airtimeImg,
    },
    {
      id: "cable tv",
      name: cableImg,
    },
    {
      id: "data",
      name: dataImg,
    },
    {
      id: "electricity",
      name: electricityImg,
    },
    {
      id: "wallet",
      name: walletImg,
    },
  ];

  // const matchedIcon = icon.find(
  // 	(item) => item.id === crypto?.bill?.category?.toLowerCase()
  // );

  const handleClose = () => {
    setTransaction(false);
    setSelectedTransaction(null);
  };

  const handleSelectTransaction = (transc) => {
    console.log("Transaction selected:", transc);
    setTransaction(true);
    setSelectedTransaction(transc);
  };

  const renderKeyValuePairs = (data) => {
	const elements = [];
  
	const traverse = (obj, prefix = "") => {
	  Object.entries(obj).forEach(([key, value]) => {
		const formattedKey = prefix ? `${prefix}.${key}` : key;
		if (value && typeof value === "object" && !Array.isArray(value)) {
		  // Recursively handle nested objects
		  traverse(value, formattedKey);
		} else {
		  // Push the key-value pair with a null-safe check
		  elements.push(
			<div className="css-cnt7qc" key={formattedKey}>
			  <div>{formattedKey}</div>
			  <div className="title">
				<span>{value != null ? value : "N/A"}</span>
			  </div>
			</div>
		  );
		}
	  });
	};
  
	traverse(data);
	return elements;
  };

  return (
    <>
      <div className="nk-tb-list nk-tb-ulist trans-table">
        <div className="nk-tb-item nk-tb-head table-header">
          <div className="nk-tb-col tb-inner-tx">
            <span className="sub-text">
              <strong>Name</strong>
            </span>
          </div>
          <div className="nk-tb-col tb-col-mb tb-inner-tx">
            <span className="sub-text">
              <strong>Total Amount</strong>
            </span>
          </div>
          <div className="nk-tb-col tb-col-md tb-inner-tx">
            <span className="sub-text">
              <strong>Payment Method</strong>
            </span>
          </div>
          <div className="nk-tb-col tb-col-lg tb-inner-tx">
            <span className="sub-text">
              <strong>Date</strong>
            </span>
          </div>
          <div className="nk-tb-col tb-col-lg tb-inner-tx">
            <span className="sub-text">
              <strong>Status</strong>
            </span>
          </div>
          <div className="nk-tb-col nk-tb-col-tools text-right tb-inner-tx">
            <div>
              <span className="sub-text" />
            </div>
          </div>
        </div>

        {loading ? (
          [1, 2, 3, 4, 5].map(() => {
            return (
              <div className="nk-tb-item table-content">
                <div className="nk-tb-col no-border">
                  <div className="user-card">
                    <div className="user-avatar">
                      <Skeleton type="avatar" />
                    </div>
                    <div className="user-info w-100">
                      <span className="tb-lead">
                        <Skeleton type="text" />
                      </span>
                    </div>
                    <input type="text" defaultValue="BTC" hidden />
                  </div>
                </div>
                <div className="nk-tb-col tb-col-mb no-border">
                  <span className="tb-amount">
                    <Skeleton type="text" />
                  </span>
                </div>
                <div className="nk-tb-col tb-col-md no-border">
                  <span>
                    <Skeleton type="text" />
                  </span>
                </div>
                <div className="nk-tb-col tb-col-lg no-border">
                  <span>
                    <Skeleton type="text" />
                  </span>
                </div>
                <div className="nk-tb-col tb-col-md">
                  <span
                    className={`tb-sub text-primary  text-truncate ${
                      crypto?.status?.toLowerCase() === "successful"
                        ? "text-success"
                        : crypto.status?.toLowerCase() === "processing"
                        ? "text-warning"
                        : "text-danger"
                    } `}
                  >
                    <Skeleton type="text" />
                  </span>
                </div>
                <div className="nk-tb-col nk-tb-col-tools no-border">
                  <div className="dropdown">
                    <Skeleton type="text" />
                  </div>
                </div>
              </div>
            );
          })
        ) : data.length < 1 ? (
          <div className="child-container">
            <div className="centered-content">
              <div className="emptystate-container">
                {/* <div>
							<div> */}
                <img src={emptyState} alt="no item found" />
                <p>No Order</p>
                {/* </div>
						</div> */}
              </div>
            </div>
          </div>
        ) : (
          [...data]?.reverse().map((crypto, index) => {
            const matchedIcon = icon.find(
              (item) =>
                item.id?.toLowerCase() === crypto?.category?.toLowerCase()
            );
            console.log(icon);
            return (
              <div
                onClick={() => handleSelectTransaction(crypto)}
                key={index}
                className="nk-tb-item table-content"
              >
                <div className="nk-tb-col no-border">
                  <div className="user-card">
                    <div
                      style={{ background: "transparent" }}
                      className="user-avatar"
                    >
                      {matchedIcon && (
                        <img src={matchedIcon?.name} alt="avatar" />
                      )}
                    </div>
                    <div className="user-info">
                      <span className="tb-lead">
                        {crypto?.network?.split(" ")[0]} {crypto?.category}
                      </span>
                    </div>
                    <input type="text" defaultValue="BTC" hidden />
                  </div>
                </div>
                <div className="nk-tb-col tb-col-mb no-border">
                  <span className="tb-amount">
                    <span className="currency">₦</span>
                    {crypto?.bill?.amount}
                  </span>
                </div>
                <div className="nk-tb-col tb-col-md no-border">
                  <span>{crypto?.payment_method}</span>
                </div>
                <div className="nk-tb-col tb-col-lg no-border">
                  <span>{`${new Date(crypto?.createdAt)?.toLocaleDateString(
                    "en-US",
                    options
                  )}`}</span>
                </div>
                <div className="nk-tb-col tb-col-md">
                  <span
                    className={`tb-sub text-primary  text-truncate ${
                      crypto?.status?.toLowerCase() === "successful"
                        ? "text-success"
                        : crypto.status?.toLowerCase() === "processing"
                        ? "text-warning"
                        : "text-danger"
                    } `}
                  >
                    {crypto?.status}
                  </span>
                </div>
                {/* <div className="nk-tb-col nk-tb-col-tools no-border">
							<div className="dropdown">
								<a className="text-soft dropdown-toggle btn btn-icon btn-trigger" data-bs-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
								<div className="dropdown-menu dropdown-menu-right ">
									<ul className="link-list-opt no-bdr">
										<li><Link to={`${_route._transaction}/${crypto?._id}`}><em className="icon ni ni-eye" /><span>View Order</span></Link></li>
										<li onClick={()=> {setEditCrypto(crypto); setEditAddModal(true)}}><a href="javascript:void(0)"><em className="icon ni ni-edit" /><span>Edit Crypto</span></a></li>
										<li onClick={()=> {setDeleteId(crypto?._id); setDeleteModal(true)}}><a href="javascript:void(0)"><em className="icon ni ni-trash" /><span>Delete Crypto</span></a></li>
									</ul>
								</div>
							</div>

						</div> */}
              </div>
            );
          })
        )}
      </div>

      <SideModal
        handleClose={handleClose}
        showModal={showTransaction}
        myStyle={"active-view"}
      >
        <div data-testid="transaction-modal" className="css-wjk5yo">
          <div className="css-1x2qt9t">
            <div className="title"> {selectedTransaction?.network?.split(" ")[0]} {selectedTransaction?.category}</div>
          </div>
          <div className="css-xr82n9">
            <div>
              <div className="amount debit ">-₦{selectedTransaction?.bill?.amount}</div>
              <div>Total Amount</div>
            </div>
            <div className={`center css-13b6tx1 ${
                      crypto?.status?.toLowerCase() === "successful"
                        ? "text-success"
                        : crypto.status?.toLowerCase() === "processing"
                        ? "text-warning"
                        : "text-danger"
                    }`}>
			{selectedTransaction?.status}</div>
          </div>
          <div className="css-16mevgv">
            <div className="css-oggppy">
              <button
                color="#161616"
                className="pill  css-1erdyoi"
                data-testid="pillbutton"
                aria-describedby="tooltip"
              >
                Transaction Details
              </button>
            </div>
			{selectedTransaction && renderKeyValuePairs(selectedTransaction?.bill)}
          </div>
        </div>
      </SideModal>
    </>
  );
}
