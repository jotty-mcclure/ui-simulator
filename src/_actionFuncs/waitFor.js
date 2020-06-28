module.exports = async (page, arg=500) => {
	try {
		await page.waitFor(arg);
		return true;
	}
	catch (e) {
		console.log(e);
		return false;
	}
}