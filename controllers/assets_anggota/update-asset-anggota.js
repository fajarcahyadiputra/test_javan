const { Keluarga, Anggota, AssetAnggota } = require('../../models');
const Joi = require('joi');

module.exports = async (req, res, next) => {
    const dataBody = req.body;
    const anggota_id = dataBody.anggota_id;
    try {
        const schema = Joi.object({
            anggota_id: Joi.string().optional(),
            nama: Joi.string().optional(),
            harga_satuan: Joi.string().optional(),
            jumlah: Joi.string().optional(),
        });
        
        // schema options
        const options = {
            abortEarly: false,
            allowUnknown: true,
            stripUnknown: true
        };
        const { error, value } = schema.validate(req.body, options);
        
        if (error) {
            req.flash('alertMessage', error.message);
            req.flash('alertStatus', 'danger');
            res.redirect('/assets-anggota/'+ anggota_id); 
        } else {
            const asset = await AssetAnggota.findByPk(dataBody.id);
            if(!asset){
                req.flash('alertMessage', "Asset Tidak Di Temukan");
                req.flash('alertStatus', 'danger');
                res.redirect('/assets-anggota/'+ anggota_id);
            }
            Object.keys(dataBody).forEach(key => (asset[key] = dataBody[key]))
            await asset.save();
            req.flash('alertMessage', 'Success Edit Data');
            req.flash('alertStatus', 'success');
            res.redirect('/assets-anggota/'+ anggota_id);
        }

    } catch (error) {
        req.flash('alertMessage', `${error.message}`);
        req.flash('alertStatus', 'danger');
        res.redirect('/assets-anggota/'+ anggota_id); 
    }
}