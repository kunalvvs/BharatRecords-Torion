import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './DocumentUploadTemplate.css'

function DocumentUploadTemplate({ title, icon, documentType }) {
  const navigate = useNavigate()
  const [uploadedDocs, setUploadedDocs] = useState([
    { id: 1, name: `${documentType}_22022024.pdf`, date: '22-02-2024' },
  ])

  return (
    <div className="document-upload-page">
      <div className="page-header-purple">
        <button className="back-button" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1>{title} {icon}</h1>
      </div>

      <div className="upload-section">
        <div className="upload-area">
          <div className="upload-icon">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <rect x="10" y="20" width="50" height="40" rx="4" stroke="#666" strokeWidth="2" strokeDasharray="4 4"/>
              <path d="M25 35L32 28L39 35" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="32" y1="28" x2="32" y2="48" stroke="#666" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="55" cy="25" r="15" fill="white" stroke="#666" strokeWidth="2"/>
              <line x1="55" y1="18" x2="55" y2="32" stroke="#666" strokeWidth="2" strokeLinecap="round"/>
              <line x1="48" y1="25" x2="62" y2="25" stroke="#666" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="upload-hint">Document should be less than 2 MB</p>
        </div>

        <button className="btn-attach-document">
          <span>Attach Document</span>
          <span className="plus-icon">+</span>
        </button>

        <button className="btn-submit-purple">Submit</button>
      </div>

      <div className="uploaded-docs-section">
        <div className="section-divider">
          <span>Document Uploaded</span>
        </div>

        <div className="uploaded-docs-list">
          {uploadedDocs.map((doc) => (
            <div key={doc.id} className="uploaded-doc-card">
              <div className="doc-pdf-icon">
                <div className="pdf-icon-wrapper">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <rect width="60" height="60" rx="8" fill="#F5F5F5"/>
                    <path d="M20 15L40 15L40 45L20 45Z" fill="white"/>
                    <rect x="22" y="32" width="16" height="8" rx="2" fill="#FF4444"/>
                    <text x="30" y="38" fontSize="8" fill="white" textAnchor="middle" fontWeight="bold">PDF</text>
                  </svg>
                </div>
              </div>

              <div className="doc-info">
                <p className="doc-name">Name : {doc.name}</p>
                <p className="doc-date">Date : {doc.date}</p>
              </div>

              <div className="doc-actions">
                <button className="action-btn-edit">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="20" fill="white"/>
                    <path d="M15 25L17 25L24 18L22 16L15 23Z" fill="#3D1F8F"/>
                    <path d="M22 16L24 18L25 17L23 15Z" fill="#3D1F8F"/>
                  </svg>
                </button>
                <button className="action-btn-delete">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="20" fill="white"/>
                    <path d="M15 16L15 27L25 27L25 16Z" stroke="#3D1F8F" strokeWidth="2" fill="none"/>
                    <line x1="13" y1="16" x2="27" y2="16" stroke="#3D1F8F" strokeWidth="2"/>
                    <path d="M17 14L17 13L23 13L23 14" stroke="#3D1F8F" strokeWidth="2"/>
                  </svg>
                </button>
                <button className="action-btn-download">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="20" fill="white"/>
                    <line x1="20" y1="13" x2="20" y2="24" stroke="#3D1F8F" strokeWidth="2"/>
                    <path d="M16 21L20 25L24 21" stroke="#3D1F8F" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    <line x1="14" y1="27" x2="26" y2="27" stroke="#3D1F8F" strokeWidth="2"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DocumentUploadTemplate
