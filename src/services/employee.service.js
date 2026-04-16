const employeModel = require('../models/employee.model');

const getAllEmployees = async (departmentId) => {
    const employees = await employeModel.getAllEmployees(departmentId);
    return employees;
};

const createEmployee = async (departmentId, nombre, puesto, salario, fecha_contratacion) => {
    const employee = await employeModel.create(departmentId, nombre, puesto, salario, fecha_contratacion);
    return employee;
};

const updateEmployee = async (id, departmentId, nombre, puesto, salario, fecha_contratacion) => {
    const employee = await employeModel.update(id, departmentId, nombre, puesto, salario, fecha_contratacion);
    return employee;
};

const deleteEmployee = async (id) => {
    await employeModel.deleteById(id); // sin const employee
};

module.exports = {
    getAllEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee
};