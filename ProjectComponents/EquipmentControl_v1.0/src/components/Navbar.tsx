import { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom"

import { Avatar } from "./Avatar";

import { BsFillArrowLeftSquareFill, BsSearch, BsFillArrowRightSquareFill, BsJournalBookmarkFill, BsFillBookmarkHeartFill } from "react-icons/bs";
import { MdDashboard, MdOutlineBuild, MdSchool } from "react-icons/md";
import { BiChat, BiLogOut, BiUser, BiEdit } from "react-icons/bi";
import { VscFiles } from "react-icons/vsc";
import { TbReport } from "react-icons/tb";

import styles from './Navbar.module.css'

export function Navbar() {
    const [isActive, setIsActive] = useState(true);

    function changeStateBtn() {
        setIsActive(!isActive);
        console.log(isActive);

    }

    return (
        <>
            <nav className={isActive ? styles.sideMenuInactive : styles.sideMenuActive}>
                <div className={styles.topSection}>
                    <div className={styles.logo}>
                        <Avatar src="../public/LogoUnimed.png" />
                    </div>
                    <div className={styles.toggleMenuBtn} onClick={changeStateBtn}>
                        {isActive ?
                            <BsFillArrowRightSquareFill className={styles.arrowLeft} size={20} style={{ transitionDelay: '0.3s' }} />
                            :
                            <BsFillArrowLeftSquareFill className={styles.arrowRight} size={20} />
                        }
                    </div>
                </div>
                <div className={styles.opContainer}>
                    <ul className={styles.navList}>
                        <li>
                            <Link to="/Dashboard">
                                <i><MdDashboard /></i>
                                <span className={styles.linksName}>Dashboard</span>
                            </Link>
                            <span className={styles.tooltip} >Dashboard</span>
                        </li>
                        <li>
                            <Link to="/RegisterDevice">
                                <i><BiEdit /></i>
                                <span className={styles.linksName}>Cadastrar Aparelhos</span>
                            </Link>
                            <span className={styles.tooltip} >Cadastrar Aparelhos</span>
                        </li>
                        <li>
                            <Link to="/DeviceControl">
                                <i><BsJournalBookmarkFill /></i>
                                <span className={styles.linksName}>Controle de Aparelhos</span>
                            </Link>
                            <span className={styles.tooltip} >Controle de Aparelhos</span>
                        </li>
                        <li>
                            <Link to="/Reports">
                                <i><TbReport /></i>
                                <span className={styles.linksName}>Relatórios</span>
                            </Link>
                            <span className={styles.tooltip} >Relatórios</span>
                        </li>
                        <li>
                            <a href="/Settings">
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
                                    <div className={styles.job}>GIN - Gestão de Informação e Negócios</div>
                                </div>
                                <i><BiLogOut /></i>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}