const cutText = (text: string, expLength = 140) => {
	let cut;
	if(text.length < expLength){
		cut = text;
	} else {
		cut = `${text.slice(0, expLength)}...`;
	}
	return cut;
};

export { cutText };