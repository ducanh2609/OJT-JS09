const express = require('express');
const { getAllStudents, getStudent, postStudent, updateStudent, deleteStudent } = require('../controllers/app.controllers');
const router = express.Router();

// CRUD:

router.get('/api/v1/students', getAllStudents)

router.get('/api/v1/students/:id', getStudent)

router.post('/api/v1/students', postStudent)

router.put('/api/v1/students/:id', updateStudent)

router.delete('/api/v1/students/:id', deleteStudent)






module.exports = router