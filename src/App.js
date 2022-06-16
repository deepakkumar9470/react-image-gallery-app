import React, { useState ,useContext,useState} from 'react'
import './App.css';
import Navbar from './components/Navbar'
import ImageSearch from './components/ImageSearch';
import Hero from './components/Hero';
import Toggle from './components/Toggle';
import axios from 'axios'
import { ThemeContext } from './context/context';



function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  const [query, setQuery] = useState('')
  const [clientId, setClientId] = useState(process.env.UNSPLASH_ACCESS_KEY)
  const [photo, setPhoto] = useState([])

  const handleChange = (e) => {
    if (e.key === 'Enter') {
      setQuery(e.target.value)
    }
    setQuery(e.target.value)
  }

  const handleSubmit = async () => {
    const fetchUrl = `https://api.unsplash.com/search/photos?client_id=${clientId}&query=${query}&page=1`;
    try {
      const res = await axios.get(fetchUrl)
      console.log(res)
      setPhoto(res.data.results)

    } catch (error) {
      console.log(error)
    }

  }

  return (

    <div style={{backgroundColor : darkMode ? '#222' : '#fff' , color : darkMode && '#fff'}}>
      <Toggle/>
      <Navbar query={query} handleChange={handleChange} handleSubmit={handleSubmit} />
      <Hero />
      <ImageSearch photo={photo} setPhoto={setPhoto} />

    </div>


  );
}

export default App;
