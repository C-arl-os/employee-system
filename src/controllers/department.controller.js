const departamentService = require('../services/department.service');

const getAllDepartments = async (req, res) => {
    try {
        const departments = await departamentService.getAllDepartments(req.user.userId);
        res.json(departments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createDepartment = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;
        const department = await departamentService.createDepartment(req.user.userId, nombre, descripcion);
        res.status(201).json(department);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateDepartment = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion } = req.body;
        const department = await departamentService.updateDepartment(id, req.user.userId, nombre, descripcion);
        res.json(department);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteDepartment = async (req, res) => {
    try {
        const { id } = req.params;
        await departamentService.deleteDepartment(id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};  

module.exports = {
    getAllDepartments,
    createDepartment,
    updateDepartment,
    deleteDepartment
};