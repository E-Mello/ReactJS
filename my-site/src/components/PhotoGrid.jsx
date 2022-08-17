import styles from './PhotoGrid.module.css';
import { useState } from 'react';

export function PhotoGrid() {
    
    function handleStateVideo() {
        
    }
    
    const x = document.getElementById('x');

    return (
        <section className={styles.section02}>

        <div className={styles.photoGridHeader}>
            <h1 className={styles.photoGridH1}>Other Project</h1>
            <p className={styles.photoGridP}>Examples</p>
        </div>

        {/* Photo Grid */}
            <div className={styles.photoGrid}>
                <div className={styles.photoGridList}>
                    <div className={styles.photoGridItem}>
                        <video src="../public/Darling.mp4" loop className={handleStateVideo}></video>
                        <video src="../public/Darling.mp4" loop className={handleStateVideo}></video>
                        <video src="../public/Darling.mp4" loop className={handleStateVideo}></video>
                    </div>
                </div>        
            </div>
    </section>
    );
}