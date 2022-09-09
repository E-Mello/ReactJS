import React from "react";

import styles from './Sidenavbar.module.css';

export function Sidenavbar() {
    return (
        <>
            <div className={styles.sidebar}>
                <div className={styles.logo_content}>
                    <div className={styles.logo}>
                        <i className='bx bxl-c-plus-plus'></i>
                        <div className={styles.logo_name}>CodingLab</div>
                    </div>
                    <i className='bx bx-menu'></i>
                </div>
                <ul className={styles.nav_list}>
                    <li>
                        <i className='bx bx-search'></i>
                        <input type="text" name="" placeholder="Search" />
                        {/* <span className={styles.links_name}>Dashboard</span> */}
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-grid-alt'></i>
                            <span className={styles.links_name}>Dashboard</span>
                        </a>
                        {/* <span className={styles.links_name}>Dashboard</span> */}
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-user'></i>
                            <span className={styles.links_name}>User</span>
                        </a>
                        {/* <span className={styles.links_name}>Dashboard</span> */}
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-chat'></i>
                            <span className={styles.links_name}>Chat</span>
                        </a>
                        {/* <span className={styles.links_name}>Dashboard</span> */}
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-pie-chart-alt-2'></i>
                            <span className={styles.links_name}>Analytics</span>
                        </a>
                        {/* <span className={styles.links_name}>Dashboard</span> */}
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-folder'></i>
                            <span className={styles.links_name}>File Manager</span>
                        </a>
                        {/* <span className={styles.links_name}>Dashboard</span> */}
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-cart-alt'></i>
                            <span className={styles.links_name}>Order</span>
                        </a>
                        {/* <span className={styles.links_name}>Dashboard</span> */}
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-heart'></i>
                            <span className={styles.links_name}>Saved</span>
                        </a>
                        {/* <span className={styles.links_name}>Dashboard</span> */}
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-cog'></i>
                            <span className={styles.links_name}>Settings</span>
                        </a>
                        {/* <span className={styles.links_name}>Dashboard</span> */}
                    </li>
                </ul>
            </div>
        </>
    );
}