const pool = require('../config/database');

const getAllDepartments = async (user_id) => {
    const res = await pool.query(
        'SELECT * FROM departamentos WHERE user_id = $1', 
        [user_id]  // ✅ dinámico
    );
    return res.rows;
};

const create = async (user_id, nombre, descripcion) => {
    const res = await pool.query(
        'INSERT INTO departamentos (user_id, nombre, descripcion) VALUES ($1, $2, $3) RETURNING *',
        [user_id, nombre, descripcion]
    );
    return res.rows[0];
};

const update = async (id, user_id, nombre, descripcion) => {
    const res = await pool.query(
        'UPDATE departamentos SET nombre = $1, descripcion = $2 WHERE id = $3 AND user_id = $4 RETURNING *',
        [nombre, descripcion, id, user_id]
    );
    return res.rows[0];
};

const deleteById = async (id) => {
    await pool.query('DELETE FROM departamentos WHERE id = $1', [id]);
};

module.exports = {
    getAllDepartments,
    create,
    update,
    deleteById
};