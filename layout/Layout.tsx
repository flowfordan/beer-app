import { LayoutProps } from "./Layout.props";
import styles from './Layout.module.css';
import cn from 'classnames';
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { FunctionComponent } from "react";

const Layout = ({ children }: LayoutProps): JSX.Element => {

    return (
        <div className={styles.wrapper}>
        <Header className={styles.header}/>
                    
            <div className={styles.body}>
                {children}
            </div>
        
        <Footer className={styles.footer} />

        </div>
    );
    
};

export const withLayout =(Component: FunctionComponent) => {
    return function withLayoutComponent(props: any): JSX.Element {
        return (
                <Layout>
                    <Component {...props} />
                </Layout>
        );
    };
};