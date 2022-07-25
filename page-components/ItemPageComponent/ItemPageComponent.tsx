import { ItemPageComponentProps } from "./ItemPageComponent.props";
import styles from './ItemPageComponent.module.css';
import cn from 'classnames';
import { Card, Divider, Htag, Paragraph, Tag } from "../../components";
//import { ItemLevelCategory } from "../../interfaces/page.interface";
import { useEffect, useReducer, useState } from "react";
import axios from 'axios';
import Image from "next/image";


export const ItemPageComponent = ({ id }: ItemPageComponentProps): JSX.Element => {

	console.log(id)

	const [isLoading, toggleLoading] = useState(false);
	const [product, setProduct] = useState(null);

	const buildProduct = () => {
		if(product){
			const {
				name, tagline, description, food_pairing, 
				image_url,
				abv, ibu,ebc, srm, ph, 
				volume, boil_volume, ingredients,
				brewers_tips, first_brewed

			} = product;

			const indicesArr = [['ABV', abv], ['IBU',ibu], ['EBC',ebc], ['SRM', srm], ['PH',ph]];
			const processArr = [volume, boil_volume, ingredients];

			
			


			return(
			<Card className={styles.productWrap}>
				<div className={styles.imgWrap}>
					<div className={styles.img}>
							<Image src={image_url} alt={`beer image`}
							sizes="100%"
							layout="fill" 
							objectFit="contain" 
							placeholder="blur"
							blurDataURL={`${image_url}`}></Image>
						</div>
					</div>
				<div className={styles.infoWrap}>

				<div className={styles.h1}>
						{name}
						<Divider/>
					</div>

					<div className={styles.infoMain}>
						<div className={styles.additional}>
							{tagline}
						</div>
						<div className={styles.description}>
							{description}
						</div>
						
						<div>
							<div className={styles.h2}>
								Food Pairing
								<span role="img" aria-label="food"> 🌭🧀🍗</span>
							</div>
							<div className={styles.p}>
								{food_pairing.map((f, idx) => {return(<div key={idx}>{`- ${f}`}</div>)})}
							</div>
							
							
						</div>
						
					</div>

					<div className={styles.infoIndices}>
						{indicesArr.map((i, idx) => {
							return(
							<span key={idx} className={styles.indice}>
								<span>{i[0]}</span>
								<Divider  className={styles.divider}/>
								<span>{i[1]? i[1] : 'n/d'}</span>
							</span>);
						})}
					</div>

					<div className={styles.infoProcess}>
						<div className={styles.h2}>
							Brewing
							<span role="img" aria-label="process"> 🔄</span>
						</div>

						<div className={styles.processParts}>
							<div className={styles.volumes}>
								<div>Volume/Boil Volume: </div>
								<div className={styles.p}>
									{`${volume.value} ${volume.unit}`}
									{`/`}
									{`${boil_volume.value} ${boil_volume.unit}`}
								</div>
							</div>

							<div className={styles.ingridientsWrap}>
								<div>Ingridients:</div>
								<div className={styles.ingridients}>
									<div>
										Malt
									<span role="img" aria-label="malt"> 🌾</span>
									<ul>
											{ingredients.malt.map((m, idx) => {
												return (<li key={idx}>{`- ${m.name}: ${m.amount.value} ${m.amount.unit}`}</li>)
											})}
									</ul>
									</div>
									<div>
										Hops
										<span role="img" aria-label="hops"> 🌿</span>
										<ul>
										{ingredients.hops.map((i, idx) => {
												return (
												<li key={idx}>
													{`- ${i.name}: ${i.amount.value} ${i.amount.unit} (at ${i.add} for ${i.attribute})`}
												</li>)
											})}
										</ul>
									</div>
								</div>
								
								
							</div>
						</div>
						
					</div>

					<div className={styles.infoAdd}>
						<div className={styles.tips}>
							<div>
								Brewers tips
								<span role="img" aria-label="tip"> ❗️☝️</span>
							</div>
							<div className={styles.p}>{brewers_tips}</div>
							
						</div>
						<span className={styles.additional}>
							{`First Brewed: ${first_brewed}`}
						</span>
					</div>
				</div>			
			</Card>
		)
		}
		
	}

	useEffect(() => {
		if(id){
			toggleLoading(true);
			axios.get(`https://api.punkapi.com/v2/beers/${id}`)
			.then(resp => {
				console.log(resp.data[0]);
				setProduct(resp.data[0]);
				toggleLoading(false);
			});
		}

	}, [id])

    return (
        <div className={styles.wrapper}>
			{isLoading? `Loading...` : null}
			{product? buildProduct() : null}
        </div> 
    );
    
};