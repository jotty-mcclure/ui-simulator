module.exports = async (page, target) => {
	// TODO: catch infinite loop
	// TODO: catch missing elm
	try {
		const doesExist = await page.evaluate((target) => {
			const targetElm = document.querySelector(target);
			return !!targetElm;
		}, target);
	
		// elm doesn't exist
		if ( !doesExist ) return false;
		
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
	catch(e) {
		return false;
	}
}