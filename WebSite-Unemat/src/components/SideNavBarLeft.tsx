import { Avatar } from "./Avatar";
import { LogoUnemat } from "./LogoUnemat";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

import styles from './SideNavBarLeft.module.css'

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export function SideNavBarLeft() {
    return (
        <>
            <div className={styles.sideMenu}>
                <div className={styles.topSection}>
                    <div className={styles.logo}>
                        <LogoUnemat src="../src/assets/LogoUnemat.png" />
                    </div>
                    <div className={styles.toggleMenuBtn}>
                        <FontAwesomeIcon icon={fa.instagram} />
                    </div>
                </div>
            </div>
        </>
    );
}