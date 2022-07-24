import { FooterProps } from "./Footer.props";
import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';

export const Footer = ({ className, ...props}: FooterProps): JSX.Element => {

    return (
        <footer className={cn(className, styles.footer)} {...props}>
        <span>BrewSearch</span>
        <a href='#' target='_blank'>flowfordan</a>
        </footer>
    );
    
};