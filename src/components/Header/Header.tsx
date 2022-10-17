import styles from './Header.module.css';
import {HeaderProps} from "./Header.types";

const Header = (props: HeaderProps) => {
    return (
        <header className={styles.appHeader}>
            <h2>{props.text}</h2>
        </header>
    )
}

export default Header