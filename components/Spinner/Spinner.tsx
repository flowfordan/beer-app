import styles from './Spinner.module.css';
import SpinnerAnim from './spinner.svg';

export const Spinner = () => {

    

    return (
        <div className={styles.wrapper}>
            <SpinnerAnim width={50} height={50}/> 
        </div>
    );
};