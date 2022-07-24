import { GetStaticProps } from 'next';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';
import { useRouter } from 'next/router';


function Search(): JSX.Element {

	const router = useRouter();
	console.log(router.query);

	//filter items

  return (
    <>
		Search
		<div>
			{router.query.q}
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