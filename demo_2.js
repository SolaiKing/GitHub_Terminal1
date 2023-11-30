var env = process.env.env;
var envFile = process.env.env + '-env.json';
let workingDir = process.cwd();
let config = require(path.join(workingDir, 'app/config/' + envFile