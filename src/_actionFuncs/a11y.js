const axeSource = require('axe-core').source;

async function addAxeScript(frame) { 
	await frame.addScriptTag({content: axeSource});
	for (let child of frame.childFrames()) {
		await addAxeScript(child);
	}
}

async function defaultCallback(results) {
	return results;
}

module.exports = async (page, props) => {
	const {
		config={},
		callback=defaultCallback,
	} = props;

	// TODO: enforce props usage
	// TODO: configure axe

	try {
		await addAxeScript(page.mainFrame());
		
		// await page.evaluate(async (config) => 
		// 	await axe.configure(config)
		// , config);
		
		const results = await page.evaluate(async (config) => 
			await axe.run(config)
		, config);

		return callback(results);
	}
	catch (e) {
		// TODO: handle error
		console.log(e);
	}
}