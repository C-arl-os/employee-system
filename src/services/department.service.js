const departmentModel = require('../models/department.model');

const getAllDepartments = async (user_id) => {
    const departments = await departmentModel.getAllDepartments(user_id);
    return departments;
};

const createDepartment = async (user_id, nombre, descripcion) => {
    const department = await departmentModel.create(user_id, nombre, descripcion);
    return department;
};

const updateDepartment = async (id, user_id, nombre, descripcion) => {
    const department = await departmentModel.update(id, user_id, nombre, descripcion);
    return department;
};

const deleteDepartment = async (id) => {
    await departmentModel.deleteById(id); // sin const department
};

module.exports = {
    getAllDepartments,
    createDepartment,
    updateDepartment,
    deleteDepartment
};