function xorString(str, key) {
	const chars = [...str];

	return chars
		.map(
			(char, index) =>
				char.charCodeAt(0) ^ key[index % key.length].charCodeAt(0)
		);
}
