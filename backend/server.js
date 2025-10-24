const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const bookkeeperRoutes = require('./routes/bookkeepers');

const app = express();

// Set SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/bookkeepers', bookkeeperRoutes);

// Contact route with SendGrid
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const msg = {
      to: 'your-email@ebookkeepings.com', // Change to your email
      from: 'noreply@ebookkeepings.com', // Verified SendGrid sender
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await sgMail.send(msg);
    
    res.json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('SendGrid error:', error);
    res.status(500).json({ message: 'Error sending message' });
  }
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ebookkeepings', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Test route to check which code is running
app.get('/api/debug', (req, res) => {
  res.json({ 
    message: 'Debug endpoint',
    timestamp: new Date().toISOString(),
    version: '1.0'
  });
});