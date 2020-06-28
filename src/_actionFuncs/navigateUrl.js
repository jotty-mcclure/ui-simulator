module.exports = async (page, url) => {
	// TODO: validate url
	try {
		await page.goto(url);
		return true;
	}
	catch(e) {
		return false;
	}
}