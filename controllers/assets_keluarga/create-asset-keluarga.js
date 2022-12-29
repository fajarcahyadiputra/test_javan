const { AssetKeluarga, Anggota, Keluarga } = require('../../models');
const Joi = require('joi');

module.exports = async (req, res, next) => {
    const keluarga_id = req.body.keluarga_id;
    try {
        const dataBody = req.body;
        const schema = Joi.object({
            keluarga_id: Joi.string().required(),
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
            res.redirect('/assets-keluarga/'+ keluarga_id);
        } else {
            const keluarga = await Keluarga.findByPk(keluarga_id);
            if(!keluarga){
                req.flash('alertMessage', "Keluarga tidak di temukan");
                req.flash('alertStatus', 'danger');
                res.redirect('/assets-keluarga/'+ keluarga_id); 
            }
            await AssetKeluarga.create(dataBody)
            req.flash('alertMessage', 'Success Add Data');
            req.flash('alertStatus', 'success');
            res.redirect('/assets-keluarga/'+ keluarga_id);
        }

    } catch (error) {
        req.flash('alertMessage', `${error.message}`);
        req.flash('alertStatus', 'danger');
        res.redirect('/assets-keluarga/'+ keluarga_id);
    }
}