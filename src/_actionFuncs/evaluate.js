module.exports = async (page, handler=async()=>{}) => {
	try {
		await handler(page);
		return true;
	}
	catch(e){
		console.log(e);
		return false;
	};
}