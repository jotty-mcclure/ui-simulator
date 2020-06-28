module.exports = async (page, {target, value}) => {
	try {
		await page.select(target, value);
		return true;
	}
	catch(e) {
		return false;
	}
}