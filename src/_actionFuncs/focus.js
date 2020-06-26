module.exports = async (page, target) => {
	return await page.focus(target);
}