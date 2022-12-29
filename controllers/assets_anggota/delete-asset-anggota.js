const {  AssetAnggota } = require('../../models');

module.exports = async (req, res, next) => {
    const {anggota_id, id} = req.query;
    try {
        const asset = await AssetAnggota.findByPk(id);
        if(!asset){
            req.flash('alertMessage', "Asset Tidak Di Temukan");
            req.flash('alertStatus', 'danger');
            res.redirect('/assets-anggota/'+ anggota_id);
        }
        await asset.destroy();
        req.flash('alertMessage', `Asset Berhasil Di Hapus`);
        req.flash('alertStatus', 'success');
        res.redirect('/assets-anggota/'+ anggota_id); 
    } catch (error) {
        req.flash('alertMessage', error.message);
        req.flash('alertStatus', 'danger');
        res.redirect('/assets-anggota/'+anggota_id); 
    }
}