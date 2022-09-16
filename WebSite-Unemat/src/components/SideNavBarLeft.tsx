import { Avatar } from "./Avatar";
import { LogoUnemat } from "./LogoUnemat";
import { BsFillArrowLeftSquareFill, BsSearch, BsFillArrowRightSquareFill } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import styles from './SideNavBarLeft.module.css'





export function SideNavBarLeft() {
    const [isActive, setIsActive] = useState(true);

    function changeStateBtn() {
        setIsActive(!isActive);
        console.log(isActive);

    }

    return (
        <>
            <div className={isActive ? styles.sideMenuActive : styles.sideMenuInactive}>
                <div className={styles.topSection}>
                    <div className={styles.logo}>
                        <LogoUnemat src="../src/assets/LogoUnemat.png" />
                    </div>
                    <div className={styles.toggleMenuBtn} onClick={changeStateBtn}>
                        {isActive ?
                            <BsFillArrowLeftSquareFill className={styles.arrowLeft} size={20} style={{ transitionDelay: '0.3s' }} />
                            :
                            <BsFillArrowRightSquareFill className={styles.arrowRight} size={20} />
                        }
                    </div>
                </div>

                <div className={styles.searchController}>
                    <button className={styles.searchBtn}>
                        <BsSearch className={styles.searchController} />
                    </button>

                    <input type="text" placeholder="search" />
                </div>

                <div className={styles.divider}>

                </div>
            </div>
        </>
    );
}