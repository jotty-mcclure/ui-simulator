module.exports = async (page, url) => {
	return await page.goto(url);
}