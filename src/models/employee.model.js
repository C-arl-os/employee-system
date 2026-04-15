const pool = require('../config/database');

const getAllEmployees = async (departmentId) => {
    const result = await pool.query(
        'SELECT * FROM empleados WHERE departamento_id = $1',
        [departmentId]
    );
    return result.rows;
};

const create = async (departmentId, nombre, puesto, salario, fecha_contratacion) => {
    const result = await pool.query(
        'INSERT INTO empleados (departamento_id, nombre, puesto, salario, fecha_contratacion) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [departmentId, nombre, puesto, salario, fecha_contratacion]
    );
    return result.rows[0];
};

const update = async (id, departmentId, nombre, puesto, salario, fecha_contratacion) => {
    const result = await pool.query(
        'UPDATE empleados SET nombre = $1, puesto = $2, salario = $3, fecha_contratacion = $4 WHERE id = $5 AND departamento_id = $6 RETURNING *',
        [nombre, puesto, salario, fecha_contratacion, id, departmentId]
    );
    return result.rows[0];
};

const deleteById = async (id) => {
    await pool.query('DELETE FROM empleados WHERE id = $1', [id]);
};

module.exports = {
    getAllEmployees,
    create,
    update,
    deleteById
};