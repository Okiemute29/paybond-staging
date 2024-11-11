import { useState } from "react";
import Spinnar from "../spinnar";

export default function AddCryptoForm({ handlePostCrypto, loading }) {
  const [crypto, setCrypto] = useState({
    name: "",
    buyRate: "",
    sellRate: "",
    availability: {
      sell: false,
      buy: false,
    },
    shortCode: "",
    liveRate: "",
    recievingAddress: {
      wallet: "",
    },
    QRCode: "",
    logo: "",
  });

  // Function to handle file change
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    const reader = new FileReader();

    reader.onload = (event) => {
      // When file is read, update the state with the file contents
      setCrypto((prevState) => ({
        ...prevState,
        logo: file, // Use event.target.result to get the file contents as a data URL
      }));
      const logoLabel = document.getElementById("logoLabel");
      console.log(logoLabel);
      if (logoLabel) {
        console.log("label");
        logoLabel.innerText = file.name;
      }
    };

    console.log(crypto);
    reader.readAsDataURL(file); // Read the file as a data URL
  };

  // Function to handle file change
  const handleQRCodeFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    const reader = new FileReader();

    reader.onload = (event) => {
      // When file is read, update the state with the file contents
      setCrypto((prevState) => ({
        ...prevState,
        QRCode: file, // Use event.target.result to get the file contents as a data URL
      }));
      const qrCodeLabel = document.getElementById("qrCodeLabel");
      console.log(qrCodeLabel);
      if (qrCodeLabel) {
        console.log("label");
        qrCodeLabel.innerText = file.name;
      }
    };

    reader.readAsDataURL(file); // Read the file as a data URL
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(crypto);
    const formData = new FormData();

    formData.append("name", crypto.name);
    formData.append("buyRate", crypto.buyRate);
    formData.append("sellRate", crypto.sellRate);
    formData.append("availability[sell]", crypto.availability.sell);
    formData.append("availability[buy]", crypto.availability.buy);
    formData.append("shortCode", crypto.shortCode);
    formData.append("logo", crypto.logo);
    formData.append("recievingAddress[wallet]", crypto.recievingAddress.wallet);
    crypto.QRCode && formData.append("QRCode", crypto.QRCode);

    for (let entry of formData.entries()) {
      // entry is an array [key, value]
      const [key, value] = entry;

      // Log the key and value to see details
      console.log(`Key: ${key}, Value: ${value}`);
    }
    handlePostCrypto(formData);
  };

  return (
    <>
      <div className="modal-body">
        <form className="form-validate is-alter" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="full-name">
              Crypto Name
            </label>
            <div className="form-control-wrap">
              <input
                required
                type="text"
                value={crypto.name}
                onChange={(e) =>
                  setCrypto((prv) => ({ ...prv, name: e.target.value }))
                }
                className="form-control"
                id="full-name"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email-address">
              Buy Rate
            </label>
            <div className="form-control-wrap">
              <input
                required
                type="number"
                value={crypto.buyRate}
                onChange={(e) =>
                  setCrypto((prv) => ({ ...prv, buyRate: e.target.value }))
                }
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="phone-no">
              Sell Rate
            </label>
            <div className="form-control-wrap">
              <input
                required
                type="number"
                value={crypto.sellRate}
                onChange={(e) =>
                  setCrypto((prv) => ({ ...prv, sellRate: e.target.value }))
                }
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Availability</label>
            <ul className="custom-control-group g-3 align-center">
              <li>
                <div className="custom-control custom-control-sm custom-checkbox">
                  <input
                    type="checkbox"
                    checked={crypto.availability.buy}
                    onChange={(e) => {
                      console.log(crypto);
                      setCrypto((prv) => ({
                        ...prv,
                        availability: {
                          ...prv.availability,
                          buy: e.target.checked,
                        },
                      }));
                    }}
                    className="custom-control-input"
                    id="comBuy"
                  />

                  <label className="custom-control-label" htmlFor="comBuy">
                    Buy
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-control-sm custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="comSell"
                    checked={crypto.availability.sell}
                    onChange={(e) =>
                      setCrypto((prv) => ({
                        ...prv,
                        availability: {
                          ...prv.availability,
                          sell: e.target.checked,
                        },
                      }))
                    }
                    name="sell"
                  />
                  <label className="custom-control-label" htmlFor="comSell">
                    Sell
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div className="form-group">
            <label className="form-label">Short Code</label>
            <div className="form-control-wrap">
              <input
                required
                type="text"
                value={crypto.shortCode}
                onChange={(e) =>
                  setCrypto((prv) => ({ ...prv, shortCode: e.target.value }))
                }
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="full-name">
              Crypto Logo
            </label>
            <div className="form-control-wrap">
              <div className="custom-">
                <input
                  required
                  type="file"
                  name="logo"
                  onChange={(e) => handleFileChange(e)}
                  // className="custom-file-input"
                  id="customLogoFile"
                />
                <label
                  id="logoLabel"
                  className="custom-file-label"
                  htmlFor="customLogoFile"
                >
                  Choose file
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="phone-no">
              Recieving Wallet Address
            </label>
            <div className="form-control-wrap">
              <input
                required
                type="text"
                name="walletaddress"
                value={crypto.recievingAddress.wallet}
                onChange={(e) =>
                  setCrypto((prv) => ({
                    ...prv,
                    recievingAddress: {
                      ...prv.recievingAddress,
                      wallet: e.target.value,
                    },
                  }))
                }
                className="form-control"
                id="phone-no"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="full-name">
              Recieving QR Code (optional)
            </label>
            <div className="form-control-wrap">
              <div className="custom-file">
                <input
                  type="file"
                  name="qrcode"
                  onChange={(e) => handleQRCodeFileChange(e)}
                  className="custom-file-input"
                  id="customQrFiles"
                />
                <label
                  className="custom-file-label"
                  id="qrCodeLabel"
                  htmlFor="customQrFiles"
                >
                  Choose file
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-lg btn-primary tb-ff">
              {loading ? <Spinnar /> : "Add Crypto"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
