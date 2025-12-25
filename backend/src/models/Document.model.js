import mongoose from 'mongoose';

const documentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  category: {
    type: String,
    required: true,
    enum: ['personal', 'investment', 'insurance', 'loans', 'retirement'],
    index: true
  },
  documentType: {
    type: String,
    required: true,
    enum: [
      // Personal
      'PAN', 'AADHAR', 'DRIVING_LICENSE', 'PASSPORT', 'VOTER_ID',
      'MARKESHEET', 'CERTIFICATES', 'VEHICLE_RC', 'RESUME',
      'MARRIAGE_CERTIFICATE', 'CARDS', 'MEDICAL_RECORDS',
      // Investment
      'REAL_ESTATE', 'POST_OFFICE', 'BANK_DEPOSITS', 'MUTUAL_FUND',
      'SIP', 'DEMAT_DETAILS', 'OTHER_INVESTMENT',
      // Insurance
      'LIFE_INSURANCE', 'HEALTH_INSURANCE', 'VEHICLE_INSURANCE',
      'HOME_INSURANCE', 'OTHER_INSURANCE',
      // Loans
      'HOME_LOAN', 'CAR_LOAN', 'PERSONAL_LOAN', 'EDUCATION_LOAN',
      'BUSINESS_LOAN', 'OTHER_LOAN',
      // Retirement
      'EPF', 'PPF', 'NPS', 'PENSION', 'GRATUITY', 'OTHER_RETIREMENT'
    ],
    index: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  fileName: {
    type: String,
    required: true
  },
  fileUrl: {
    type: String,
    required: true
  },
  fileType: {
    type: String,
    required: true,
    enum: ['pdf', 'jpg', 'jpeg', 'png']
  },
  fileSize: {
    type: Number,
    required: true
  },
  s3Key: {
    type: String,
    required: true
  },
  uploadDate: {
    type: Date,
    default: Date.now
  },
  metadata: {
    documentNumber: String,
    issueDate: Date,
    expiryDate: Date,
    issuingAuthority: String,
    description: String
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  tags: [String],
  shareHistory: [{
    sharedWith: String,
    sharedAt: Date,
    expiresAt: Date,
    accessCount: {
      type: Number,
      default: 0
    }
  }],
  isDeleted: {
    type: Boolean,
    default: false
  },
  deletedAt: {
    type: Date
  }
}, {
  timestamps: true
});

// Indexes for faster queries
documentSchema.index({ user: 1, category: 1, documentType: 1 });
documentSchema.index({ user: 1, isDeleted: 1 });
documentSchema.index({ tags: 1 });

const Document = mongoose.model('Document', documentSchema);

export default Document;
