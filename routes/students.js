// backend/routes/students.js
const express = require('express');
const Student = require('../models/Student');
const router = express.Router();

router.get('/', async (req, res) => {
    const students = await Student.findAll();
    res.json(students);
});

router.post('/', async (req, res) => {
    const student = await Student.create(req.body);
    res.json(student);
});

module.exports = router;