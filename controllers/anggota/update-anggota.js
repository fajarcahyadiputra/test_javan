const { Keluarga, Anggota } = require('../../models');
const Joi = require('joi');

module.exports = async (req, res, next) => {
    const dataBody = req.body;
    const keluarga_id = dataBody.keluarga_id;
    try {
        const schema = Joi.object({
            keluarga_id: Joi.string().optional(),
            parent_id: Joi.string().optional(),
            nama: Joi.string().optional(),
            jenis_kelamin: Joi.string().optional(),
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
            res.redirect('/anggota/'+keluarga_id); 
        } else {
            const anggota = await Anggota.findByPk(dataBody.id);
            if(!anggota){
                req.flash('alertMessage', "Anggota Tidak Di Temukan");
                req.flash('alertStatus', 'danger');
                res.redirect('/anggota/'+keluarga_id);
            }
            Object.keys(dataBody).forEach(key => (anggota[key] = dataBody[key]))
            await anggota.save();
            req.flash('alertMessage', 'Success Edit Data');
            req.flash('alertStatus', 'success');
            res.redirect('/anggota/'+keluarga_id);
        }

    } catch (error) {
        req.flash('alertMessage', `${error.message}`);
        req.flash('alertStatus', 'danger');
        res.redirect('/anggota/'+keluarga_id); 
    }
}