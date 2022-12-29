const { Keluarga, Anggota } = require('../../models');

module.exports = async (req, res, next) => {
    const {keluarga_id, id} = req.query;
    try {
        const anggota = await Anggota.findByPk(id);
        if(!anggota){
            req.flash('alertMessage', "Anggota Tidak Di Temukan");
            req.flash('alertStatus', 'danger');
            res.redirect('/anggota/'+ keluarga_id);
        }
        const anak = await Anggota.count({
            where: {
                parent_id: id
            }
        })
        if(anak > 0){
            req.flash('alertMessage', "Tidak Bisa DI Hapus, Karena Masih Memiliki Anak");
            req.flash('alertStatus', 'danger');
            res.redirect('/anggota/'+ keluarga_id);
            return false;
        }
        await anggota.destroy();
        req.flash('alertMessage', `Anggota Berhasil Di Hapus`);
        req.flash('alertStatus', 'success');
        res.redirect('/anggota/'+ keluarga_id); 
    } catch (error) {
        req.flash('alertMessage', error.message);
        req.flash('alertStatus', 'danger');
        res.redirect('/anggota/'+keluarga_id); 
    }
}