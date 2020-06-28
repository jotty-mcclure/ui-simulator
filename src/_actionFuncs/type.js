module.exports = async (page, value) => {
	try {
		await await page.keyboard.type(value);
		return true;
	}
	catch (e) {
		console.log(e);
		return false;
	}
}