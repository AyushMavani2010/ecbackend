const adminmodel = require('../model/adminmodel')
exports.addadmin = async (req, res) => {
    var data = await adminmodel.create(req.body)
    res.status(200).json({
        status: "success",
        data
    })
}

exports.adminlogin = async (req, res) => {
    var username = req.body.username
    var password = req.body.password
    try {
        var data = await adminmodel.find({ email: username })
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

    