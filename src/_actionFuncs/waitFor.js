module.exports = async (page, time=500) => {
	//TODO: time vs selector
	// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-pagewaitforselectorselector-options
	return await page.waitFor(time);
}