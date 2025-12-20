import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './InsurancePage.css'

function InsurancePage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    policyNo: '',
    typeOfInsurance: '',
    insuranceCompany: '',
    beneficiary: '',
    addNominee: false,
    remarks: ''
  })
  const [charCount, setCharCount] = useState(0)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
      if (name === 'remarks') {
        setCharCount(value.length)
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Insurance form submitted:', formData)
  }

  return (
    <div className="insurance-page">
      <div className="page-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1>Insurance 🛡️</h1>
      </div>

      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          name="policyNo"
          placeholder="Policy No."
          value={formData.policyNo}
          onChange={handleChange}
          className="form-input"
        />

        <select
          name="typeOfInsurance"
          value={formData.typeOfInsurance}
          onChange={handleChange}
          className="form-select"
        >
          <option value="">Type of Insurance</option>
            <option value="life">Life Insurance</option>
            <option value="health">Health Insurance</option>
            <option value="vehicle">Vehicle Insurance</option>
            <option value="term">Term Insurance</option>
        </select>

        <select
          name="insuranceCompany"
          value={formData.insuranceCompany}
          onChange={handleChange}
          className="form-select"
        >
          <option value="">Enter Your Insurance Company</option>
            <option value="lic">LIC</option>
            <option value="hdfc">HDFC Life</option>
            <option value="icici">ICICI Prudential</option>
            <option value="sbi">SBI Life</option>
        </select>

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

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="addNominee"
            checked={formData.addNominee}
            onChange={handleChange}
          />
          <span>Add Nominee</span>
        </label>

        <div className="form-group">
          <textarea
            name="remarks"
            placeholder="Remarks (in details)"
            value={formData.remarks}
            onChange={handleChange}
            className="form-textarea"
            maxLength={200}
          />
          <div className="char-count">{charCount}/200</div>
        </div>

        <div className="upload-hint">Document should be less than 2 MB</div>

        <button type="button" className="attach-button">
          Attach Document <span className="plus-icon">+</span>
        </button>

        <button type="submit" className="submit-button">Submit</button>

        <div className="section-divider">
          <span>Document Uploaded</span>
        </div>

        <div className="uploaded-document">
          <div className="pdf-icon">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <rect width="60" height="60" rx="8" fill="#F0F0F0"/>
              <path d="M20 15h20l8 8v24a2 2 0 01-2 2H20a2 2 0 01-2-2V17a2 2 0 012-2z" fill="white" stroke="#ddd"/>
              <text x="30" y="38" textAnchor="middle" fill="#E53935" fontSize="12" fontWeight="bold">PDF</text>
            </svg>
          </div>
          <div className="document-info-text">
            <div className="document-name">Name : INSURANCE_22022024...</div>
            <div className="document-date">Date : 22-02-2024</div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default InsurancePage
