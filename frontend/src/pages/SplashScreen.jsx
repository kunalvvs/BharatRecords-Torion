import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './SplashScreen.css'

function SplashScreen() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login')
    }, 3000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <div className="splash-logo-container">
          <img src="/Logo.png" alt="Bharat Records" className="splash-logo" />
        </div>
        
        <div className="splash-shield">
          <svg width="280" height="280" viewBox="0 0 280 280" fill="none">
            <path d="M140 40L80 70V130C80 175 105 215 140 240C175 215 200 175 200 130V70L140 40Z" 
                  fill="url(#shieldGradient)" opacity="0.9"/>
            <defs>
              <linearGradient id="shieldGradient" x1="80" y1="70" x2="200" y2="240" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FF9966"/>
                <stop offset="50%" stopColor="#0F4C5C"/>
                <stop offset="100%" stopColor="#F44336"/>
              </linearGradient>
            </defs>
            
            <rect x="115" y="120" width="50" height="60" rx="5" fill="#0F4C5C"/>
            <rect x="125" y="130" width="30" height="35" rx="3" fill="#FFD700"/>
            <circle cx="140" cy="110" r="15" fill="#8DB4C8"/>
            <circle cx="140" cy="110" r="10" fill="#0F4C5C"/>
          </svg>
        </div>

        <h1 className="splash-title">Store Your Data with Bharat Record</h1>
        
        <div className="splash-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  )
}

export default SplashScreen
