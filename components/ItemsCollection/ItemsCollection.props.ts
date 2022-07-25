import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ItemsCollectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    //children: ReactNode;
	items: Array<any>;
}