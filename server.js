
require('dotenv').config({ path: "./process.env" });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.WEBSITE_PORT || 3001;


// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const smtpConfig = {
  host: process.env.SERVER_HOST,
  port: process.env.SERVER_PORT, // Use 465 for SSL or 587 for TLS
  secure: false, // Set to true if using SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS // Replace with your email password
  },
  tls: {
    rejectUnauthorized: false,
    ciphers: 'TLSv1.2', // Use TLS version 1.2
    secureProtocol: 'TLSv1_2_method'
  }};

const transporter = nodemailer.createTransport(smtpConfig);

app.post('/contact', async (req, res) => {
  const { email, message } = req.body;
  
  console.log('Received request to /contact endpoint');
  console.log('Email:', email);
  console.log('Message:', message);

  if (!email || !message) {
    console.log('Error: Email or message missing');
    return res.status(400).json({ error: 'Please provide both email and message.' });
  }



  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'New Contact Form Submission',
    text: `Message: ${message}`
  };

  try {
    console.log('Sending email...');
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.setHeader('Content-Type', 'application/json'); // Set the Content-Type header
    res.status(200).json({ success: 'Message sent!' });
  } catch (error) {
    console.error('Error while sending email:', error);
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});