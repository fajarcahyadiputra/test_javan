const { AssetKeluarga, Keluarga } = require('../../models');

module.exports = async (req, res, next) => {
    try {
        const {keluarga_id} = req.params;
        const alertStatus = req.flash('alertStatus');
        const alertMessage = req.flash('alertMessage');
        const alert        = {message:alertMessage, status: alertStatus}
        const dataAssets = await AssetKeluarga.findAll({
            keluarga_id
        });
        const keluarga = await Keluarga.findByPk(keluarga_id);
        res.render('admin/asset_keluarga/view_asset_keluarga',{dataAssets, keluarga, alert, title:"HappyFamily | Assets Keluarga"});
    } catch (error) {
        req.flash('alertMessage', error.message);
        req.flash('alertStatus', 'danger');
        res.redirect('/assets-keluarga'); 
    }
}