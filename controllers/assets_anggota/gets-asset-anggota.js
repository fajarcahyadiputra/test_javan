const { Anggota, AssetAnggota } = require('../../models');
const {Op} = require("sequelize");

module.exports = async (req, res, next) => {
    try {
        const {anggota_id} = req.params;
        const alertStatus = req.flash('alertStatus');
        const alertMessage = req.flash('alertMessage');
        const alert        = {message:alertMessage, status: alertStatus}
        const dataAssets = await AssetAnggota.findAll({
            anggota_id
        });
        const anggota = await Anggota.findByPk(anggota_id);
        res.render('admin/asset_anggota/view_asset_anggota',{dataAssets, anggota, alert, title:"HappyFamily | Assets Anggota"});
    } catch (error) {
        req.flash('alertMessage', error.message);
        req.flash('alertStatus', 'danger');
        res.redirect('/assets-anggota'); 
    }
}