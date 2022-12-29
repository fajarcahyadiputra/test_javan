const {  AssetKeluarga } = require('../../models');

module.exports = async (req, res, next) => {
    const {keluarga_id, id} = req.query;
    try {
        const asset = await AssetKeluarga.findByPk(id);
        if(!asset){
            req.flash('alertMessage', "Asset Tidak Di Temukan");
            req.flash('alertStatus', 'danger');
            res.redirect('/assets-keluarga/'+ keluarga_id);
        }
        await asset.destroy();
        req.flash('alertMessage', `Asset Berhasil Di Hapus`);
        req.flash('alertStatus', 'success');
        res.redirect('/assets-keluarga/'+ keluarga_id); 
    } catch (error) {
        req.flash('alertMessage', error.message);
        req.flash('alertStatus', 'danger');
        res.redirect('/assets-keluarga/'+keluarga_id); 
    }
}