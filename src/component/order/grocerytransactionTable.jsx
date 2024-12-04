import emptyState from "../../assets/images/oops.png";
import _route from "../../constants/routes";
import Skeleton from "../skeletons/skeleton";
import dataImg from "../../assets/images/tx-data.png";
import airtimeImg from "../../assets/images/tx-airtime.png";
import electricityImg from "../../assets/images/tx-electicity.png";
import cableImg from "../../assets/images/tx-tv.png";
import walletImg from "../../assets/images/tx-wallet.png";
import SideModal from "../../helpers/sidemodal";
import { useState } from "react";
import UnderScoreRemoval from "../../helpers/underscoreremoval";

export default function GroceryTransactionTable({ data, loading }) {
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
	const groupedElements = {
	  "Shipping Details": {},
	  "Transaction Details": {}
	};
  
	const traverse = (obj, group, prefix = "") => {
	  Object.entries(obj).forEach(([key, value]) => {
		// Group key mappings
		if (group === "Shipping Details" && 
			["firstname", "lastname", "phone_no", "address", "zip", "city", "country", "state"].includes(key)) {
		  groupedElements["Shipping Details"][key] = value;
		} 
		else if (group === "Transaction Details" && 
				 ["_id", "total_amount", "payment_method", "transaction_id", "status", "createdAt"].includes(key)) {
		  groupedElements["Transaction Details"][key] = value;
		}
		else if (typeof value === "object" && !Array.isArray(value)) {
		  // Recursively handle nested objects
		  if (key === "shipping_info") {
			traverse(value, "Shipping Details");
		  } else if (key === "user") {
			// Optionally handle user details if needed
			traverse(value, "Transaction Details");
		  }
		}
	  });
	};
  
	traverse(data, "Transaction Details");
	traverse(data, "Shipping Details");
  
	return Object.entries(groupedElements).map(([groupTitle, groupData]) => (
	  <div key={groupTitle} className="mb-4">
		<div className="text-lg font-semibold mb-2">{groupTitle}</div>
		{Object.entries(groupData).map(([key, value]) => (
		  <div className="css-cnt7qc" key={key}>
			<div className="capitalize">
			  <UnderScoreRemoval text={key} />
			</div>
			<div className="title">
			  <span>{value != null ? value : "N/A"}</span>
			</div>
		  </div>
		))}
	  </div>
	));
  };


  return (
    <>
      <div className="nk-tb-list nk-tb-ulist trans-table">
        <div className="nk-tb-item nk-tb-head table-header">
          <div className="nk-tb-col tb-inner-tx">
            <span className="sub-text">
              <strong>Trabx ID</strong>
            </span>
          </div>
          <div className="nk-tb-col tb-inner-tx">
            <span className="sub-text">
              <strong>Total Amount</strong>
            </span>
          </div>
          <div className="nk-tb-col tb-col-md tb-inner-tx">
            <span className="sub-text">
              <strong>Payment Method</strong>
            </span>
          </div>
          <div className="nk-tb-col tb-inner-tx">
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
                className="nk-tb-item cursor-pointer table-content"
              >
                <div className="nk-tb-col no-border">
                  <div className="user-card">
                    <div className="user-info">
                      <span className="tb-lead">
                        {crypto?.transaction_id} 
                      </span>
                    </div>
                    <input type="text" defaultValue="BTC" hidden />
                  </div>
                </div>
                <div className="nk-tb-col no-border">
                  <span className="tb-amount">
                    <span className="currency">₦</span>
                    {crypto?.total_amount}
                  </span>
                </div>
                <div className="nk-tb-col tb-col-md no-border">
                  <span>{crypto?.payment_method}</span>
                </div>
                <div className="nk-tb-col no-border">
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
        <div className="title">
          {selectedTransaction?.shipping_info?.firstname} {selectedTransaction?.shipping_info?.lastname}
        </div>
      </div>
      <div className="css-xr82n9">
        <div>
          <div className="amount debit">-₦{selectedTransaction?.total_amount}</div>
          <div>Total Amount</div>
        </div>
        <div className={`center css-13b6tx1 ${
          selectedTransaction?.status?.toLowerCase() === "successful"
            ? "text-success"
            : selectedTransaction?.status?.toLowerCase() === "processing"
            ? "text-warning"
            : "text-danger"
        }`}>
          {selectedTransaction?.status}
        </div>
      </div>
      <div className="css-16mevgv">
        <div className="css-oggppy">
          <button
            color="#161616"
            className="pill css-1erdyoi"
            data-testid="pillbutton"
            aria-describedby="tooltip"
          >
            Transaction Details
          </button>
        </div>
        {selectedTransaction && renderKeyValuePairs(selectedTransaction)}
      </div>
    </div>
  </SideModal>
    </>
  );
}
