const User = require('../models/user.model')
const {
    success,
    error
} = require('../lib/response')
const bcrypt = require('bcrypt')

async function register(req, res) {
    try {
        //Hash password
        let hash;
        try {
            hash = await bcrypt.hash(req.body.password, 10);            
        } catch (exception) {
            return error(res, 400, "785bfu62v", "Password pelik");
        }
        
        //Save user
        try {
            let newUser = await new User({
                email: req.body.email.trim().toLowerCase(),
                password: hash,
                name: req.body.name,
                age: req.body.age,
                city: req.body.city,
            }).save();
        } catch (exception) {
            console.error(exception)
            return error(res, 400, "88tgasbg", "User tak dapat daftar")
        }

        return success(res)
    } catch (exception) {
        return error(res, 400, "yuidb9s6", "Some error occur")
    }
}

async function login(req, res) {
    try {
        //Find user
        let user
        try {
            user = await User.findOne({email: req.body.email})
        } catch (exception) {
            console.error(exception)
            return error(res, 400, "88tgasbg", "Unknown email")
        }

        //Hash compare password
        let hashCompare;
        try {
            hashCompare = await bcrypt.compare(req.body.password, user.password);            
        } catch (exception) {
            return error(res, 400, "785bfu62v", "Password tidak diketahui");
        }

        if(hashCompare == false) return error(res, 400, "785bfu62v", "Password salah");

        return success(res)
    } catch (exception) {
        return error(res, 400, "yuidb9s6", "Some error occur")
    }
}

module.exports = { register, login }