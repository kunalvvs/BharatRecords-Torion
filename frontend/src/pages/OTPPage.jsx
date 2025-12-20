import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './OTPPage.css'

function OTPPage() {
  const navigate = useNavigate()
  const [otp, setOtp] = useState('')
  const [timer, setTimer] = useState(56)
  const [canResend, setCanResend] = useState(false)

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(interval)
    } else {
      setCanResend(true)
    }
  }, [timer])

  const handleVerify = () => {
    navigate('/home')
  }

  const handleResend = () => {
    if (canResend) {
      setTimer(56)
      setCanResend(false)
      setOtp('')
    }
  }

  return (
    <div className="otp-page">
      <div className="otp-header">
        <img src="/Logo.png" alt="Bharat Records" className="otp-logo" />
      </div>

      <div className="otp-content">
        <div className="otp-input-group">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
            className="otp-input"
            maxLength="6"
          />
        </div>

        <div className="otp-actions">
          <button 
            className={`btn-resend ${canResend ? 'active' : ''}`}
            onClick={handleResend}
            disabled={!canResend}
          >
            Resend OTP
          </button>
        </div>

        <p className="otp-timer">
          Resend OTP after : {String(Math.floor(timer / 60)).padStart(2, '0')}:{String(timer % 60).padStart(2, '0')}
        </p>

        <button className="btn-verify" onClick={handleVerify}>
          Verify OTP
        </button>
      </div>
    </div>
  )
}

export default OTPPage
