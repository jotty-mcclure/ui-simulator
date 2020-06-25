const puppeteer = require('puppeteer');
const actions = require('ui-simulator');

(async () => {
	const browser = await puppeteer.launch({ headless: false });
	const page = await browser.newPage();

	await actions(page, [
		{ navigateUrl: 'http://google.com/' },
		{ waitFor: 1000 },
		{ focus: 'input[name=q]' },
		{ type: 'puppeteer is awesome' },
		{ click: 'input[type=submit][name=btnK]' },
		{ evaluate: async page => {
			await page.evaluate(() => alert('test!'));
		}},
		{ waitFor: 1000 },
	]);

	await browser.close();
})();