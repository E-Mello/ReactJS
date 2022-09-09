// JSX = JavaScript + XML
import { Forum } from './components/Forum';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { Footer } from './components/Footer';

import './global.css'
import styles from './App.module.css'




export function App() {
  return (
    <>
      <Header />
      <HomePage />
      {/*<Forum />*/}
      <Footer />
    </>
  )
}
