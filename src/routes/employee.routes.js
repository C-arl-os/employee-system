const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/:departmentId/employees', authMiddleware.verifyToken, employeeController.getAllEmployees);
router.post('/:departmentId/employees', authMiddleware.verifyToken, employeeController.createEmployee);
router.put('/:departmentId/employees/:id', authMiddleware.verifyToken, employeeController.updateEmployee);
router.delete('/:departmentId/employees/:id', authMiddleware.verifyToken, employeeController.deleteEmployee);

module.exports = router;