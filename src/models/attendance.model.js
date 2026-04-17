
const pool = require('../config/database');

const getAll = async (empleado_id) => {
    const result = await pool.query(
        'SELECT * FROM asistencias WHERE empleado_id = $1',
        [empleado_id]
    );
    return result.rows;
};

const create = async (empleado_id) => {
    const result = await pool.query(
        'INSERT INTO asistencias (fecha, hora_entrada, empleado_id) VALUES (CURRENT_DATE, CURRENT_TIME, $1) RETURNING *',
        [empleado_id]
    );
    return result.rows[0];
};

const checkOut = async (id) => {
    const result = await pool.query(
        'UPDATE asistencias SET hora_salida = CURRENT_TIME WHERE id = $1 RETURNING *',
        [id]
    );
    return result.rows[0];
};

const deleteById = async (id) => {
    await pool.query('DELETE FROM asistencias WHERE id = $1', [id]);
};

module.exports = {
    getAll,
    create,
    checkOut,
    deleteById
};
