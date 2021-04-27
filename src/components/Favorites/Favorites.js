import React,{useContext,useEffect,useState} from 'react';
import "./Favorites.css";
import {AuthContext} from '../../globalContext/AuthContext';
import {storage} from '../../firebase/config';
import FavoriteCard from '../FavoriteCard/FavoriteCard';


function Favorites() {
    const {user} = useContext(AuthContext);
    const [favorites,setFavorites] = useState([]);
 
    

    useEffect(()=>{

        storage.collection('users').doc(user?.uid).collection('favorites')
        .onSnapshot(snap=>{
            setFavorites(snap.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            })))
        })
    },[])


    return (
        <div className="my_favorite">
            <h1 className="favorite_header">My favorite products:</h1>

            <div className="favorite_items_">
                {favorites.map(item=>{
                    return(
                        <FavoriteCard key={item.id} item={item} />
                    )
                })}
            </div>
        </div>
    )
}

export default Favorites
