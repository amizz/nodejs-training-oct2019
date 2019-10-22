function success(res, data) {
    return res.status(200).json({
        status: 'OK',
        data: data
    })
}

function error(res, status, code, message) {
    return res.status(status).json({
        status: 'Error',
        code: code,
        message: message || "Bad Request"
    })
}

module.exports = {
    success,
    error
}