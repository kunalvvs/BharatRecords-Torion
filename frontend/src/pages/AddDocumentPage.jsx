import { useNavigate } from 'react-router-dom'
import './AddDocumentPage.css'

function AddDocumentPage() {
  const navigate = useNavigate()

  const categories = [
    { id: 1, name: 'Personal', icon: '👤', color: '#FF9800', path: '/personal' },
    { id: 2, name: 'Investment', icon: '💰', color: '#4CAF50', path: '/investment' },
    { id: 3, name: 'Insurance', icon: '🛡️', color: '#00BCD4', path: '/insurance' },
    { id: 4, name: 'Loans(Liability)', icon: '💳', color: '#FFC107', path: '/loans' },
    { id: 5, name: 'Retirement Claims', icon: '💵', color: '#8BC34A', path: '/retirement' },
  ]

  return (
    <div className="add-document-page">
      <div className="page-header-purple">
        <h1>Add Documents 📄</h1>
      </div>

      <div className="document-categories-list">
        {categories.map((category) => (
          <button
            key={category.id}
            className="doc-category-item"
            onClick={() => navigate(category.path)}
          >
            <div className="doc-category-icon" style={{ backgroundColor: category.color }}>
              <span>{category.icon}</span>
            </div>
            <span className="doc-category-name">{category.name}</span>
            <span className="arrow-right">→</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default AddDocumentPage
