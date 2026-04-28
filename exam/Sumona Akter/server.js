require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const productsRoutes = require('./routes/products');
const servicesRoutes = require('./routes/services');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware (4 MARKS)
app.use(cors()); // Cross-origin requests
app.use(express.json()); // Parse JSON

// Business Info Route
app.get('/api/business', (req, res) => {
  res.json({
    name: "SS Computer Technology",
    tagline: "Smart Solutions for Your Digital Needs",
    phone: process.env.BUSINESS_PHONE,
    email: process.env.BUSINESS_EMAIL,
    address: "Kaliganj, Dhaka, Bangladesh",
    social: {
      facebook: "facebook.com/sscomputertech",
      instagram: "instagram.com/sscomputertech"
    }
  });
});

// Routes (4 MARKS)
app.use('/api/auth', authRoutes);      // REGISTER & LOGIN
app.use('/api/products', productsRoutes);
app.use('/api/services', servicesRoutes);

// Health Check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'SS Computer Technology API is running!',
    timestamp: new Date().toISOString()
  });
});

// 404 Handler
app.use('*', (req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 SS Computer Technology API`);
  console.log(`📱 http://localhost:${PORT}`);
  console.log(`✅ Health: http://localhost:${PORT}/health`);
  console.log(`🔐 Auth: http://localhost:${PORT}/api/auth/register`);
  console.log(`🖥️ Products: http://localhost:${PORT}/api/products`);
});