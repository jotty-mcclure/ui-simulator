module.exports = async (page, value) => {
	return await page.keyboard.type(value);
}