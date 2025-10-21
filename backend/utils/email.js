const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Test Email Function
const sendTestEmail = async () => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: '✅ eBookKeepings Email Test',
    html: '<h1>Email Working! 🚀</h1><p>Your server is ready!</p>'
  };
  await transporter.sendMail(mailOptions);
  console.log('✅ Test email sent!');
};

// 1. REGISTRATION EMAIL (to Admin + Bookkeeper)
const sendRegistrationEmail = async (bookkeeper, adminEmail) => {
  // Email to ADMIN
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: adminEmail,
    subject: `🎉 New Bookkeeper Registered - ${bookkeeper.fullName}`,
    html: `
      <h1>New Bookkeeper Registration!</h1>
      <p><strong>Name:</strong> ${bookkeeper.fullName}</p>
      <p><strong>Email:</strong> ${bookkeeper.email}</p>
      <p><strong>Phone:</strong> ${bookkeeper.phoneNumber}</p>
      <p><strong>Zip:</strong> ${bookkeeper.zipCode}</p>
      <p><strong>Company:</strong> ${bookkeeper.companyName || 'N/A'}</p>
      <hr>
      <p><em>View all: <a href="https://ebookkeepings.com/listing?zip=${bookkeeper.zipCode}">Bookkeepers in ${bookkeeper.zipCode}</a></em></p>
    `
  });

  // Email to BOOKKEEPER
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: bookkeeper.email,
    subject: '✅ Welcome to eBookKeepings!',
    html: `
      <h1>Hi ${bookkeeper.fullName}! 🎉</h1>
      <p>Thanks for joining <strong>eBookKeepings.com</strong>!</p>
      <p>Your profile is now <strong>LIVE</strong> and clients can find you in <strong>${bookkeeper.zipCode}</strong>.</p>
      <hr>
      <h3>📞 How Clients Contact You:</h3>
      <p><strong>Preferred:</strong> ${bookkeeper.preferredContact.toUpperCase()}</p>
      <ul>
        <li>Email: ${bookkeeper.email}</li>
        <li>Phone: ${bookkeeper.phoneNumber}</li>
      </ul>
      <hr>
      <p><a href="https://ebookkeepings.com" style="background:#62b58f;color:white;padding:15px 30px;text-decoration:none;border-radius:5px">View Your Listing</a></p>
      <p>Best,<br>eBookKeepings Team</p>
    `
  });
};

// 2. CONTACT FORM EMAIL (to Admin)
const sendContactEmail = async (contact, adminEmail) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: adminEmail,
    subject: `📧 New Contact Form - ${contact.type.toUpperCase()}`,
    html: `
      <h1>New Contact Submission!</h1>
      <p><strong>Type:</strong> ${contact.type}</p>
      <p><strong>Name:</strong> ${contact.fullName}</p>
      <p><strong>Email:</strong> ${contact.email}</p>
      <p><strong>Phone:</strong> ${contact.phone || 'N/A'}</p>
      <hr>
      <h3>Message:</h3>
      <p>${contact.message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><a href="mailto:${contact.email}" style="background:#62b58f;color:white;padding:10px 20px;text-decoration:none;border-radius:5px">Reply Now</a></p>
    `
  });

  // Auto-reply to user
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: contact.email,
    subject: 'Thank You! We Received Your Message',
    html: `
      <h1>Hi ${contact.fullName}! 👋</h1>
      <p>Thank you for contacting eBookKeepings!</p>
      <p>We'll respond within <strong>24 hours</strong>.</p>
      <p>Best regards,<br>eBookKeepings Team</p>
    `
  });
};

module.exports = {
  sendTestEmail,
  sendRegistrationEmail,
  sendContactEmail
};