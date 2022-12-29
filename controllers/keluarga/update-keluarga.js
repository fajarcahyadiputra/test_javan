const { Keluarga } = require('../../models');
const Joi = require('joi');

module.exports = async (req, res, next) => {
    try {
        const dataBody = req.body;
        const schema = Joi.object({
            nama_keluarga: Joi.string().optional(),
            keterangan: Joi.string().optional()
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
            res.redirect('/keluarga'); 
        } else {
            const keluarga = await Keluarga.findByPk(dataBody.id);
            if(!keluarga){
                req.flash('alertMessage', "Keluarga Tidak Di Temukan");
                req.flash('alertStatus', 'danger');
                res.redirect('/keluarga');
            }
            Object.keys(dataBody).forEach(key => (keluarga[key] = dataBody[key]))
            await keluarga.save();
            req.flash('alertMessage', 'Success Edit Data');
            req.flash('alertStatus', 'success');
            res.redirect('/keluarga');
        }

    } catch (error) {
        req.flash('alertMessage', `${error.message}`);
        req.flash('alertStatus', 'danger');
        res.redirect('/keluarga'); 
    }
}