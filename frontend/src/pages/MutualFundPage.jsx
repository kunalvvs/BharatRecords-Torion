import { useState } from 'react'
import './MutualFundPage.css'

function MutualFundPage() {
  const [formData, setFormData] = useState({
    mutualFundType: '',
    dmatAccount: '',
    brokerName: '',
    companyName: '',
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
    <div className="mutual-fund-page">
      <div className="page-header-purple">
        <h1>Mutual Funds and SIP 💰📈</h1>
      </div>

      <form className="form-content">
        <div className="form-group">
          <select
            name="mutualFundType"
            value={formData.mutualFundType}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Type of Mutual fund</option>
            <option value="equity">Equity Fund</option>
            <option value="debt">Debt Fund</option>
            <option value="hybrid">Hybrid Fund</option>
            <option value="index">Index Fund</option>
          </select>
        </div>

        <div className="form-group">
          <input
            type="text"
            name="dmatAccount"
            placeholder="DMAT Account No./BOID*"
            value={formData.dmatAccount}
            onChange={handleChange}
            className="form-input-purple"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="brokerName"
            placeholder="Broker Name*"
            value={formData.brokerName}
            onChange={handleChange}
            className="form-input-purple"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="companyName"
            placeholder="Name of the Company/fund House"
            value={formData.companyName}
            onChange={handleChange}
            className="form-input-purple"
          />
        </div>

        <div className="form-group">
          <select
            name="beneficiary"
            value={formData.beneficiary}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Enter Your Beneficiary</option>
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
      </form>
    </div>
  )
}

export default MutualFundPage
