module.exports = async (page, target) => {
	// TODO: catch infinite loop
	// TODO: catch missing elm
	let matchedElm = false;

	while ( !matchedElm ) {
		await page.keyboard.press('Tab', {delay: 250});

		const isEqualNode = await page.evaluate((target) => {
			const targetElm = document.querySelector(target);
			const activeElm = document.activeElement;
			return activeElm.isEqualNode(targetElm);
		}, target);

		matchedElm = isEqualNode;
	}

	return matchedElm;
}