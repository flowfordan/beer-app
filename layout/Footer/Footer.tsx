/* eslint-disable react/jsx-no-target-blank */
import { FooterProps } from "./Footer.props";
import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';

export const Footer = ({ className, ...props}: FooterProps): JSX.Element => {

    return (
        <footer className={cn(className, styles.footer)} {...props}>
        <span>BeerApp</span>
        <a href='https://github.com/flowfordan' target='_blank'>flowfordan</a>
        </footer>
    );
    
};