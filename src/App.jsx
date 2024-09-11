import { useState } from 'react'

import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience} from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Education } from './components/Education/Education';
import { Contact } from './components/Contact/Contact';
import { Achievements } from './components/Achievements/Achievements';
function App() {
  
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Education/>
      <Achievements/>
      <Contact/>
    </div>
  )
}

export default App
