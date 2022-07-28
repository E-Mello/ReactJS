import React from 'react';

import styles from './Header.module.css';

export function Header() {
    let stars = document.getElementsByClassName('stars');
    let moon = document.getElementsByClassName('moon');
    let mountainsB = document.getElementsByClassName('mountainsB');
    let text = document.getElementsByClassName('text');
    let btn = document.getElementsByClassName('btn');
    let mountainsF = document.getElementsByClassName('mountainsF');
    let header = document.querySelector('header');

    window.addEventListener('scroll', function(){
        let value = window.scrollY;
        stars.styles.left = value * 0.25 + 'px';
        moon.styles.top = value * 1.05 + 'px';
        mountainsB.styles.top = value * 0.5 + 'px';
        mountainsF.style.top = value * 0 + 'px';
        text.style.marginRighst = value * 4 + 'px';
        btn.style.marginTop = value * 1.5 + 'px';
        header.style.top = value * 0.5 + 'px';
    })


    return (
        <><header className={styles.header}>
            <a href="#" className={styles.logo}>Logo</a>

            <ul>
                <li><a href="#" className={styles.active}>Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </header>
        <section>
            <img src="stars.png" className={styles.stars}></img>
            <img src="moon.png" className={styles.moon}></img>
            <img src="mountains_behind.png" className={styles.mountainsB}></img>
            <h2 className={styles.text}>Moon Light</h2>
            <a href="#" className={styles.btn}>Explorer</a>
            <img src="mountains_front.png" className={styles.mountainsF}></img>
        </section>
        <div className={styles.sec}>
        <br></br>
            <h2>Scrolling Effects</h2>
            <br></br>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae explicabo, earum totam eveniet vero 
                exercitationem autem id incidunt? Illo tenetur natus numquam reiciendis excepturi enim dolore officiis,
                quibusdam explicabo odio? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis reiciendis
                quisquam natus dolores laborum. Earum deleniti quo itaque natus saepe, omnis quos rerum fuga repellendus
                cupiditate beatae fugit rem odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae explicabo, earum totam eveniet vero 
                exercitationem autem id incidunt? Illo tenetur natus numquam reiciendis excepturi enim dolore officiis,
                quibusdam explicabo odio? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis reiciendis
                quisquam natus dolores laborum. Earum deleniti quo itaque natus saepe, omnis quos rerum fuga repellendus
                cupiditate beatae fugit rem odio.
                <br></br><br></br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae explicabo, earum totam eveniet vero 
                exercitationem autem id incidunt? Illo tenetur natus numquam reiciendis excepturi enim dolore officiis,
                quibusdam explicabo odio? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis reiciendis
                quisquam natus dolores laborum. Earum deleniti quo itaque natus saepe, omnis quos rerum fuga repellendus
                cupiditate beatae fugit rem odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae explicabo, earum totam eveniet vero 
                exercitationem autem id incidunt? Illo tenetur natus numquam reiciendis excepturi enim dolore officiis,
                quibusdam explicabo odio? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis reiciendis
                quisquam natus dolores laborum. Earum deleniti quo itaque natus saepe, omnis quos rerum fuga repellendus
                cupiditate beatae fugit rem odio.
                <br></br><br></br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae explicabo, earum totam eveniet vero 
                exercitationem autem id incidunt? Illo tenetur natus numquam reiciendis excepturi enim dolore officiis,
                quibusdam explicabo odio? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis reiciendis
                quisquam natus dolores laborum. Earum deleniti quo itaque natus saepe, omnis quos rerum fuga repellendus
                cupiditate beatae fugit rem odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae explicabo, earum totam eveniet vero 
                exercitationem autem id incidunt? Illo tenetur natus numquam reiciendis excepturi enim dolore officiis,
                quibusdam explicabo odio? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis reiciendis
                quisquam natus dolores laborum. Earum deleniti quo itaque natus saepe, omnis quos rerum fuga repellendus
                cupiditate beatae fugit rem odio.
                <br></br><br></br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae explicabo, earum totam eveniet vero 
                exercitationem autem id incidunt? Illo tenetur natus numquam reiciendis excepturi enim dolore officiis,
                quibusdam explicabo odio? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis reiciendis
                quisquam natus dolores laborum. Earum deleniti quo itaque natus saepe, omnis quos rerum fuga repellendus
                cupiditate beatae fugit rem odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae explicabo, earum totam eveniet vero 
                exercitationem autem id incidunt? Illo tenetur natus numquam reiciendis excepturi enim dolore officiis,
                quibusdam explicabo odio? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis reiciendis
                quisquam natus dolores laborum. Earum deleniti quo itaque natus saepe, omnis quos rerum fuga repellendus
                cupiditate beatae fugit rem odio.
                <br></br><br></br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae explicabo, earum totam eveniet vero 
                exercitationem autem id incidunt? Illo tenetur natus numquam reiciendis excepturi enim dolore officiis,
                quibusdam explicabo odio? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis reiciendis
                quisquam natus dolores laborum. Earum deleniti quo itaque natus saepe, omnis quos rerum fuga repellendus
                cupiditate beatae fugit rem odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae explicabo, earum totam eveniet vero 
                exercitationem autem id incidunt? Illo tenetur natus numquam reiciendis excepturi enim dolore officiis,
                quibusdam explicabo odio? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis reiciendis
                quisquam natus dolores laborum. Earum deleniti quo itaque natus saepe, omnis quos rerum fuga repellendus
                cupiditate beatae fugit rem odio.
                <br></br><br></br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae explicabo, earum totam eveniet vero 
                exercitationem autem id incidunt? Illo tenetur natus numquam reiciendis excepturi enim dolore officiis,
                quibusdam explicabo odio? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis reiciendis
                quisquam natus dolores laborum. Earum deleniti quo itaque natus saepe, omnis quos rerum fuga repellendus
                cupiditate beatae fugit rem odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae explicabo, earum totam eveniet vero 
                exercitationem autem id incidunt? Illo tenetur natus numquam reiciendis excepturi enim dolore officiis,
                quibusdam explicabo odio? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis reiciendis
                quisquam natus dolores laborum. Earum deleniti quo itaque natus saepe, omnis quos rerum fuga repellendus
                cupiditate beatae fugit rem odio.
                <br></br><br></br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae explicabo, earum totam eveniet vero 
                exercitationem autem id incidunt? Illo tenetur natus numquam reiciendis excepturi enim dolore officiis,
                quibusdam explicabo odio? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis reiciendis
                quisquam natus dolores laborum. Earum deleniti quo itaque natus saepe, omnis quos rerum fuga repellendus
                cupiditate beatae fugit rem odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae explicabo, earum totam eveniet vero 
                exercitationem autem id incidunt? Illo tenetur natus numquam reiciendis excepturi enim dolore officiis,
                quibusdam explicabo odio? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis reiciendis
                quisquam natus dolores laborum. Earum deleniti quo itaque natus saepe, omnis quos rerum fuga repellendus
                cupiditate beatae fugit rem odio.
                <br></br><br></br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae explicabo, earum totam eveniet vero 
                exercitationem autem id incidunt? Illo tenetur natus numquam reiciendis excepturi enim dolore officiis,
                quibusdam explicabo odio? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis reiciendis
                quisquam natus dolores laborum. Earum deleniti quo itaque natus saepe, omnis quos rerum fuga repellendus
                cupiditate beatae fugit rem odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae explicabo, earum totam eveniet vero 
                exercitationem autem id incidunt? Illo tenetur natus numquam reiciendis excepturi enim dolore officiis,
                quibusdam explicabo odio? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis reiciendis
                quisquam natus dolores laborum. Earum deleniti quo itaque natus saepe, omnis quos rerum fuga repellendus
                cupiditate beatae fugit rem odio.
                <br></br><br></br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae explicabo, earum totam eveniet vero 
                exercitationem autem id incidunt? Illo tenetur natus numquam reiciendis excepturi enim dolore officiis,
                quibusdam explicabo odio? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis reiciendis
                quisquam natus dolores laborum. Earum deleniti quo itaque natus saepe, omnis quos rerum fuga repellendus
                cupiditate beatae fugit rem odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae explicabo, earum totam eveniet vero 
                exercitationem autem id incidunt? Illo tenetur natus numquam reiciendis excepturi enim dolore officiis,
                quibusdam explicabo odio? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis reiciendis
                quisquam natus dolores laborum. Earum deleniti quo itaque natus saepe, omnis quos rerum fuga repellendus
                cupiditate beatae fugit rem odio.
                <br></br><br></br>
            </p>
        </div></>
    );
}

