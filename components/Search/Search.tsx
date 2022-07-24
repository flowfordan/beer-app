import { SearchProps } from "./Search.props";
import styles from './Search.module.css';
import cn from 'classnames';
import { Input } from "../Input/Input";
import { SyntheticEvent, useEffect, useState } from "react";
import { Button } from "../Button/Button";
import GlassIcon from './glass.svg';
import { useRouter } from "next/router";

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {

    const [search, setSearch] = useState<string>('');
    const router = useRouter();
	let timer: NodeJS.Timeout

	useEffect(() => {
		if(search !== ''){
			startSearch();
		}
		
	}, [search])

    const startSearch = (e?: SyntheticEvent) => {
		if(e){
			e.preventDefault();
			if(search === ''){
				console.log('WARNING')
				return
			}
		}
		clearTimeout(timer);
		timer = setTimeout(function () {
		router.push({
			pathname: '/search',
			query: {
				q: search
			}
		})
		}, 1000)
    }

    return (
        <form className={cn(className, styles.search)} onSubmit={startSearch} {...props}>
            <Input 
            className={styles.input}
            placeholder="Поиск..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            />

            <Button appearance="primary"
            className={styles.button}
            onClick={(e) => startSearch(e)} 
            type="submit"
            >
                <GlassIcon />
            </Button>
        </form>
    );
    
};