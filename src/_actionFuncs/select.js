module.exports = async (page, {target, value}) => {
	return await page.select(target, value);
}