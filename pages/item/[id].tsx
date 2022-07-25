import { useRouter } from "next/router";
import { Card } from "../../components";
import { withLayout } from "../../layout/Layout";
import { ItemPageComponent } from "../../page-components";


const ItemPage = () => {
	
	const router = useRouter();
	const { id } = router.query;
	console.log(router);
	//get static props
	return(
		<ItemPageComponent id={id} />
	)
}

export default withLayout(ItemPage);