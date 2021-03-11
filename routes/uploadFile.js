var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs');

/* GET home page. */
router.post('/', function (req, res, next) {
    var d = __dirname.split("\\")
    d.pop()
    d.push("uploadedFiles")
    d = d.join("\\")
    console.log(d)
    var form = new formidable.IncomingForm();
    // console.log(form)
    form.parse(req, function (err, fields, files) {
        console.log(files.filename.path)
        console.log(files.filename.name)
        var fileName = files.filename.name
        var pat = "C:\\Users\\user\\Desktop\\uploadFiles".split("\\")
        pat.push(fileName)
        pat = pat.join("\\")
        console.log(pat)

        fs.rename(files.filename.path, dest = pat, function (err) {
            if (err) throw err;
            res.write('File uploaded and moved!');
            res.end();
        });
    });


});

module.exports = router;
