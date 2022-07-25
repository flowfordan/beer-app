const searchName = (itemsArr: any, query: string | string[] |undefined) => {
	if(!query){
		return itemsArr;
	}
	if(typeof query === 'string'){
		const results = itemsArr.filter((item: any) => {
			return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
	});
		return results;
	}
	
}

export {searchName}