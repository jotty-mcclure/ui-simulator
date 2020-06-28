module.exports = async (page, chars) => {
	try {
		await page.keyboard.press(chars, {delay: 500});
		return true;
	}
	catch(e) {
		console.log(e);
		return false;
	}
};