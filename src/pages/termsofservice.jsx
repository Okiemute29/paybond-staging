import React from 'react';
import './PrivacyPolicy.css';

const TermsOfService = () => {
  return (
	<main className='nk-content pt-5'>
    <div className="privacy-policy-container">
      <header className="privacy-header">
        <h1 className='text-paybond'>PAYBOND TERMS OF SERVICE</h1>
      </header>

      <section className="definitions">
        <h2 className='text-paybond'>1. Definitions in this Agreement</h2>
        <p>The words "you" and "your" refer to the person who downloads the Application or signs up and uses the Service. The words "PayBond", "we" and "us" and "our" refer to PayBond, Inc. The word "Transaction" means to make a payment request, send a payment or money. The word "Beneficiary" means the vendor with whom you transact.</p>
      </section>

      <section className="service-usage">
        <h2 className='text-paybond'>2. Service Usage</h2>
        <p>2.1 You may only use the Application to transact with a Beneficiary who lives in a country where PayBond offers payment services, as specified on the Application from time to time.</p>
        <p>2.2 Your usage of the Application or the Service does not establish a fiduciary or escrow relationship between you and PayBond. PayBond solely offers a payment service; the funds you instruct PayBond to pay to your Beneficiary are not held as a deposit or in escrow.</p>
        <p>The Service is ordinarily accessible 24 hours a day, 365 days a year, though there may be intermittent periods of unavailability.</p>
      </section>

      <section className="payment-authority">
        <h2 className='text-paybond'>3. Authority to Charge Payment Account</h2>
        <p>3.1 To use the Service, you must instruct PayBond to withdraw the Payments' principal value from your Payment Account, plus any applicable charges. By requesting a Payment, you give PayBond permission to charge your Payment Account.</p>
      </section>

      <section className="payment-execution">
        <h2 className='text-paybond'>4. Execution of Payments</h2>
        <p>4.1 The PayBond Payments Application is typically available 24 hours per day, seven days a week, 365 days a year. Payment services typically begin when you initiate a transaction, and you may be unable to halt or change them.</p>
      </section>

      <section className="refunds">
        <h2 className='text-paybond'>5. Refunds</h2>
        <p>5.1 Refunds are a privilege, not a right, and will be processed according to specific standards. Most refunds are processed in the currency and at the rate of the initial transaction, or at a lower market exchange rate.</p>
      </section>

      <section className="permissible-payments">
        <h2 className='text-paybond'>6. Permissible Payments</h2>
        <p>6.1 The application is not meant for use in any nation or jurisdiction where doing so would be illegal or prohibited by law.</p>
        <p>PayBond may determine a transaction suspicious if it involves:</p>
        <ul>
          <li>Proceeds of crime, fraud, or improper activity</li>
          <li>Exceeding PayBond transaction limits</li>
          <li>Intended to be used as an escrow or delayed payment</li>
        </ul>
      </section>

      <section className="payment-rejection">
        <h2 className='text-paybond'>7. Rejection of Payments</h2>
        <p>PayBond reserves the right to stop, delay, or reject your transaction without prior notice, including cases such as:</p>
        <ul>
          <li>Exceeding PayBond-imposed limits</li>
          <li>Unable to charge the payment account</li>
          <li>Unclear or incomplete payment requests</li>
          <li>Suspected fraud or irregularity</li>
        </ul>
      </section>

      <section className="contact-info">
        <h2 className='text-paybond'>Contact Information</h2>
        <p>For any questions regarding these Terms of Service, please contact:</p>
        <p className="email">Support: <a href="mailto:Support@paybond.com.ng">Support@paybond.com.ng</a></p>
      </section>
    </div>
	</main>
  );
};

export default TermsOfService;