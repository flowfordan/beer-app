import { ItemsCollectionProps } from "./ItemsCollection.props";
import styles from './ItemsCollection.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef, useEffect, useState } from "react";
import { Card } from "../Card/Card";
import Image from "next/image";
import { ProductCard } from "../../interfaces/product.interface";
import { cutText } from "../../helpers/cutText";
import Link from "next/link";

export const ItemsCollection = forwardRef(function ItemsCollection(
    { className, ...props }: ItemsCollectionProps, ref: ForwardedRef<HTMLDivElement>){

		const [items, setItems] = useState([]);
	let itemsCollection;

	useEffect(() => {
		fetch('https://api.punkapi.com/v2/beers')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			setItems(data);
		})
		.catch(data => console.log(data))
	}, [])

	if(items){
		itemsCollection = items.map((i:ProductCard) => {
			return(
				<Link key={i.id} href={`/item/${i.id}`}>
				<Card  className={cn(styles.item, className)}>
					<div className={styles.imgWrap}>
						<div className={styles.img}>
							<Image src={i.image_url} alt={`beer image`}
							sizes="100%"
							layout="fill" 
							objectFit="contain" 
							placeholder="blur"
							blurDataURL={`${i.image_url}`}></Image>
						</div>
						
					</div>
					<div className={styles.info}>
						<div className={styles.name}>{i.name}</div>
						<div className={styles.description}>{cutText(i.description)}</div>
					</div>
					
					
				</Card>
				</Link>
			)
		})
	}

    return (
        <div className={cn(styles.itemsCollection, className)}
        {...props}
        ref={ref}
        >
			{itemsCollection}
        </div>
    );
    
});