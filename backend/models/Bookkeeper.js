const mongoose = require('mongoose');

// US States array for validation
const usStates = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA',
  'KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ',
  'NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT',
  'VA','WA','WV','WI','WY'
];

const BookkeeperSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
    minlength: [2, 'Full name must be at least 2 characters long']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    validate: {
      validator: function(v) {
        // US phone number validation: (123) 456-7890 or 123-456-7890 or 1234567890
        return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(v);
      },
      message: 'Please enter a valid US phone number'
    }
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
    trim: true
  },
  city: {
    type: String,
    required: [true, 'City is required'],
    trim: true
  },
  state: {
    type: String,
    required: [true, 'State is required'],
    uppercase: true,
    enum: {
      values: usStates,
      message: 'Please select a valid US state'
    }
  },
  zipCode: {
    type: String,
    required: [true, 'Zip code is required'],
    match: [/^\d{5}(-\d{4})?$/, 'Please enter a valid US zip code']
  },
  preferredContact: {
    type: String,
    required: [true, 'Preferred contact method is required'],
    enum: ['email', 'phone']
  },
  companyName: {
    type: String,
    trim: true
  },
  companyAddress: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

// Add index for efficient searching
BookkeeperSchema.index({ state: 1, zipCode: 1 });

module.exports = mongoose.model('Bookkeeper', BookkeeperSchema);