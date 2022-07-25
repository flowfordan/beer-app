const searchName = (itemsArr: any, query: string | string[] |undefined) => {
	console.log('SEARCH', query)
	if(!query){
		return itemsArr
	}
	if(typeof query === 'string'){
		const results = itemsArr.filter((item: any) => {
			return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
	})
	console.log('SEARCH', results)
		return results
	}
	
}

export {searchName}