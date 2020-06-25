module.exports = async (page, chars) => {
	return await page.keyboard.press(chars, {delay: 500});
};