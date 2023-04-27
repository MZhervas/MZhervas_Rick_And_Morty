import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';

// put here the const for API_KEy and URL :) => this to modify the axios call
// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
// const API_KEY = '6af6ddedaf26.c1ac8d850aed2dc51540';

const Detail = () => {

    const [character, setCharacter] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);



    return(
        <div>
    
            <h1>{character?.name}</h1>
            <hr></hr>
            <label>- STATUS -</label> <p>{character?.status}</p>
            <label>- GENDER -</label> <p>{character?.gender}</p>
            <label>- SPECIE -</label> <p>{character?.species}</p>
            <label>- ORIGIN -</label> <p>{character?.origin?.name}</p>
           
            <img src={character?.image} alt={character?.name} />
                
        </div>
    )
}

export default Detail;