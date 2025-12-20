import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SIPPage.css'

function SIPPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fundName: '',
    sipAmount: '',
    startDate: '',
    endDate: '',
    frequency: '',
    bankAccount: '',
    remarks: ''
  })
  const [charCount, setCharCount] = useState(0)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (name === 'remarks') {
      setCharCount(value.length)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('SIP form submitted:', formData)
  }

  return (
    <div className="sip-page">
      <div className="page-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1>SIP (Systematic Investment Plan) 📈</h1>
      </div>

      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fundName"
          placeholder="Mutual Fund Name"
          value={formData.fundName}
          onChange={handleChange}
          className="form-input"
        />

        <input
          type="number"
          name="sipAmount"
          placeholder="SIP Amount (₹)"
          value={formData.sipAmount}
          onChange={handleChange}
          className="form-input"
        />

        <input
          type="date"
          name="startDate"
          placeholder="Start Date"
          value={formData.startDate}
          onChange={handleChange}
          className="form-input"
        />

        <input
          type="date"
          name="endDate"
          placeholder="End Date (Optional)"
          value={formData.endDate}
          onChange={handleChange}
          className="form-input"
        />

        <select
          name="frequency"
          value={formData.frequency}
          onChange={handleChange}
          className="form-select"
        >
          <option value="">SIP Frequency</option>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
          <option value="weekly">Weekly</option>
        </select>

        <input
          type="text"
          name="bankAccount"
          placeholder="Bank Account Number"
          value={formData.bankAccount}
          onChange={handleChange}
          className="form-input"
        />

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
      </form>
    </div>
  )
}

export default SIPPage
