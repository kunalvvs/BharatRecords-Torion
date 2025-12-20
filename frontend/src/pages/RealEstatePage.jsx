import { useState } from 'react'
import './RealEstatePage.css'

function RealEstatePage() {
  const [formData, setFormData] = useState({
    coOwner: '',
    will: '',
    address: '',
    propertyType: '',
    position: '',
    remarks: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className="real-estate-page">
      <div className="page-header-purple">
        <h1>Real Estate Property 🏠</h1>
      </div>

      <form className="form-content">
        <div className="form-question">
          <label>Whether Co-Owner Exist</label>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="coOwner"
                value="yes"
                checked={formData.coOwner === 'yes'}
                onChange={handleChange}
              />
              <span>Yes</span>
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="coOwner"
                value="no"
                checked={formData.coOwner === 'no'}
                onChange={handleChange}
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <div className="form-question">
          <label>Whether Will Exist</label>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="will"
                value="yes"
                checked={formData.will === 'yes'}
                onChange={handleChange}
              />
              <span>Yes</span>
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="will"
                value="no"
                checked={formData.will === 'no'}
                onChange={handleChange}
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <div className="form-group">
          <textarea
            name="address"
            placeholder="Complete address"
            value={formData.address}
            onChange={handleChange}
            rows="4"
            className="form-textarea"
          />
        </div>

        <div className="form-group">
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Type of Property</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="agricultural">Agricultural</option>
          </select>
        </div>

        <div className="form-group">
          <select
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Position of Property</option>
            <option value="urban">Urban</option>
            <option value="rural">Rural</option>
          </select>
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
      </form>
    </div>
  )
}

export default RealEstatePage
