import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";

const Favorites = () => {

    const dispatch = useDispatch();
    const theFavorites = useSelector(state => state.myFavorites)
    const [aux, setAux] = useState(false);


    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(true);
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    }

    return (
        <div>
            <select onChange={handleOrder}>
                <option  value='A'>Ascendente</option>
                <option  value='D'>Descendente</option>
            </select>

            <select onChange={handleFilter}>
                <option  value="Male">Male</option>
                <option  value="Female">Female</option>
                <option  value="Genderless">Genderless</option>
                <option  value="unknown">unknown</option>
                <option  value="allCharacters">All characters</option>
            </select>
            
            {
                theFavorites?.map(fav => {
                    return (
                        <Card
                        key={fav.id}
                        id={fav.id}
                        name={fav.name}
                        gender={fav.gender}
                        species={fav.species}
                        image={fav.image}   
                        onClose={fav.onClose}
                        />
                    )
                })
            }
        </div>
    )

}

export default  Favorites;