const mysql2 = require("mysql2")

export default class Api {
   static connection = mysql2.createConnection({
        host: "",
        user: "",
        password: "",
        port: "",
        database: ""
    })

    static addResult(resultData) {
        this.connection.connect(err => console.log(err))

        this.connection.query('INSERT INTO test_results (ideal_course, adm, ds, meca, edf) VALUES (?,?,?,?,?)',
            [resultData.idealCourse,
            resultData.adm,
            resultData.ds,
            resultData.meca,
            resultData.edf]
            , (err) => {
                if (err) throw err
            })

        this.connection.end()
    }
}