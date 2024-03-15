import styles from './menu.module.css';
import MenuLink from '../menuLink';

export default function Menu() {
  
    return (
        <header> 
            <nav className={styles.navegacao}>
                 <MenuLink to="/"> 
                    Inicio
                 </MenuLink>
                <MenuLink to="/sobreMim">
                    SobreMim
                </MenuLink>
            </nav>
        </header>
    )
}