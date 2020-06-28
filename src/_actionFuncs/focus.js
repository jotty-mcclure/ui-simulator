module.exports = async (page, target) => {
	try {
		await await page.focus(target);
		return true;
	}
	catch (e) {
		console.log(e);
		return false;
	}
}