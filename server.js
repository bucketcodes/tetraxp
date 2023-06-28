require('dotenv').config({ path: "./process.env" });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.WEBSITE_PORT;

let submissionCount = 0;

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
    /*ciphers: 'TLSv1.2', // Use TLS version 1.2
    secureProtocol: 'TLSv1_2_method'*/
  }};

const transporter = nodemailer.createTransport(smtpConfig);

// Enable CORS for all routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.post('/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  console.log('Received request to /contact endpoint');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Phone:', phone);
  console.log('Message:', message);

  if (!email || !message) {
    console.log('Error: Email or message missing');
    return res.status(400).json({ error: 'Please provide both email and message.' });
  }

  const mailOptions = {
    from: 'contact@tetraxp.com',
    to: process.env.EMAIL_USER,
    subject: `Contact Form Submission #${++submissionCount}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <pre></pre>
      <p>${message}</p>
    `
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
  console.log("Server is running on Port: " + PORT);
});
/*app.get('/contact', function (req, res, next) {
  console.log("Not a post request")
  res.redirect('/contact/');
  next();
});*/