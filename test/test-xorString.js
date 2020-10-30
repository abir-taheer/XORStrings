const xorString = require("./../xorString");
const expect = require("chai").expect;

describe("#xorString", () => {
	it('should correctly encrypt the string "this is a test" with key "FISH"', function () {
		// This was obtained through the calculator on https://md5decrypt.net/en/Xor/
		const expected = [
			50,
			33,
			58,
			59,
			102,
			32,
			32,
			104,
			39,
			105,
			39,
			45,
			53,
			61,
		];

		expect(xorString("this is a test", "FISH")).to.deep.equal(expected);
	});
});
