const { db } = require('../utils/db');


module.exports.getAllStudentsSQL = async () => {
    let sql = 'SELECT * FROM `school`.`students` ORDER BY ID ASC';
    return db.query(sql);
}

module.exports.getStudentSQL = async (arr) => {
    let sql = 'SELECT * FROM students WHERE ID = ?';
    return db.query(sql, arr);
}

module.exports.postStudentSQL = async (arr) => {
    let sql = 'INSERT INTO students VALUES (?,?,?,?)';
    return db.query(sql, arr);
}

module.exports.updateStudentSQL = async (arr) => {
    let sql = 'UPDATE `students` SET `Name` = ?, `Age` = ?, `Status` = ?  WHERE `ID` = ?';
    return db.query(sql, arr);
}

module.exports.deleteStudentSQL = async (arr) => {
    let sql = 'DELETE FROM students WHERE ID = ?';
    return db.query(sql, arr);
}