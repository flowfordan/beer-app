import { GetStaticProps } from 'next';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { searchName } from '../helpers/searchName';
import { ItemsCollection } from '../components';


function Search(): JSX.Element {

	const [items, setItems] = useState([]);
	const [isLoading, toggleLoading] = useState(false);
	const [query, setQuery] = useState<string | string[] | undefined>('');

	const router = useRouter();
	
	//console.log(router.query.q);
	//setQuery(router.query.q)

	useEffect(() => {
		setQuery(router.query.q);
	})

	useEffect(() => {
		toggleLoading(true);
		
		fetch('https://api.punkapi.com/v2/beers')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			setItems(searchName(data, query));
			toggleLoading(false);
		})
		.catch(data => console.log(data));
	}, [query]);

	//console.log(items)

  return (
    <>
		<div>
			<ItemsCollection items={items}/>
		</div>
    </>
  );
}

export default withLayout(Search);


// export const getStaticProps: GetStaticProps<HomeProps> = async () => {
//   const firstCategory = 0;
//   const { data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
//     firstCategory
//   });
//   return {
//     props: {
//       menu,
//       firstCategory
//     }
//   };
// };

interface HomeProps extends Record<string, unknown>{
  menu: MenuItem[],
  firstCategory: number;
}