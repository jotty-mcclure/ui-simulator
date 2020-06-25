module.exports = async (page, {target, value}) => {
	return await page.type(target, value);
}