module.exports = async (page, target) => {
	return await page.evaluate((target) => {
		const foundTarget = document.querySelector(target);
		if ( foundTarget ) {
			foundTarget.click();
			return true;
		}

		return false;
	}, target);
};