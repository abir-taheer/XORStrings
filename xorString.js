function xorString(str, key) {
	const chars = [...str.trim()];

	return chars
		.map(
			(char, index) =>
				char.charCodeAt(0) ^ key[index % key.length].charCodeAt(0)
		);
}

module.exports = xorString;
