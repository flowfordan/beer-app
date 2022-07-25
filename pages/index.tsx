import { GetStaticProps } from 'next';
import { ItemsCollection } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';

function Home({ items }: HomeProps): JSX.Element {
  return (
    <>
		<ItemsCollection items={items}/>
    </>
  );
}

export default withLayout(Home);


export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const result = await axios.get('https://api.punkapi.com/v2/beers');
	return {
		props: {
			items: result.data
		}
	}
};

interface HomeProps{
  items: any;
}