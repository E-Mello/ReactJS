import React, { useEffect } from 'react';
import Tmdb from './Tmdb';
import './App.css';
import MovieRow from './components/MovieRow';
import FeatureMovie from './components/FeaturedMovie';
import Header from './components/Header/';

export default () => {

    const [movieList, setMovieList] = React.useState([]);
    const [featureData, setFeatureData] = React.useState(null);
    const [blackHeader, setBlackHeader] = React.useState(false);

    useEffect(() => {
        const loadAll = async () => {
            //Pegar a lista totaal
            const list = await Tmdb.getHomeList();
            setMovieList(list);

            //Pegando o Feature
            let originals = list.filter(i=> i.slug === 'originals');
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            let chosen = originals[0].items.results[randomChosen];
            let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
            setFeatureData(chosenInfo);
        }

        loadAll();
    }, []);

    useEffect(() => {
        const scrollListener = () => {
            if(window.scrollY > 100) {
                setBlackHeader(true);
            } else {
                setBlackHeader(false);
            }
        }

        window.addEventListener('scroll', scrollListener);
        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, []);

  return (
    <div className="page">

        <Header black={blackHeader}/>
        
        {featureData && <FeatureMovie item={featureData}/>}

         <section className="lists">
            {movieList.map((item, key) => (
                <MovieRow key={key} title={item.title} items={item.items}/>
            ))}
        </section>

        <footer>
            Feito com <span role="img" aria-label="Heart">❤️</span><br/>
            Direitos de imagem para Netflix<br/>
            Dados pego do site Themoviedb.org<br/>
        </footer>

        {movieList.length <= 0 &&
         <div className="loading">
            <img src="https://i.pinimg.com/originals/9a/02/aa/9a02aac51ed499e01518ac73dd954eb1.gif" alt="Loading" />
        </div>
        }   
    </div>
  );
}