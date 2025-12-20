import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './OtherInvestmentPage.css'

function OtherInvestmentPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    investmentName: '',
    beneficiary: '',
    addNominee: false,
    remarks: ''
  })
  const [charCount, setCharCount] = useState(0)
  const [uploadedDocuments, setUploadedDocuments] = useState([
    { name: 'OTHERINVESTMENT_2...', date: '22-02-2024' },
    { name: 'OTHERINVESTMENT_2...', date: '22-02-2024' }
  ])

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
    console.log('Other investment form submitted:', formData)
  }

  return (
    <div className="other-investment-page">
      <div className="page-header">
        <h1>Other Investment 💰📈</h1>
      </div>

      <form className="other-investment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="investmentName"
          placeholder="Name of the investment"
          value={formData.investmentName}
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

        {uploadedDocuments.map((doc, index) => (
          <div key={index} className="uploaded-document">
            <div className="pdf-icon">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <rect width="60" height="60" rx="8" fill="#F0F0F0"/>
                <path d="M20 15h20l8 8v24a2 2 0 01-2 2H20a2 2 0 01-2-2V17a2 2 0 012-2z" fill="white" stroke="#ddd"/>
                <text x="30" y="38" textAnchor="middle" fill="#E53935" fontSize="12" fontWeight="bold">PDF</text>
              </svg>
            </div>
            <div className="document-info-section">
              <div className="document-name">Name : {doc.name}</div>
              <div className="document-date">Date : {doc.date}</div>
            </div>
            <div className="document-actions">
              <button className="action-btn edit-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M14 2l4 4-10 10H4v-4L14 2z" stroke="#3D1F8F" strokeWidth="2" fill="none"/>
                </svg>
              </button>
              <button className="action-btn delete-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 5h14M8 5V3h4v2M6 5v11a2 2 0 002 2h4a2 2 0 002-2V5" stroke="#3D1F8F" strokeWidth="2" fill="none"/>
                </svg>
              </button>
              <button className="action-btn download-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 3v10m0 0l-4-4m4 4l4-4M3 15v2a2 2 0 002 2h10a2 2 0 002-2v-2" stroke="#3D1F8F" strokeWidth="2" fill="none"/>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </form>
    </div>
  )
}

export default OtherInvestmentPage
