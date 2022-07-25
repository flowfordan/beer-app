import { ItemsCollectionProps } from "./ItemsCollection.props";
import styles from './ItemsCollection.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef, useEffect, useState } from "react";
import { Card } from "../Card/Card";
import Image from "next/image";
import { cutText } from "../../helpers/cutText";
import Link from "next/link";

export const ItemsCollection = forwardRef(function ItemsCollection(
    { className, items, ...props }: ItemsCollectionProps, ref: ForwardedRef<HTMLDivElement>){

	const [currentPage, setPage] = useState(1);
	const [collection, setCollection] = useState<Array<any>>([]);

	const itemsPerPage = 8;
	const pagesNum = Math.ceil(items.length / itemsPerPage);
	const pages = Array.from(Array(pagesNum).keys());

	useEffect(() => {
		const itemsArr = items.slice((currentPage-1)*itemsPerPage, currentPage*itemsPerPage);
		setCollection(itemsArr);
	}, [currentPage, items]);

    return (
		<div className={styles.collectionWrap}>
		<div className={styles.pagesWrap}>
			{pages.map(p => {
				return(
					<Card className={cn(styles.page, {
						[styles.pageActive]: currentPage === p + 1
					})} key={p} onClick={() => setPage(p + 1)}>
						{p + 1}
					</Card>
				)
			})}
			
		</div>
        <div className={cn(styles.itemsCollection, className)}
        {...props}
        ref={ref}
        >
			{collection.length>0? collection.map((i:any) => {
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
				</Link>)}) : <div>There is no item by that name</div>}
        </div>
		</div>
    );
    
});