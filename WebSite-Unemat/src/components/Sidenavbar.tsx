import React, { useState } from "react";
import { Avatar } from "./Avatar";

import styles from './Sidenavbar.module.css';

export function Sidenavbar() {
    const [isActive, setActive] = useState(false);

    function showOrCloseNav() {
        setActive(!isActive);
    }

    function handleTitle() {

    }

    window.addEventListener('load', () => {

        const btn = document.getElementById('btn');
        const sidebar = document.getElementById('sidebar');
        const searchBtn = document.getElementById('bx-search');
    });

    return (
        <>
            <div className={styles.sidebar} id="sidebar">
                <div className={styles.logo_content}>
                    <div className={styles.logo}>
                        <i className='bx bxl-c-plus-plus'></i>
                        <div className={styles.logo_name}>CodingLab</div>
                    </div>
                    <i className='bx bx-menu btn' onClick={showOrCloseNav} title="menu" id="btn"></i>
                </div>
                <ul className={styles.nav_list}>
                    <li>
                        <i className='bx bx-search' title="search" id="bx-search"></i>
                        <input type="text" name="" placeholder="Search" />
                        <span className={styles.links_name} >Search</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-grid-alt'></i>
                            <span className={styles.links_name}>Dashboard</span>
                        </a>
                        <span className={styles.tooltip} >Dashboard</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-user'></i>
                            <span className={styles.links_name}>User</span>
                        </a>
                        <span className={styles.tooltip} >User</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-chat'></i>
                            <span className={styles.links_name}>Chat</span>
                        </a>
                        <span className={styles.tooltip} >Chat</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-pie-chart-alt-2'></i>
                            <span className={styles.links_name}>Analytics</span>
                        </a>
                        <span className={styles.tooltip} >Analytics</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-folder'></i>
                            <span className={styles.links_name}>File Manager</span>
                        </a>
                        <span className={styles.tooltip} >File Manager</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-cart-alt'></i>
                            <span className={styles.links_name}>Order</span>
                        </a>
                        <span className={styles.tooltip} >Order</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-heart'></i>
                            <span className={styles.links_name}>Saved</span>
                        </a>
                        <span className={styles.tooltip} >Saved</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-cog'></i>
                            <span className={styles.links_name}>Settings</span>
                        </a>
                        <span className={styles.tooltip} >Settings</span>
                    </li>
                </ul>
                <div className={styles.profile_content}>
                    <div className={styles.profile}>
                        <div className={styles.profile_details}>
                            <Avatar src="https://github.com/E-Mello.png" />
                            <div className={styles.name_job}>
                                <div className={styles.name}>Édio Melo</div>
                                <div className={styles.job}>Web Developer</div>
                            </div>
                            <i className='bx bx-log-out'></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}