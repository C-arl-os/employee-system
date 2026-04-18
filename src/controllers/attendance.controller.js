const attendanceService = require('../services/attendance.service');

const getAllAttendances = async (req, res) => {
    const { empleado_id } = req.params;
    try {
        const attendances = await attendanceService.getAllAttendances(empleado_id);
        res.json(attendances);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las asistencias' });
    }
};

const createAttendance = async (req, res) => {
    const { empleado_id } = req.params;
    try {        const attendance = await attendanceService.createAttendance(empleado_id);
        res.status(201).json(attendance);
    } catch (error) {
        res.status(500).json({ error: 'Error al registrar la asistencia' });
    }
};

const checkOutAttendance = async (req, res) => {
    const { id } = req.params;
    try {
        const attendance = await attendanceService.checkOutAttendance(id);
        res.json(attendance);
    } catch (error) {
        res.status(500).json({ error: 'Error al registrar la salida' });
    }
};

const deleteAttendance = async (req, res) => {
    const { id } = req.params;
    try {
        await attendanceService.deleteAttendance(id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la asistencia' });
    }   
};

module.exports = {
    getAllAttendances,
    createAttendance,
    checkOutAttendance,
    deleteAttendance
};