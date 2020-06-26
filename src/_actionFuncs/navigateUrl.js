module.exports = async (page, url) => {
	// TODO: validate url
	return await page.goto(url);
}