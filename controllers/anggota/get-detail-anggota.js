const { Keluarga, Anggota } = require('../../models');

module.exports = async (req, res, next) => {
    try {
        const id = req.params.id;
        const anggota = await Anggota.findByPk(id);
        console.log(anggota);
        res.status(200).json(anggota)
    } catch (error) {
        console.log(error.message);
        res.status(400).json(error.message)
    }
}