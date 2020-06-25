module.exports = async (page, handler=async()=>{}) => {
	return await handler(page);
}