const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const ADDRESS = 'TYkjPo3NmngcJjczJtHi1P1S5BgVZPphQr';
const API_KEY = '73394c1989b23306b299f7d70bac6eaed2a1d56f350f3cdf797b38f4cfd38bbf';

app.get('/check-payment', async (req, res) => {
    try {
        const { data } = await axios.get(`https://toncenter.com/api/v2/get_transactions?address=${ADDRESS}&limit=10&api_key=${API_KEY}`);
        const payments = data.result || [];
        res.json({ received: payments.length > 0, payments });
    } catch (e) {
        res.status(500).json({ error: 'Failed to fetch transactions' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});