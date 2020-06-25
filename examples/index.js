const puppeteer = require('puppeteer');
const actions = require('../src/actions');

(async () => {
	let browser;
	try {
		// Setup Puppeteer
		// TODO: accept options - headless, viewport, scale, etc.
		browser = await puppeteer.launch({ headless: false });

		// Get new page
		const page = await browser.newPage();

		await actions(page, [
			{ navigateUrl: 'http://google.com/' },
			{ waitFor: 1000 },
			{ focus: 'input[name=q]' },
			{ type: 'puppeteer is awesome' },
			{ a11y: true },
			{ waitFor: 1000 },
			{ click: '#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.tfB0Bf > center > input.gNO89b' },
			{ waitFor: 1000 },
			{ a11y: true },
			{ waitFor: 10000 },
		]);

	}
	
	catch (err) {
		if (browser) await browser.close();
		throw err;
	}

	finally {
		await browser.close();
	}
})();