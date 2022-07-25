import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { searchName } from '../helpers/searchName';
import { ItemsCollection, Spinner } from '../components';


function Search(): JSX.Element {

	const [items, setItems] = useState([]);
	const [isLoading, toggleLoading] = useState(false);
	const [query, setQuery] = useState<string | string[] | undefined>('');

	const router = useRouter();

	useEffect(() => {
		setQuery(router.query.q);
	})

	useEffect(() => {
		toggleLoading(true);
		
		axios.get('https://api.punkapi.com/v2/beers')
		.then((resp) => {
			setItems(searchName(resp.data, query));
			toggleLoading(false);
		})
		.catch(function (error) {
			console.log(error.toJSON());
		});
	}, [query]);

  return (
    <>	
		{isLoading? <Spinner/> : <ItemsCollection items={items}/>}	
    </>
  );
}

export default withLayout(Search);
