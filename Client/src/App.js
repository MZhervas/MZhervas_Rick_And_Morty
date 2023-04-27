import './styles_app/App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
// const API_KEY = '6af6ddedaf26.c1ac8d850aed2dc51540';
// const email = 'mzervinohervas@gmail.com';
// const password = 'Tincho83';
const URL = 'http://localhost:3001/rickandmorty/login';

function App() {

   const [access, setAccess] = useState(false);
   const [characters, setCharacters] = useState([]);

   const location = useLocation().pathname;
   const navigate = useNavigate();

   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         
         setAccess(access);
         access && navigate('/home');
         
         
      } catch (error) {
         console.log(error.message)
      }
   }

   useEffect(
      () => {
         !access && navigate('/')
      }, [access, navigate]);


   const onSearch = async (id) => {
      try {
      const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
           
      if (data.name) {
         let exist = characters.find((ch) => ch.id === data.id)
         if (exist) {
            alert("Ya existe el personaje")
         } else {
            setCharacters((oldChars) => [...oldChars, data]);
         }
      }
         
      } catch (error) {
         alert('¡No hay personajes con este ID!');
      }   

   }

      const onClose = (id) => {

      const charactersFilter = characters.filter(character => character.id !== id)
      setCharacters(charactersFilter)
      
      }

   
   
   
   return (
      
      <div className='App'>
         
         {location !== '/' && <Nav onSearch={onSearch} setCharacters={setCharacters} setAccess={setAccess} />} 
         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
            <Route path='/favorites' element={<Favorites/>} />
         </Routes>
         
      </div>
   );
}

export default App;
