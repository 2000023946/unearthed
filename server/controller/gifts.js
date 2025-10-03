import pool  from '../config/database.js'


const getGifts = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM gifts ORDER BY id ASC')
        res.status(200).json(results.rows)
    } catch (err) {
        res.status(409).json( { error: error.message } )
    }
} 

const getGiftById = async (req, res) => {
    try {
        const { giftId } = req.params; // get id from route
        const results = await pool.query(
            'SELECT * FROM gifts WHERE id = $1', 
            [giftId] // parameterized query to avoid SQL injection
        );

        if (results.rows.length === 0) {
            return res.status(404).json({ message: 'Gift not found' });
        }

        res.status(200).json(results.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getGiftByName = async (req, res) => {
    try {
        const { giftName } = req.params; // get name from route
        const results = await pool.query(
            'SELECT * FROM gifts WHERE name ILIKE $1', 
            [`%${giftName}%`] // parameterized query with wildcards
        );

        if (results.rows.length === 0) {
            return res.status(404).json({ message: 'No gifts found matching that name' });
        }

        res.status(200).json(results.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}




export default {
    getGifts,
    getGiftById,
    getGiftByName
}