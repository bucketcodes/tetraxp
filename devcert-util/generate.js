// example: make a directory in home directory such as ~/devcert-util
// ~/devcert-util/generate.js
const fs = require('fs');
const devcert = require('devcert');

// or if its just one domain - devcert.certificateFor('local.example.com')
devcert.certificateFor(['localhost'])
	.then(({key, cert}) => {
		fs.writeFileSync('./certs/ca.key', key);
		fs.writeFileSync('./certs/ca.crt', cert);
	})
	.catch(console.error);