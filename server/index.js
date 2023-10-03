const express = require("express")
const bodyParser = require("body-parser")
import Api from './Api'

const app = express()

const port = 8080

app.use(bodyParser.json())

app.listen(port)

app.post('/', (req, res) => {
    const resultData = {
        idealCourse: req.body.idealCourse,
        adm: req.body.adm,
        ds: req.body.ds,
        meca: req.body.meca,
        edf: req.body.edf
    }

    Api.addResult(resultData)
})
