// backend/routes/reports.js
const express = require('express');
const Report = require('../models/Report');
const router = express.Router();

router.get('/', async (req, res) => {
    const reports = await Report.findAll();
    res.json(reports);
});

router.post('/generate', async (req, res) => {
    const report = await Report.create(req.body);
    res.json(report);
});

module.exports = router;