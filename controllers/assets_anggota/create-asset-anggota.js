const { AssetAnggota, Anggota } = require('../../models');
const Joi = require('joi');

module.exports = async (req, res, next) => {
    const anggota_id = req.body.anggota_id;
    try {
        const dataBody = req.body;
        const schema = Joi.object({
            anggota_id: Joi.string().required(),
            nama: Joi.string().required(),
            harga_satuan: Joi.string().required(),
            jumlah: Joi.string().required(),
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
            const anggota = await Anggota.findByPk(anggota_id);
            if(!anggota){
                req.flash('alertMessage', "Anggota tidak di temukan");
                req.flash('alertStatus', 'danger');
                res.redirect('/assets-anggota/'+ anggota_id); 
            }
            await AssetAnggota.create(dataBody)
            req.flash('alertMessage', 'Success Add Data');
            req.flash('alertStatus', 'success');
            res.redirect('/assets-anggota/'+ anggota_id);
        }

    } catch (error) {
        req.flash('alertMessage', `${error.message}`);
        req.flash('alertStatus', 'danger');
        res.redirect('/assets-anggota/'+ anggota_id);
    }
}