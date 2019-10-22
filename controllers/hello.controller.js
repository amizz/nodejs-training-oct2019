function helloName(req, res) {
    console.log(process.env.CONTOH)
    let message = `Hello, ${req.params.name}!`
    res.status(200).json({
        status: "OK",
        message: message,
        env: process.env
    })
}
function helloQuery(req, res) {
    let message = `Hello, ${req.query.name}!`
    res.status(200).json({
        status: "OK",
        message: message
    })
}

function helloBody(req, res) {
    let message = `Hello, ${req.body.name}!`
    res.status(200).json({
        status: "OK",
        message: message
    })
}

module.exports = { helloName, helloBody }