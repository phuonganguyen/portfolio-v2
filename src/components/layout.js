import React from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/global.scss';
import styles from './layout.module.scss';

const Layout = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Header />
                {props.children}
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;