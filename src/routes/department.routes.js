const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/department.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/', authMiddleware.verifyToken, departmentController.getAllDepartments);
router.post('/', authMiddleware.verifyToken, departmentController.createDepartment);
router.put('/:id', authMiddleware.verifyToken, departmentController.updateDepartment);
router.delete('/:id', authMiddleware.verifyToken, departmentController.deleteDepartment);

module.exports = router;
