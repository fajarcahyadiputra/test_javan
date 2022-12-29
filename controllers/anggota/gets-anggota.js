const { Anggota, Keluarga } = require('../../models');
const {Op} = require("sequelize");

module.exports = async (req, res, next) => {
    try {
        const {keluarga_id} = req.params;
        const alertStatus = req.flash('alertStatus');
        const alertMessage = req.flash('alertMessage');
        const alert        = {message:alertMessage, status: alertStatus}
        const dataAnggota = await Anggota.findAll({
            keluarga_id,
            include: {
                model: Anggota,
                as: 'anak',
                required: false
              }
        });
        const keluarga = await Keluarga.findByPk(keluarga_id);
        const all_anggota = await Anggota.findAll({
           where: {
            keluarga_id,
            parent_id: {
                [Op.eq]: 0
            }
           }
        });
        res.render('admin/anggota/view_anggota',{dataAnggota, keluarga, alert, all_anggota, title:"HappyFamily | Anggota Keluarga"});
    } catch (error) {
        req.flash('alertMessage', error.message);
        req.flash('alertStatus', 'danger');
        res.redirect('/anggota'); 
    }
}