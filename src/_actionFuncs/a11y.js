const axeSource = require('axe-core').source;

async function addAxeScript(frame) { 
	await frame.addScriptTag({content: axeSource});
	for (let child of frame.childFrames()) {
		await addAxeScript(child);
	}
}

module.exports = async (page, target=null) => {
	// TODO: configure axe
	// TODO: handle results - save to file? assert?
	await addAxeScript(page.mainFrame());
	// await page.evaluate(async () => {
	//     await axe.configure({
	//         rules: ['best-practices'],
	//     });
	// });
	const results = await page.evaluate(async () => await axe.run());
	console.log(results)
	return results;
}