const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { sendContactEmail } = require('../utils/email');

// Contact Schema
const contactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  message: { type: String, required: true },
  type: { 
    type: String, 
    required: true, 
    enum: ['general', 'support', 'feedback', 'partnership'] 
  }
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

// POST /api/contact - Save contact form
router.post('/', async (req, res) => {
  try {
    const { fullName, email, phone, message, type } = req.body;

    if (!fullName || !email || !message || !type) {
      return res.status(400).json({
        success: false,
        message: 'All required fields must be provided'
      });
    }

    const contact = new Contact({ fullName, email, phone, message, type });
    await contact.save();

    res.status(201).json({
      success: true,
      message: 'Message sent successfully!'
    });

  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while sending message'
    });
  }
});

module.exports = router;