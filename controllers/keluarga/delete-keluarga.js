const { Keluarga } = require('../../models');

module.exports = async (req, res, next) => {
    try {
        const id = req.query.id;
        const keluarga = await Keluarga.findByPk(id);
        if(!keluarga){
            req.flash('alertMessage', "Keluarga Tidak Di Temukan");
            req.flash('alertStatus', 'danger');
            res.redirect('/keluarga');
        }
        await keluarga.destroy();
        req.flash('alertMessage', `Keluarga Berhasil Di Hapus`);
        req.flash('alertStatus', 'success');
        res.redirect('/keluarga'); 
    } catch (error) {
        req.flash('alertMessage', error.message);
        req.flash('alertStatus', 'danger');
        res.redirect('/keluarga'); 
    }
}