const attendanceModel = require('../models/attendance.model');

const getAllAttendances = async (empleado_id) => {
    const attendances = await attendanceModel.getAll(empleado_id);
    return attendances;
};

const createAttendance = async (empleado_id) => {
    const attendance = await attendanceModel.create(empleado_id);
    return attendance;
};

const checkOutAttendance = async (id) => {
    const attendance = await attendanceModel.checkOut(id);
    return attendance;
};

const deleteAttendance = async (id) => {
    await attendanceModel.deleteById(id);  
};

module.exports = {
    getAllAttendances,
    createAttendance,
    checkOutAttendance,
    deleteAttendance
};