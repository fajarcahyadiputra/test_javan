const { Keluarga } = require('../../models');

module.exports = async (req, res, next) => {
    try {
        const alertStatus = req.flash('alertStatus');
        const alertMessage = req.flash('alertMessage');
        const alert        = {message:alertMessage, status: alertStatus}
        const dataKeluarga = await Keluarga.findAll();
        res.render('admin/keluarga/view_keluarga',{dataKeluarga, alert, title:"HappyFamily | Keluarga"});
    } catch (error) {
        req.flash('alertMessage', error.message);
        req.flash('alertStatus', 'danger');
        res.redirect('/keluarga'); 
    }
}