import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-types";

const initialState = {
    myFavorites: [],
    allCharactersFav: []
}

const reducer = (state = initialState, {type, payload} ) => {
    switch(type) {

        case ADD_FAV:
            return {
                ...state,
                myFavorites: payload,
                allCharactersFav: payload
            };

        case REMOVE_FAV: 
            return {
                ...state,
                myFavorites: payload,
                allCharactersFav: payload
            };

        case FILTER: 

            const filterFav = state.allCharactersFav.filter(char => char.gender === payload)
            return {
                ...state,
                myFavorites: 
                    payload === 'allCharacters'
                    ? [...state.allCharactersFav]
                    : filterFav
            };
        
        case ORDER:
            const copyAllCharacters = [...state.allCharactersFav];
            return {
               ...state,
               myFavorites:
                   payload === 'A'
                   ? copyAllCharacters.sort((a, b) => a.id - b.id)  // id from each character we want to order !
                   : copyAllCharacters.sort((a, b) => b.id - a.id)  // id from each character we want to order !

            };

        default:
            return {...state}
    }
}

export default reducer;