const RegistrationModel = require('../models/registration.js')
class AdminController {
    static dashboard = async (req, res) => {
        res.render("admin/dashboard")
    }
    static registration = async (req, res) => {
        res.render("admin/registration")
    }
    static display = async (req, res) => {
        res.render("admin/display")
    }
    static registration_insert = async (req, res) => {
        if (req.file) {
            var imagefile = req.file.filename;
        }
        try {
            const result = new RegistrationModel({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                course: req.body.course,
                address: req.body.address,
                image: imagefile
            })
            await result.save()
            res.redirect("/registration")
        } catch (error) {
            console.log(error)
        }
    }
    static display = async (req, res) => {
        try {
            const result = await RegistrationModel.find()
            // console.log(result)
            res.render("admin/display", { data: result })
        } catch (error) {
            console.log(error)
        }
    }
    static view = async (req, res) => {
        try {
            const result = await RegistrationModel.findById(req.params.id)
            res.render("admin/view", { data: result })
        } catch (error) {
            console.log(error)
        }
    }
    static registration_edit = async (req, res) => {
        try {
            const result = await RegistrationModel.findById(req.params.id)
            res.render("admin/edit", { data: result })
        } catch (error) {
            console.log(error)
        }
    }
    static registration_update = async (req, res) => {
        if (req.file) {
            var imagefile = req.file.filename;
        }
        try {
            const result = await RegistrationModel.findByIdAndUpdate(req.params.id, {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                course: req.body.course,
                address: req.body.address,
                image: imagefile
            })
            await result.save()
            res.redirect("/display")
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = AdminController