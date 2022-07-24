import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import { Button, Htag, Tag, Paragraph, Input, Textarea, ItemsCollection } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';

function Home({ menu }: HomeProps): JSX.Element {

	

  return (
    <>
		<ItemsCollection />
    </>
  );
}

export default withLayout(Home);


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