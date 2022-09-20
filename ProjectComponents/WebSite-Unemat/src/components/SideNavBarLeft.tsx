import { useState } from "react";

import { Avatar } from "./Avatar";
import { LogoUnemat } from "./LogoUnemat";


import { BsFillArrowLeftSquareFill, BsSearch, BsFillArrowRightSquareFill, BsJournalBookmarkFill, BsFillBookmarkHeartFill } from "react-icons/bs";
import { MdDashboard, MdOutlineBuild, MdSchool } from "react-icons/md";
import { BiChat, BiLogOut, BiUser } from "react-icons/bi";
import { VscFiles } from "react-icons/vsc";

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
                    {/* <div className={styles.searchController}>
                        <button className={styles.searchBtn}>
                            <BsSearch className={styles.searchController} />
                        </button>

                        <input type="text" placeholder="search" />
                    </div> */}
                </div>
                <nav className={styles.opContainer}>
                    <ul className={styles.navList}>
                        <li>
                            <a href="#">
                                <i><MdDashboard /></i>
                                <span className={styles.linksName}>Dashboard</span>
                            </a>
                            <span className={styles.tooltip} >Dashboard</span>
                        </li>
                        <li>
                            <a href="#">
                                <i><MdSchool /></i>
                                <span className={styles.linksName}>Grade do Curso</span>
                            </a>
                            <span className={styles.tooltip} >Grade do Curso</span>
                        </li>
                        <li>
                            <a href="#">
                                <i><BsJournalBookmarkFill /></i>
                                <span className={styles.linksName}>Minhas Materias</span>
                            </a>
                            <span className={styles.tooltip} >Minhas Materias</span>
                        </li>
                        <li>
                            <a href="#">
                                <i><BiChat /></i>
                                <span className={styles.linksName}>Chat</span>
                            </a>
                            <span className={styles.tooltip} >Chat</span>
                        </li>
                        <li>
                            <a href="#">
                                <i><VscFiles /></i>
                                <span className={styles.linksName}>Arquivos</span>
                            </a>
                            <span className={styles.tooltip} >Arquivos</span>
                        </li>
                        <li>
                            <a href="#">
                                <i><BsFillBookmarkHeartFill /></i>
                                <span className={styles.linksName}>Amigos</span>
                            </a>
                            <span className={styles.tooltip} >Amigos</span>
                        </li>
                        <li>
                            <a href="#">
                                <i><BiUser /></i>
                                <span className={styles.linksName}>Usuario</span>
                            </a>
                            <span className={styles.tooltip} >Usuario</span>
                        </li>
                        <li>
                            <a href="#">
                                <i><MdOutlineBuild /></i>
                                <span className={styles.linksName}>Configuracoes</span>
                            </a>
                            <span className={styles.tooltip} >Configuracoes</span>
                        </li>
                    </ul>
                    <div className={styles.profileContent}>
                        <div className={styles.profile}>
                            <div className={styles.profileDetails}>
                                <Avatar src="https://github.com/E-Mello.png" />
                                <div className={styles.nameJob}>
                                    <div className={styles.name}>Édio Melo</div>
                                    <div className={styles.job}>Web Developer</div>
                                </div>
                                <i><BiLogOut /></i>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}