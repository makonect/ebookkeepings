const express = require('express');
const router = express.Router();
const Bookkeeper = require('../models/Bookkeeper');

// @route   POST /api/bookkeepers/register
// @desc    Register a new bookkeeper
// @access  Public
router.post('/register', async (req, res) => {
  try {
    const {
      fullName,
      phone,
      email,
      address,
      city,
      state,
      zipCode,
      preferredContact,
      companyName,
      companyAddress
    } = req.body;

    // Check if bookkeeper with email already exists
    const existingBookkeeper = await Bookkeeper.findOne({ email });
    if (existingBookkeeper) {
      return res.status(400).json({ 
        message: 'A bookkeeper with this email already exists' 
      });
    }

    // Create new bookkeeper
    const bookkeeper = new Bookkeeper({
      fullName,
      phone,
      email,
      address,
      city,
      state: state.toUpperCase(),
      zipCode,
      preferredContact,
      companyName,
      companyAddress
    });

    await bookkeeper.save();

    res.status(201).json({
      message: 'Bookkeeper registered successfully',
      bookkeeper: {
        id: bookkeeper._id,
        fullName: bookkeeper.fullName,
        email: bookkeeper.email,
        state: bookkeeper.state,
        zipCode: bookkeeper.zipCode
      }
    });

  } catch (error) {
    console.error('Registration error:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ 
        message: 'Validation error', 
        errors 
      });
    }

    res.status(500).json({ 
      message: 'Server error during registration' 
    });
  }
});

// @route   GET /api/bookkeepers
// @desc    Get bookkeepers by state and optionally zip code
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { state, zipCode } = req.query;

    if (!state) {
      return res.status(400).json({ 
        message: 'State is required' 
      });
    }

    // Build query
    const query = { state: state.toUpperCase() };
    if (zipCode) {
      query.zipCode = zipCode;
    }

    const bookkeepers = await Bookkeeper.find(query)
      .select('-__v')
      .sort({ zipCode: 1, fullName: 1 }); // Sort by zip code then name

    res.json(bookkeepers);

  } catch (error) {
    console.error('Fetch bookkeepers error:', error);
    res.status(500).json({ 
      message: 'Server error while fetching bookkeepers' 
    });
  }
});

// @route   GET /api/bookkeepers/all
// @desc    Get all bookkeepers (for admin purposes)
// @access  Public (consider adding authentication in production)
router.get('/all', async (req, res) => {
  try {
    const bookkeepers = await Bookkeeper.find()
      .select('-__v')
      .sort({ state: 1, zipCode: 1, fullName: 1 });
    
    res.json(bookkeepers);
  } catch (error) {
    console.error('Fetch all bookkeepers error:', error);
    res.status(500).json({ 
      message: 'Server error while fetching all bookkeepers' 
    });
  }
});

module.exports = router;