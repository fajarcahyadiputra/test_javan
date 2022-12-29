const { User } = require('../../models')
const Joi = require('joi');

module.exports = async (req, res, next) => {
    try {
        res.render('admin/dashboard/view_dashboard', {
            title: "Staycation | Dashboard",
        });
    } catch (error) {
        console.log(error.message);
        next(error)
    }
}