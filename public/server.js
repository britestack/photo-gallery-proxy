const express = require('express');
const path = require('path');
const cors = require('cors');

const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(express.static('public'));
app.use(cors());
app.use(express.json());

//Gallery
app.use('/api/homeinfo', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));
app.use('/api/homeimages', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));

//Similar Carousel
app.use('/api/homes/similar', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));
app.use('/api/homes/nearby', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));

//Local Review
app.use('/reviews', createProxyMiddleware({ target: 'http://localhost:3004', changeOrigin: true }));
app.use('/features', createProxyMiddleware({ target: 'http://localhost:3004', changeOrigin: true }));

//Calculator
app.use('/mortgages', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true }));
app.use('/homes', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true }));

app.listen(3000, () => {console.log('Proxy listening on Port 3000');});