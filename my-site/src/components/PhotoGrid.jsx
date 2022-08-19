import styles from './PhotoGrid.module.css';
import { useState } from 'react';

export function PhotoGrid() {
    
    function handleStateVideo() {
        const [stateVideo, setStateVideo] = useState(0);
        // <video> is used for top-level audio documents as well
        let videoElement = document.getElementsByTagName("video")[0];
      
        const setFocusToVideoElement = (e) => {
          // We don't want to retarget focus if it goes to the controls in
          // the video element. Because they're anonymous content, the target
          // will be the video element in that case. Avoid calling .focus()
          // for those events:
          if (e && e.target == videoElement) {
            return;
          }
          videoElement.focus();            
        };
      
        // Redirect focus to the video element whenever the document receives
        // focus.
        document.addEventListener("play", setFocusToVideoElement, true);
      
        // Focus on the video in the newly created document.
        setFocusToVideoElement();
                     
  } 

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
                        <video src="../public/Darling.mp4" onMouseOver={handleStateVideo}></video>
                        <video src="../public/Darling.mp4" onMouseOver={handleStateVideo}></video>
                        <video src="../public/Darling.mp4" onMouseOver={handleStateVideo}></video>
                    </div>
                </div>        
            </div>
    </section>
    );
}