#!/usr/bin/env bash

node_modules/uglify-es/bin/uglifyjs --compress --mangle --output out/foo.uglifyes.min.js src/foo.js
node_modules/uglify-js/bin/uglifyjs --compress --mangle --output out/foo.uglifyjs.min.js src/foo.js
node ./closure.js
./node_modules/.bin/babili --out-file out/foo.babili.min.js src/foo.js