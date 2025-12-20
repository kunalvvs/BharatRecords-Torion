import { useState } from 'react'
import './BankDepositPage.css'

function BankDepositPage() {
  const [formData, setFormData] = useState({
    accountNumber: '',
    ifscCode: '',
    depositType: '',
    beneficiary: '',
    addNominee: false,
    remarks: ''
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  return (
    <div className="bank-deposit-page">
      <div className="page-header-purple">
        <h1>Bank Deposit 🏦</h1>
      </div>

      <form className="form-content">
        <div className="form-group">
          <input
            type="text"
            name="accountNumber"
            placeholder="Account Number*"
            value={formData.accountNumber}
            onChange={handleChange}
            className="form-input-purple"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="ifscCode"
            placeholder="IFSC Code*"
            value={formData.ifscCode}
            onChange={handleChange}
            className="form-input-purple"
            required
          />
        </div>

        <div className="form-group">
          <select
            name="depositType"
            value={formData.depositType}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Type of Bank Deposit</option>
            <option value="savings">Savings Account</option>
            <option value="current">Current Account</option>
            <option value="fixed">Fixed Deposit</option>
            <option value="recurring">Recurring Deposit</option>
          </select>
        </div>

        <div className="form-group">
          <select
            name="beneficiary"
            value={formData.beneficiary}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Enter your Beneficiary</option>
            <option value="self">Self</option>
            <option value="spouse">Spouse</option>
            <option value="child">Child</option>
          </select>
        </div>

        <div className="checkbox-group">
          <label className="checkbox-label">
            <span>Add Nominee</span>
            <input
              type="checkbox"
              name="addNominee"
              checked={formData.addNominee}
              onChange={handleChange}
              className="form-checkbox"
            />
          </label>
        </div>

        <div className="form-group">
          <textarea
            name="remarks"
            placeholder="Remarks (in details)"
            value={formData.remarks}
            onChange={handleChange}
            rows="5"
            className="form-textarea"
          />
          <div className="char-count">0/200</div>
        </div>

        <p className="upload-hint">Document should be less than 2 MB</p>

        <button type="button" className="btn-attach-document">
          <span>Attach Document</span>
          <span className="plus-icon">+</span>
        </button>

        <button type="submit" className="btn-submit-purple">
          Submit
        </button>

        <div className="uploaded-section-divider">
          <span>Document Uploaded</span>
        </div>

        <div className="uploaded-doc-preview">
          <div className="doc-pdf-icon-small">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <rect width="60" height="60" rx="8" fill="#F5F5F5"/>
              <path d="M20 15L40 15L40 45L20 45Z" fill="white"/>
              <rect x="22" y="32" width="16" height="8" rx="2" fill="#FF4444"/>
              <text x="30" y="38" fontSize="8" fill="white" textAnchor="middle" fontWeight="bold">PDF</text>
            </svg>
          </div>
          <div className="doc-info-small">
            <p className="doc-name-small">Name : BANKDEPOSIT_22022...</p>
            <p className="doc-date-small">Date : 22-02-2024</p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default BankDepositPage
