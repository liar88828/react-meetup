 import { createContext } from "react";

 const FavoritesContext=createContext({
    favorites:[],
    totalFavorites:0
 });

 functionFavoritesContextProvider(props){

    const context={};
return <FavoritesContext.Provider value={context}>
    {props.children}
</FavoritesContext.Provider>

 }