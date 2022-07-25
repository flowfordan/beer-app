import { useRouter } from "next/router";
import { withLayout } from "../../layout/Layout";
import { ItemPageComponent } from "../../page-components";

const ItemPage = () => {
	
	const router = useRouter();
	const { id } = router.query;
	return(
		<ItemPageComponent id={id} />
	);
}

export default withLayout(ItemPage);