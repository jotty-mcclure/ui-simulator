module.exports = async (page, target) => {
	try {
		await await page.hover(target);
		return true;
	}
	catch (e) {
		console.log(e);
		return false;
	}
}