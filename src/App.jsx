import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import Mission from './components/Mission'
import './styles/app.css'
import { useState } from 'react'
import Footer from './components/Footer'

const App = () => {

  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
     <main id={theme}>
          <Navbar toggleTheme={toggleTheme}/>
        <section>
          <Homepage theme={theme}/>
        </section>
        <section>
          <About theme={theme}/>
        </section>
        <section>
          <Services theme={theme}/>
        </section>
        <section>
          <Mission theme={theme}/>
        </section>
        <section>
          <Footer theme={theme}/>
        </section>
     </main>
    )
}


export default App;