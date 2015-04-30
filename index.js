(function () {
    'use strict';

    var childProcess = require('child_process'),
        ls,
        argv = require("node-argument-parser").parse("./arguments.json", process),
        fs = require('fs');

    console.dir(argv);
    console.log('Arguments:', process.argv.length);

    ls = childProcess.exec('mongo ' + argv.database + ' --eval "var collection = \'' + argv.collection + '\'; var plugins=\'' +
        argv.plugin + '|numColumns=' + argv.num + '\';" ' + argv.jsfile + ' -quiet'
        , function (error, stdout, stderr) {
            if (error) {
                console.log(error.stack);
                console.log('Error code: ' + error.code);
                console.log('Signal received: ' + error.signal);
            }
            console.log('Child Process STDOUT: ' + stdout);
            console.log('Child Process STDERR: ' + stderr);
            fs.writeFile(argv.file, stdout, function (err) {
                console.log(err);
            });
        });

    ls.on('exit', function (code) {
        console.log('Child process exited with exit code ' + code);
    });

})();