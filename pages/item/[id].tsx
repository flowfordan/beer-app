import { useRouter } from "next/router";
import { withLayout } from "../../layout/Layout";

const ItemPage = () => {
	
	const router = useRouter()
	const { id } = router.query
	console.log(router )
	//get static props
	return(
		
		<div>
			Item ID: {id}
		</div>
	)
}

export default withLayout(ItemPage);