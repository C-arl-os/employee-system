const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendance.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/:empleado_id/attendances', authMiddleware.verifyToken, attendanceController.getAllAttendances);
router.post('/:empleado_id/attendances', authMiddleware.verifyToken, attendanceController.createAttendance);
router.put('/:empleado_id/attendances/:id/checkout', authMiddleware.verifyToken, attendanceController.checkOutAttendance);
router.delete('/:empleado_id/attendances/:id', authMiddleware.verifyToken, attendanceController.deleteAttendance);

module.exports = router;