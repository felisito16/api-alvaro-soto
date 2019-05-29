const express = require("express")
const router = express.Router()

const mysqlCOnnection = require("../database")

router.get("/", (req, res) => {
    mysqlCOnnection.query("SELECT * FROM employees", (err, rows, fields) => {
        if (!err) {
            res.json(rows)
        } else {
            console.log(err);
        }
    })
})

router.get("/:id", (req, res) => {
    const { id } = req.params;
    console.log(id);
    mysqlCOnnection.query("SELECT * FROM employees"
        + " WHERE id = ?", [id], (err, rows, fields) => {
            if (!err) {
                res.json(rows[0])
            } else {
                console.log(err);
            }
        })
})

router.post("/ ", (req, res) => {
    const { id, name, salary } = req.body;
    mysqlCOnnection.query("INSERT INTO employees"
        + " VALUES id = ?", [id], (err, rows, fields) => {
            if (!err) {
                res.json(rows)
            } else {
                console.log(err);
            }
        })
})

module.exports = router