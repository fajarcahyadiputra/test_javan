const { Keluarga } = require('../../models');
const Joi = require('joi');

module.exports = async (req, res, next) => {
    try {
        const dataBody = req.body;
        const schema = Joi.object({
            nama_keluarga: Joi.string().required(),
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
             await Keluarga.create(dataBody)
            req.flash('alertMessage', 'Success Add Data');
            req.flash('alertStatus', 'success');
            res.redirect('/keluarga');
        }

    } catch (error) {
        req.flash('alertMessage', `${error.message}`);
        req.flash('alertStatus', 'danger');
        res.redirect('/keluarga'); 
    }
}