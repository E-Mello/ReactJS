import { Avatar } from "./Avatar";
import { LogoUnemat } from "./LogoUnemat";
import { BsFillArrowLeftSquareFill, BsSearch } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './SideNavBarLeft.module.css'




export function SideNavBarLeft() {
    return (
        <>
            <div className={styles.sideMenu}>
                <div className={styles.topSection}>
                    <div className={styles.logo}>
                        <LogoUnemat src="../src/assets/LogoUnemat.png" />
                    </div>
                    <div className={styles.toggleMenuBtn}>
                        <BsFillArrowLeftSquareFill className={styles.arrowLeft} size={20} />
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