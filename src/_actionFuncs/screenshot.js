module.exports = async (page, options={}) => {
	// TODO: handle callback function
	return page.screenshot(options);
}