const regmodel = require('../model/regmodel')
exports.adduser = async (req, res) => {
    var data = await regmodel.create(req.body)
    res.status(200).json({
        status: "success",
        data
    })
}

exports.login = async (req, res) => {
    var username = req.body.username
    var password = req.body.password
    try {
        var data = await regmodel.find({ email: username })
        if (data[0].password == password) {
            res.status(200).json({
                status: "login Successful"
            })
        } else {
            res.status(200).json({
                status: "invalid password"
            })
        }
    } catch (error) {
        res.status(200).json({
            status: "inavalid username"
        })
    }
}
