# Meet Variety File Save, a way to save your variety output###
# CURRENTLY ALPHA #
[![Build Status](https://travis-ci.org/joggino/variety-file-save.svg?branch=master)](https://travis-ci.org/joggino/variety-file-save)



Options can be seen by typing --help:

    $ node index.js --help

    Options:

      -db, --database	The database you wish to run on (expects value)
      -p, --plugin	The path to the plugin you wish to run
      -c, --collection	The collection name of the which you wish to run on (expects value)
      -js, --jsfile	The path to variety  (expects value)
      -f, --file	The path where you wish to save the file
      -n, --num	The number of columns you want


An example file save might be:

    $ node index.js --database Dissertation -js variety.js -p variety-latex-output.js -c columnVector -n 2 -f save.latex



