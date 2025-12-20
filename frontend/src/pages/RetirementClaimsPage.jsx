import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './RetirementClaimsPage.css'

function RetirementClaimsPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    typeOfDues: '',
    pfAccountNo: '',
    employerName: '',
    employerAddress: '',
    employerContact: '',
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
    console.log('Retirement claims form submitted:', formData)
  }

  return (
    <div className="retirement-page">
      <div className="page-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1>Retirement Claims 💵🏦</h1>
      </div>

      <form className="form-container" onSubmit={handleSubmit}>
        <select
          name="typeOfDues"
          value={formData.typeOfDues}
          onChange={handleChange}
          className="form-select"
        >
          <option value="">Type of Dues</option>
            <option value="pf">Provident Fund</option>
            <option value="gratuity">Gratuity</option>
            <option value="pension">Pension</option>
            <option value="leave">Leave Encashment</option>
        </select>

        <input
          type="text"
          name="pfAccountNo"
          placeholder="PF Account No."
          value={formData.pfAccountNo}
          onChange={handleChange}
          className="form-input"
        />

        <input
          type="text"
          name="employerName"
          placeholder="Name of the employer"
          value={formData.employerName}
          onChange={handleChange}
          className="form-input"
        />

        <input
          type="text"
          name="employerAddress"
          placeholder="Employer Office Address"
          value={formData.employerAddress}
          onChange={handleChange}
          className="form-input"
        />

        <input
          type="text"
          name="employerContact"
          placeholder="Employer Contact Details (Optional)"
          value={formData.employerContact}
          onChange={handleChange}
          className="form-input"
        />

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

export default RetirementClaimsPage
