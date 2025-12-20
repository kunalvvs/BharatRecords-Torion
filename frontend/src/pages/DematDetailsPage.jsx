import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './DematDetailsPage.css'

function DematDetailsPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    brokerName: '',
    beneficiary: '',
    emailLinked: false,
    mobileLinked: false,
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
    console.log('Demat form submitted:', formData)
  }

  return (
    <div className="demat-details-page">
      <div className="page-header">
        <h1>Demat Details 😃</h1>
      </div>

      <form className="demat-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="brokerName"
          placeholder="Broker Name*"
          value={formData.brokerName}
          onChange={handleChange}
          className="form-input"
        />

        <div className="select-wrapper">
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

        <label className="checkbox-label">
          <span>Email Linked with Demat</span>
          <input
            type="checkbox"
            name="emailLinked"
            checked={formData.emailLinked}
            onChange={handleChange}
            className="checkbox"
          />
        </label>

        <label className="checkbox-label">
          <span>Mobile Number linked with Demat</span>
          <input
            type="checkbox"
            name="mobileLinked"
            checked={formData.mobileLinked}
            onChange={handleChange}
            className="checkbox"
          />
        </label>

        <label className="checkbox-label">
          <span>Add Nominee</span>
          <input
            type="checkbox"
            name="addNominee"
            checked={formData.addNominee}
            onChange={handleChange}
            className="checkbox"
          />
        </label>

        <div className="textarea-wrapper">
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

        <div className="document-info">Document should be less than 2 MB</div>

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
            <div className="document-name">Name : DMAT_22022024.pdf</div>
            <div className="document-date">Date : 22-02-2024</div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default DematDetailsPage
