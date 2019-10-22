const router = require('express').Router()
// const {helloName, helloBody} = require('../controllers/hello.controller')
const Hello = require('../controllers/hello.controller')

function helloRouter(params) {
    let hello = new Hello()

    router.get('/:name', (req, res) => {
        //Iisi apa-apa
    })
    router.get('/', hello.helloBody)
    router.get('/body', hello.helloName)
    return router
}

module.exports = helloRouter