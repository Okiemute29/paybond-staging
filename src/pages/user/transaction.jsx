

import { useState, useEffect } from "react";
import _route from "../../constants/routes";
import './myfastin.css'
import EditCryptoForm from "../../component/order/editcryptoform";
import TransactionTable from "../../component/order/crptoTable";
import Modal from '../../component/modal-md'
import ModalWithHeader from '../../component/modalwithtitle'
import useGetAllOrder from '../../hooks/orders/usegetorder';
import Spinnar from "../../component/spinnar";



export default function Orders() {
	const [addModal, setAddModal] = useState(false)
	const [deleteModal, setDeleteModal] = useState(false)
	const [deleteId, setDeleteId] = useState(null)
	const [editModal, setEditAddModal] = useState(false)
	const [viewCryptoModal, setViewCryptoModal] = useState(false)
	const [crypto, setCrypto] = useState(null)
	const [editCrypto, setEditCrypto] = useState(null)
	const updateLoading = false
	const deleteLoading = false
	const {getAllOrder, data, loading} = useGetAllOrder()

	const handleClose = ()=>{
		setViewCryptoModal(false)
		setEditAddModal(false)
		setAddModal(false)
		setDeleteModal(false)
		setDeleteId(null)
		setEditCrypto(null)
		setCrypto(null)
	}

	
	const handleGetTransaction = async ()=>{
		await getAllOrder()
	}

	
	
	const handleUpdateCrypto = async (details, id)=>{
		// await upDateCryto(details, id) && handleClose()
	}
	
	const handleDeleteCrypto = async (id)=>{
		// await deleteOrder(id) && handleClose()
	}

	useEffect(()=>{
		handleGetTransaction()
	}, [])
	return (
    <>
      <div className="nk-content ">
        <div className="container-fluid">
          <div className="nk-content-inner" data-select2-id={18}>
            <div className="nk-content-body" data-select2-id={17}>
              <div className="nk-block-head nk-block-head-sm">
                <div className="nk-block-between">
                  <div className="nk-block-head-content">
                    <h3 className="nk-block-title page-title tb-ff">
                      Transactions
                    </h3>
                    <div className="nk-block-des text-soft tb-ff">
                      <p>
                        You have a total of <strong>{data.length}</strong> orders.
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
              {/* .nk-block-head */}
              <div className="nk-block">
                <div className="card card-bordered card-stretch card-container">
                  <div className="card-inner-group">
                    <div className="card-inner p-0">
						<TransactionTable data={data} setEditCrypto={setEditCrypto} loading={loading} setCrypto={setCrypto} setEditAddModal={setEditAddModal} setViewCryptoModal={setViewCryptoModal} setDeleteId={setDeleteId} setDeleteModal={setDeleteModal} />
                      {/* .nk-tb-list */}
                    </div>
                    {/* .card-inner */}
                    {/* .card-inner */}
                  </div>
                  {/* .card-inner-group */}
                </div>
                {/* .card */}
              </div>
              {/* .nk-block */}
            </div>
          </div>
        </div>
      </div>



	  
	{editModal && (
        <ModalWithHeader
          handleClose={handleClose}
          showModal={editModal}
		  header='Edit Crypto Currency'
        >
          
		  <EditCryptoForm editCrypto={editCrypto} setEditCrypto={setEditCrypto}  handleUpdateCrypto={handleUpdateCrypto} loading={updateLoading} />
            <div className="modal-footer bg-light">
              <span className="sub-text">
                This adds a cryptocurrency to the listings on the website
              </span>
            </div>
        </ModalWithHeader>
      )}

	  {viewCryptoModal && (
        <Modal
          handleClose={handleClose}
          showModal={viewCryptoModal}
        >
          
		  <div className="modal-body modal-body-lg text-center">
                <div className="nk-modal">
                  <em
                    style={{
                      background:
                        `url("${crypto?.logo?.url}")`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                    className="nk-modal-icon icon icon-circle icon-circle-xxl ni  bg-success"
                  />
                  <h4 className="nk-modal-title">{crypto.name}</h4>
                  <div className="nk-modal-text">
                    <div className="caption-text">
                      Selling Rate :<strong>{crypto.sellRate} Naira to 1 USD</strong>
                      <br />
                      Buying Rate:
                      <strong>{crypto.sellRate} Naira to 1USD</strong>
                      <br />
                      Live Rate: {crypto.liveRate} USD to 1 Bitcoin
                    </div>
                    <div>
                      <small>Recieveing Information</small>
                      <p>{crypto?.recievingAddress?.wallet}</p>
                      <div
                        style={{
                          background: `url("${crypto?.recievingAddress?.QRCode?.url}")`,
                          height: 100,
                          width: 100,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          margin: "0 auto",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="nk-modal-action">
                    <a
                      href="javascript:void(0)"
                      className="btn btn-lg btn-mw btn-primary"
                      data-dismiss="modal"
                    >
                      OK
                    </a>
                  </div>
                </div>
              </div>
			  <div className="modal-footer bg-lighter">
                <div className="text-center w-100">
                  {/* <p>
                    Earn upto $25 for each friend your refer!{" "}
                    <a href="javascript:void(0)">Invite friends</a>
                  </p> */}
                </div>
              </div>
        </Modal>
      )}

	  {deleteModal && (
        <ModalWithHeader
          handleClose={handleClose}
          showModal={deleteModal}
		  header='Are you sure?'
        >
			<div class="modal-body">
				<p>Do you really want to delete this order?
					This process cannot be reversed.</p>

			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>

				<button onClick={() => handleDeleteCrypto(deleteId)} class="btn btn-danger">{deleteLoading ? <Spinnar /> : 'Delete'}
				</button>


			</div>
        </ModalWithHeader>
      )}
    </>
  );
}
