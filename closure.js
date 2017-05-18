var ClosureCompiler = require('google-closure-compiler').compiler;
var fs = require('fs');

//console.log(ClosureCompiler.COMPILER_PATH); // absolute path the compiler jar
//console.log(ClosureCompiler.CONTRIB_PATH); // absolute path the contrib folder which contains

var closureCompiler = new ClosureCompiler({
  js: 'src/foo.js',
  compilation_level: 'SIMPLE'
});

var compilerProcess = closureCompiler.run(function(exitCode, stdOut, stdErr) {
  //compilation complete
  if (exitCode === 0) {
    console.log(`closre compilation successful...`);
    fs.writeFileSync('out/foo.closure.min.js', stdOut)
  } else {
    console.error(`there was a problem during closure compilation. exit code: ${exitCode}\n`);
    console.error(stdErr)
  }
});