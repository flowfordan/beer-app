import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './TopPageComponent.module.css';
import cn from 'classnames';
import { Htag, Paragraph, Tag } from "../../components";
import { TopLevelCategory } from "../../interfaces/page.interface";
import { useEffect, useReducer } from "react";
import { sortReducer } from "./sort.reducer";


export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {

    return (
        <div className={styles.wrapper}>

        </div> 
    );
    
};