import styles from './PhotoGrid.module.css';
import { useState } from 'react';

export function PhotoGrid() {
    
    return (
        <section className={styles.section02}>

        <div className={styles.photoGridHeader}>
            <h1 className={styles.photoGridH1}>Image Grid</h1>
            <p className={styles.photoGridP}>I'm the grid imagem</p>
        </div>



        {/* Photo Grid */}
        {/* <div className={styles.photoGrid} >
                <div className={styles.photoGridList} >
                    <div className={styles.photoGridItem}>
                        <tr>
                            <td><img src="../public/love-heart-dark.jpg"/></td>
                            <td><img src="../public/space.jpg"/></td>
                            <td><img src="../public/space.jpg"/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><video src="../public/Darling.mp4" loop className="clip"></video></td>
                        </tr>    
                        <tr>
                            <td><img src="../public/woman-face-light.jpg"/></td>
                            <td><img src="../public/woman-face-light.jpg"/></td>
                            <td><img src="../public/woman-face-light.jpg"/></td>
                        </tr>                      
                    </div>
                </div>
            </div> */}
            <div className={styles.photoGrid}>
                <div className={styles.photoGridList}>
                    <div className={styles.photoGridItem}>
                        <img src="../public/love-heart-dark.jpg" alt="" srcSet="" />
                        <img src="../public/love-heart-dark.jpg" alt="" srcSet="" />
                        <img src="../public/love-heart-dark.jpg" alt="" srcSet="" />
                        <video src="../public/Darling.mp4" loop className="clip"></video>
                        <img src="../public/woman-face-light.jpg" alt="" srcSet="" />
                        <img src="../public/woman-face-light.jpg" alt="" srcSet="" />
                        <img src="../public/woman-face-light.jpg" alt="" srcSet="" />
                    </div>
                </div>        
            </div>
    </section>
    );
}