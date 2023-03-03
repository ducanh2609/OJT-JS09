const { getAllStudentsSQL, getStudentSQL, postStudentSQL, updateStudentSQL, deleteStudentSQL } = require('../models/app.models')



module.exports.getAllStudents = async (req, res) => {
    try {
        let [record] = await getAllStudentsSQL();
        let page = req.query.page;
        let perPage = req.query.perPage;
        let name = req.query.search;
        let result = [];
        if (name) {
            result = record.filter((item) => item.Name.includes(name))
        }
        if (page && perPage) {
            for (let i = (page - 1) * perPage; i < (page * perPage); i++) {
                if (i >= record.length) {
                    break;
                } else {
                    result.push(record[i])
                }
            }
        }
        if (!name && !page) res.send(record)
        else res.send(result)
    } catch (error) {
        console.log(error);
    }

}

module.exports.getStudent = async (req, res) => {
    try {
        let [record] = await getStudentSQL(req.params.id);
        res.send(record)
    } catch (error) {
        console.log(error);
    }
}

module.exports.postStudent = async (req, res) => {
    try {
        let { id, name, age, status } = req.body;
        console.log(req.body);
        let arr = [id, name, age, status];
        await postStudentSQL(arr)
        res.send({ message: 'Post successfully' })
    } catch (error) {
        console.log(error);
    }

}

module.exports.updateStudent = async (req, res) => {
    try {
        let { name, age, status } = req.body;
        let arr = [name, +age, status, +req.params.id]
        await updateStudentSQL(arr)
        res.send({ message: 'Update successfully' })
    } catch (error) {
        console.log(error);

    }
}

module.exports.deleteStudent = async (req, res) => {
    try {
        await deleteStudentSQL([req.params.id])
        res.send({ message: 'Delete successfully' })
    } catch (error) {
        console.log(error);
    }
}