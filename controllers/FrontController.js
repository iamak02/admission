const UserModel = require("../models/user.js")
const bcrypt = require('bcrypt');
class FrontController {
    static login = async (req, res) => {
        res.render("front/login", { message: req.flash("error") })
    }
    static signup = async (req, res) => {
        res.render("front/signup", { message: req.flash("error") })
    }
    static user_insert = async (req, res) => {
        // try {
        //     const result = new UserModel({
        //         name: req.body.name,
        //         email: req.body.email,
        //         password: req.body.password
        //     })
        //     await result.save()
        //     res.render("front/signup")
        //     // console.log(req.body)
        // } catch (error) {
        //     console.log(error)
        // }
        const { name, email, password, cpassword } = req.body
        const user = await UserModel.findOne({ email: email })
        if (user) {
            //using connect-flash package
            //here error is a kind of runtime var i.e. storing message
            req.flash('error', 'email already exists')
            return res.redirect("/signup")
        }
        else {
            if (name && email && password && cpassword) {
                if (password == cpassword) {
                    try {
                        const salt = await bcrypt.genSalt(10)
                        const hashPassword = await bcrypt.hash(password, salt)
                        const result = await UserModel({
                            name: name,
                            email: email,
                            password: hashPassword
                        })
                        await result.save()
                        return res.redirect("/")
                    } catch (error) {
                        console.log(error)
                    }
                } else {
                    req.flash('error', "password and confirm doesn't match")
                    return res.redirect("/signup")
                }
            }
            else {
                req.flash('error', 'all fields are required')
                return res.redirect("/signup")
            }
        }
    }
    static verify_login = async (req, res) => {
        try {
            const { email, password } = req.body
            if (email && password) {
                const user = await UserModel.findOne({ email: email })
                if (user != null) {
                    const isMatch = await bcrypt.compare(password, user.password)
                    if ((user.email == email) && isMatch) {
                        const isMatch = await bcrypt.compare(password, user.password)
                        if ((user.email == email) && isMatch) {
                            res.redirect("/dashboard")
                        }
                    }
                    else {
                        req.flash('error', 'email or password is not vaild')
                        return res.redirect("/")
                    }
                }
                else {
                    req.flash('error', 'you are not a register user')
                    return res.redirect("/")
                }
            }
            else {
                req.flash('error', 'all fields are required')
                return res.redirect("/")
            }
            // console.log(email,password)
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = FrontController