import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'
import './MenuPage.css'

function MenuPage() {
  const navigate = useNavigate()

  const menuItems = [
    { icon: '👤', label: 'My Account', color: '#FF9800', path: '/my-account' },
    { icon: '📄', label: 'My Document', color: '#333', path: '/add-document' },
    { icon: '📊', label: 'Report', color: '#4CAF50', path: '/reports' },
    { icon: '⚙️', label: 'Setting', color: '#2196F3', path: '/setting' },
    { icon: '🕒', label: 'Doc Share History', color: '#333', path: '/doc-share-history' },
    { icon: '🎧', label: 'Help Center', color: '#FF9800', path: '/help-center' },
    { icon: '🛡️', label: 'Privacy Policy', color: '#4CAF50', path: '/privacy-policy' },
    { icon: '📝', label: 'Terms of Service', color: '#333', path: '/terms-of-service' },
    { icon: '⚠️', label: 'Disclaimer', color: '#FDB913', path: '/disclaimer' }
  ]

  return (
    <div className="menu-page">
      <div className="page-header">
        <h1>Menu ☰</h1>
      </div>

      <div className="menu-list">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item" onClick={() => navigate(item.path)}>
            <div className="menu-item-left">
              <div className="menu-icon" style={{ background: getIconBackground(item.color) }}>
                <span>{item.icon}</span>
              </div>
              <span className="menu-label">{item.label}</span>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        ))}

        <div className="menu-item logout-item">
          <div className="menu-item-left">
            <div className="menu-icon logout-icon">
              <span>🔴</span>
            </div>
            <span className="menu-label logout-label">Logout</span>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}

function getIconBackground(color) {
  const colorMap = {
    '#FF9800': 'linear-gradient(135deg, #FFB74D 0%, #FF9800 100%)',
    '#333': 'linear-gradient(135deg, #666 0%, #333 100%)',
    '#4CAF50': 'linear-gradient(135deg, #66BB6A 0%, #4CAF50 100%)',
    '#2196F3': 'linear-gradient(135deg, #42A5F5 0%, #2196F3 100%)',
    '#FDB913': 'linear-gradient(135deg, #FFCA28 0%, #FDB913 100%)'
  }
  return colorMap[color] || color
}

export default MenuPage
