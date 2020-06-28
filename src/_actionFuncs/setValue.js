module.exports = async (page, {target, value}) => {
	try {
		await page.type(target, value);
		return true;
	}
	catch(e) {
		return false;
	}
}