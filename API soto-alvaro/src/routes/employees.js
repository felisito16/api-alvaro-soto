const express = require("express")
const router = express.Router()

const mysqlCOnnection = require("../database")

router.get("/", (req, res) => {
    mysqlCOnnection.query("SELECT * FROM employees", (err, rows, fields) => {
        if(!err) {
            res.json(rows)
        } else {
            console.log(err);
        }
    })
})

module.exports = router