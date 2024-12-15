import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
	<main className='nk-content pt-5'>
    <div className="privacy-policy-container">
      <header className="privacy-header">
        <h1 className='text-paybond'>PAYBOND PRIVACY POLICY</h1>
      </header>

      <section className="policy-intro">
        <p>PAYBOND respects its users' privacy. When you use our website and mobile applications, we gather, use, disclose, and protect your information as described in this Privacy Policy. Kindly read carefully our privacy statement.</p>
        <p><strong>PLEASE DO NOT USE ANY OF OUR MOBILE APPLICATIONS OR WEBSITES IF YOU DISAGREE WITH THE TERMS OF THIS PRIVACY POLICY.</strong></p>
      </section>

      <section className="policy-updates">
        <h2 className='text-paybond'>Policy Updates</h2>
        <p>We maintain the right, at any time and for any cause, to modify this privacy statement. If there are any changes, we'll notify you by email and update this Privacy Policy's "Last Updated" date.</p>
        <p>It is recommended that you periodically examine this policy document to stay up to speed on any revisions.</p>
      </section>

      <section className="information-collection">
        <h2 className='text-paybond'>Collection of Information</h2>
        <div className="info-types">
          <h3 className='text-paybond'>Types of Information Collected</h3>
          <ul>
            <li>
              <strong>Personal Data:</strong> Demographic and personally identifiable information voluntarily provided during application-related activities.
            </li>
            <li>
              <strong>Financial Data:</strong> Payment method details collected during transactions.
            </li>
            <li>
              <strong>Mobile Device Data:</strong> Device details including ID, model, operating system, and location.
            </li>
          </ul>
        </div>
      </section>

      <section className="information-use">
        <h2 className='text-paybond'>Use of Your Information</h2>
        <p>We use the collected information to:</p>
        <ul>
          <li>Create and manage your account</li>
          <li>Process payments and transactions</li>
          <li>Provide personalized user experience</li>
          <li>Send updates and communications</li>
          <li>Improve application functionality</li>
          <li>Prevent fraud and illegal activities</li>
        </ul>
      </section>

      <section className="information-disclosure">
        <h2 className='text-paybond'>Disclosure of Your Information</h2>
        <p>We may share your information in the following circumstances:</p>
        <ul>
          <li>To comply with legal requirements</li>
          <li>With third-party service providers</li>
          <li>For marketing communications (with your consent)</li>
          <li>During user interactions</li>
          <li>In case of business restructuring or sale</li>
        </ul>
      </section>

      <section className="security">
        <h2 className='text-paybond'>Security of Your Information</h2>
        <p>We employ administrative, technical, and physical security measures to protect your personal information. However, no security mechanism is completely impregnable.</p>
      </section>

      <section className="user-options">
        <h2 className='text-paybond'>Your Information Options</h2>
        <div className="account-management">
          <h3 className='text-paybond'>Account Management</h3>
          <p>To manage your account:</p>
          <ul>
            <li>Log in to account settings</li>
            <li>Update your information</li>
            <li>Delete your account</li>
          </ul>
        </div>
      </section>

      <section className="contact-info">
        <h2 className='text-paybond'>Contact Information</h2>
        <p>For any questions or concerns regarding this Privacy Policy, please contact:</p>
        <p className="email">Support: <a href="mailto:Support@paybond.com.ng">Support@paybond.com.ng</a></p>
      </section>
    </div>
	</main>
  );
};

export default PrivacyPolicy;