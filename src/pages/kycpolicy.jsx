import React from 'react';
import './PrivacyPolicy.css';

const KYCAMLPolicy = () => {
  return (
	<main className='nk-content pt-5'>
    <div className="privacy-policy-container">
      <header className="privacy-header">
        <h1 className='text-paybond'>PAYBOND KYC/AML POLICY</h1>
      </header>

      <section className="policy-definitions">
        <h2 className='text-paybond'>Definitions</h2>
        <ul>
          <li>
            <strong>Money Laundering (ML):</strong> The process by which criminals attempt to conceal the origin and/or illegitimate ownership of property and assets that are the proceeds of criminal activities.
          </li>
          <li>
            <strong>Terrorism Financing:</strong> Includes both legitimate and illegitimate money characterized by concealment of the origin or intended criminal use of the funds.
          </li>
          <li>
            <strong>Financial Intelligence Unit (FIU):</strong> The Global Financial Intelligence Unit or its local equivalents.
          </li>
          <li>
            <strong>Client:</strong> Any individual or entity with a business relationship with the Company or involved in a financial transaction that may cause significant reputational or other risks to the Company.
          </li>
          <li>
            <strong>Politically Exposed Persons (PEPs):</strong> Individuals with major public roles in any country who are more likely to engage in bribery and corruption due to their position and influence.
          </li>
          <li>
            <strong>Know Your Customer/Business (KYC/B):</strong> This entails obtaining and verifying customer identity, preservation of records of customers, and mandatory disclosure of transactions to authorized statutory bodies.
          </li>
          <li>
            <strong>Enterprise Risk Management (ERM):</strong> Refers to how businesses manage risks and opportunities to achieve their objectives.
          </li>
        </ul>
      </section>

      <section className="policy-mandate">
        <h2 className='text-paybond'>Policy Mandate</h2>
        <p>The Anti-ML & Combating the Financing of Terrorism Policy (AML/CFT Policy) eliminates any transaction that aids in criminal activity and lays out the rules for PayBond Express Ltd adherence to legal and regulatory requirements regarding AML/CFT.</p>
      </section>

      <section className="policy-description">
        <h2 className='text-paybond'>Policy Description</h2>
        <p>Financial crimes are acts that have an adverse impact on the economy, such as money laundering (ML) and terrorism financing. The goal of this policy is to eliminate the negative consequences of such activities while advancing financial markets integrity and stability.</p>
        <p>Maintaining the company's operational effectiveness, reputation, and corporate integrity depends largely on adherence to this policy.</p>
      </section>

      <section className="policy-purpose">
        <h2 className='text-paybond'>Purpose</h2>
        <ul>
          <li>To establish ERM systems to track the company's exposure to financial crime.</li>
          <li>To protect the company against fraud, reputation, and other financial market risks.</li>
          <li>To minimize the risks associated with proceeds of crime.</li>
          <li>To prevent money laundering.</li>
          <li>To guide the standards of conduct and practice that must be followed in the implementation of the KYC.</li>
        </ul>
      </section>

      <section className="compliance">
        <h2 className='text-paybond'>Compliance</h2>
        <ul>
          <li>Create and implement internal controls to prevent criminals from using its facilities for terrorist financing and money laundering.</li>
          <li>Establish an Enterprise Risk Management (ERM) and keep an ERM register.</li>
          <li>Assign an officer with the necessary independence and competence to carry out the company's AML/CFT compliance policy.</li>
          <li>Adhere to relevant financial crime prevention acts and regulations.</li>
          <li>Determine and report suspicious transactions stemming from illegal activities.</li>
          <li>Effectively inform and educate employees on AML/CFT matters.</li>
        </ul>
      </section>

      <section className="know-your-client">
        <h2 className='text-paybond'>Know Your Client (KYC)</h2>
        <p>Before conducting any financial business with a client, the company shall conduct due diligence to identify them and gather pertinent information.</p>
        <ul>
          <li>Provide clients with a KYC compliance form</li>
          <li>Collect required paperwork and data from each client</li>
          <li>Notify regulatory bodies of any suspicious activity or transactions</li>
          <li>Update client data as it becomes available</li>
          <li>Identify and confirm the client's identity using trustworthy, independent source documents</li>
          <li>Check the legal standing of company names, incorporated trustees, and businesses</li>
          <li>Refuse business dealings with "shell companies"</li>
          <li>Perform due diligence checks on higher-risk customers and transactions</li>
        </ul>
      </section>

      <section className="record-keeping">
        <h2 className='text-paybond'>Record Keeping and Reporting</h2>
        <p>The company shall retain customer identification records for a minimum of five years after the account is closed or the relationship is terminated.</p>
        <p>If a criminal transaction is detected, the company shall:</p>
        <ul>
          <li>Identify the principal and beneficiary(s) by drawing up a report</li>
          <li>Take appropriate action to prevent laundering of criminal proceeds</li>
          <li>Send a copy of the report and action taken to the Financial Intelligence Unit (FIU)</li>
        </ul>
      </section>

      <section className="politically-exposed-persons">
        <h2 className='text-paybond'>Politically Exposed Persons</h2>
        <p>Business interactions with PEPs' family members or close acquaintances have the same reputation hazards as PEPs themselves. The Company shall assess the dangers to its business operations while dealing with PEPs.</p>
      </section>

      <section className="contact-info">
        <h2 className='text-paybond'>Contact Information</h2>
        <p>For any questions regarding this KYC/AML Policy, please contact:</p>
        <p className="email">Support: <a href="mailto:Support@paybond.com.ng">Support@paybond.com.ng</a></p>
      </section>
    </div>
	</main>
  );
};

export default KYCAMLPolicy;