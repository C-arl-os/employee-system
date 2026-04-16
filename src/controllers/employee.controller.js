const employeeService = require('../services/employee.service');

const getAllEmployees = async (req, res) => {
    try {
        const { departmentId } = req.params;
        const employees = await employeeService.getAllEmployees(departmentId);
        res.json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createEmployee = async (req, res) => {
    try {
        const { departmentId } = req.params;
        const { nombre, puesto, salario, fecha_contratacion } = req.body;
        const employee = await employeeService.createEmployee(departmentId, nombre, puesto, salario, fecha_contratacion);
        res.status(201).json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateEmployee = async (req, res) => {
    try {
        const { id,departmentId } = req.params;  
        const { nombre, puesto, salario, fecha_contratacion } = req.body;
        const employee = await employeeService.updateEmployee(id, departmentId, nombre, puesto, salario, fecha_contratacion);
        res.json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }   
};

const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        await employeeService.deleteEmployee(id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee
};