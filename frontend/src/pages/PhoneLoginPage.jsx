import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './PhoneLoginPage.css'

function PhoneLoginPage() {
  const navigate = useNavigate()
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (phoneNumber.length === 10) {
      navigate('/otp')
    }
  }

  return (
    <div className="phone-login-page">
      <div className="phone-login-header">
        <button className="back-button" onClick={() => navigate('/login')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
        <img src="/Logo.png" alt="Bharat Records" className="phone-login-logo" />
      </div>

      <h1 className="phone-login-title">Login with Phone</h1>
      <p className="phone-login-subtitle">Enter your mobile number to receive OTP</p>

      <form className="phone-login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="phone-input-wrapper">
            <span className="country-code">+91</span>
            <input
              type="tel"
              placeholder="Enter mobile number"
              value={phoneNumber}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '')
                if (value.length <= 10) {
                  setPhoneNumber(value)
                }
              }}
              className="form-input phone-input"
              maxLength="10"
              required
            />
          </div>
        </div>

        <button 
          type="submit" 
          className="btn-primary"
          disabled={phoneNumber.length !== 10}
        >
          Send OTP
        </button>
      </form>

      <div className="signup-link">
        <span>Don't have an account ? </span>
        <button onClick={() => navigate('/signup')} className="link-button">Signup</button>
      </div>
    </div>
  )
}

export default PhoneLoginPage
