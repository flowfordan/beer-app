import { HeaderProps } from "./Header.props";
import styles from './Header.module.css';
import cn from 'classnames';
import { Search } from "../../components";
import Link from "next/link";

export const Header = ({ className, ...props}: HeaderProps): JSX.Element => {

    return (
        <div className={cn(className, styles.header)} {...props}>
			<Link href={`/`}>
				<div className={styles.logoWrapper}>
					<span className={styles.logoAccent}>Beer</span>
					<span>App</span>
					<span role="img" aria-label="food"> 🍻</span>
				</div>
			</Link>
			<Search className={styles.search}/>
        </div>
    );
    
};