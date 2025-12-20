import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoansLiabilityPage.css'

function LoansLiabilityPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    loanTakenFrom: '',
    typeOfLoan: '',
    remarks: ''
  })
  const [charCount, setCharCount] = useState(0)
  const [uploadedDocuments, setUploadedDocuments] = useState([
    { name: 'LOAN_22022024.pdf', date: '22-02-2024' },
    { name: 'LOAN_22022024.pdf', date: '22-02-2024' }
  ])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (name === 'remarks') {
      setCharCount(value.length)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Loans form submitted:', formData)
  }

  return (
    <div className="loans-page">
      <div className="page-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1>Loans (Liability) 🏦💳</h1>
      </div>

      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="form-input"
        />

        <select
          name="loanTakenFrom"
          value={formData.loanTakenFrom}
          onChange={handleChange}
          className="form-select"
        >
          <option value="">Loan Taken From</option>
            <option value="bank">Bank</option>
            <option value="nbfc">NBFC</option>
            <option value="personal">Personal Loan</option>
            <option value="business">Business Loan</option>
        </select>

        <select
          name="typeOfLoan"
          value={formData.typeOfLoan}
          onChange={handleChange}
          className="form-select"
        >
          <option value="">Type of Loan</option>
            <option value="home">Home Loan</option>
            <option value="car">Car Loan</option>
            <option value="personal">Personal Loan</option>
            <option value="education">Education Loan</option>
            <option value="business">Business Loan</option>
        </select>

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
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M17.5 11.25V15C17.5 15.6904 16.9404 16.25 16.25 16.25H3.75C3.05964 16.25 2.5 15.6904 2.5 15V11.25M13.75 6.25L10 2.5M10 2.5L6.25 6.25M10 2.5V11.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Attach Document
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
            <div className="document-details">
              <div className="doc-name">Name : {doc.name}</div>
              <div className="doc-date">Date : {doc.date}</div>
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

export default LoansLiabilityPage
