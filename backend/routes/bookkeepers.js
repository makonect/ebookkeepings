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
// @desc    Get bookkeepers by zip code ONLY
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { zipCode } = req.query;
    
    console.log('Search query - zipCode:', zipCode);
    
    // Validate zip code
    if (!zipCode) {
      return res.status(400).json({ 
        message: 'Zip code is required' 
      });
    }
    
    if (!/^\d{5}$/.test(zipCode)) {
      return res.status(400).json({ 
        message: 'Valid 5-digit zip code is required' 
      });
    }
    
    // Search ONLY by zip code - no state required
    const bookkeepers = await Bookkeeper.find({ zipCode: zipCode });
    
    console.log(`Found ${bookkeepers.length} bookkeepers for zip code ${zipCode}`);
    
    res.json(bookkeepers);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/bookkeepers/all
// @desc    Get all bookkeepers (for admin purposes)
// @access  Public
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

// @route   GET /api/bookkeepers/test
// @desc    Test endpoint to verify API is working
// @access  Public
router.get('/test', (req, res) => {
  res.json({ message: 'Bookkeepers API is working!' });
});

module.exports = router;