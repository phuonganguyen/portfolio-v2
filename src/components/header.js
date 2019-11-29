import React from "react";
import {Link} from "gatsby";
import styles from "./header.module.scss";

const Header = () =>{
    return (
        <header className={styles.header}>
            <nav>
                <Link className={styles.siteLogo} to="/">
                    <span>PN</span>
                </Link>
                <ul className={styles.navRight}>
                    <li>
                        <Link className={styles.navItem} activeClassName={styles.navItemActive} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={styles.navItem} activeClassName={styles.navItemActive} to="/about">About</Link>
                    </li>
                    <li>
                        <Link className={styles.navItem} activeClassName={styles.navItemActive} to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className={styles.navItem} activeClassName={styles.navItemActive} to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;