// JSX = JavaScript + XML
import { HomePage } from './components/HomePage';
import { Footer } from './components/Footer';
import { SideNavBarLeft } from './components/SideNavBarLeft';

import './global.css'
import styles from './App.module.css'






export function App() {
  return (
    <>
      {<SideNavBarLeft />}
      {/* <HomePage /> */}
      {/* <Footer /> */}
    </>
  )
}
