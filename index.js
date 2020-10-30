const xorString = require("./xorString");

const args = process.argv.slice(2);

const format = args[0];
const keyfile = args[1];
const textfile = args[2];

const fs = require("fs").promises;

const filePromises = [fs.readFile(keyfile), fs.readFile(textfile)];

Promise.all(filePromises).then((fileData) => {
	const [key, text] = fileData;

	const encrypted = xorString(text.toString(), key.toString());

	if(format === "human"){
		const str = encrypted.map(code => String.fromCharCode(code)).join("");
		console.log(str);
	}

	if(format === "numOut"){
		const str = encrypted.map(code => code.toString(16)).join(" ");
		console.log(str);
	}
});
