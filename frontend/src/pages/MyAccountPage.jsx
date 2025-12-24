import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './MyAccountPage.css'

function MyAccountPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    clientId: '',
    name: '',
    dob: '',
    aadhaarNumber: '',
    panNumber: '',
    mobileNumber: '',
    email: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const navigationLinks = [
    { label: 'My Nominees', path: '/my-nominees' },
    { label: 'My Benefeciaries', path: '/my-beneficiaries' },
    { label: 'My Subscription', path: '/my-subscriptions' },
    { label: 'My Referrals', path: '/my-referrals' }
  ]

  return (
    <div className="my-account-page">
      <div className="page-header">
        <h1>My Account 👤</h1>
      </div>

      <div className="account-content">
        <div className="profile-avatar">
          <div className="avatar-circle">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="40" fill="#3D1F8F"/>
              <path d="M40 45c8.284 0 15-6.716 15-15s-6.716-15-15-15-15 6.716-15 15 6.716 15 15 15zM40 50c-13.333 0-25 6.667-25 15v5h50v-5c0-8.333-11.667-15-25-15z" fill="#2D165F"/>
            </svg>
          </div>
        </div>

        <div className="account-form">
          <div className="form-row">
            <label className="form-label">Client Id :</label>
            <input
              type="text"
              name="clientId"
              value={formData.clientId}
              onChange={handleChange}
              className="form-input-field"
            />
          </div>

          <div className="form-row">
            <label className="form-label">Name :</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input-field"
            />
          </div>

          <div className="form-row">
            <label className="form-label">D.O.B :</label>
            <input
              type="text"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="form-input-field"
            />
          </div>

          <div className="form-row">
            <label className="form-label">Aadhaar Number :</label>
            <input
              type="text"
              name="aadhaarNumber"
              value={formData.aadhaarNumber}
              onChange={handleChange}
              className="form-input-field"
            />
          </div>

          <div className="form-row">
            <label className="form-label">PAN Number:</label>
            <input
              type="text"
              name="panNumber"
              value={formData.panNumber}
              onChange={handleChange}
              className="form-input-field"
            />
          </div>

          <div className="form-row">
            <label className="form-label">Mobile Number : ✏️</label>
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="form-input-field editable"
            />
          </div>

          <button className="update-phone-btn" onClick={() => navigate('/update-phone-otp')}>Update Phone Number</button>

          <div className="form-row">
            <label className="form-label">Email : ✏️</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input-field editable"
            />
          </div>

          <button className="update-email-btn" onClick={() => navigate('/update-phone-otp')}>Update Email</button>
        </div>

        <div className="navigation-links">
          {navigationLinks.map((link, index) => (
            <div key={index} className="nav-link" onClick={() => navigate(link.path)}>
              <span className="nav-label">{link.label}</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="#3D1F8F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyAccountPage
