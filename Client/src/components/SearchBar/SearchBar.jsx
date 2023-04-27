import '../SearchBar/SearchBar.css';
import { useState } from "react";
const SearchBar = ({onSearch}) => {
   
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div>
         <input type='search' onChange={handleChange} value={id}/>
         <button className="botonAgregar" onClick={() => { onSearch(id); setId('')}}>Agregar</button>
      </div>
   );
}


export default SearchBar;