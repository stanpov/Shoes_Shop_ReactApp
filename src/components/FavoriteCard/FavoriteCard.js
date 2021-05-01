import React,{useContext} from 'react';
import "./FavoriteCard.css"
import {Zoom,toast,} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {Button,DeleteForeverOutlined} from '../../config/materialConfig';
import {storage} from '../../firebase/config';
import {AuthContext} from '../../globalContext/AuthContext';

function FavoriteCard({item}) {
    const {user} = useContext(AuthContext);

    const remove = (e)=>{
        e.preventDefault()

        storage.collection('users').doc(user?.uid).collection('favorites').doc(item.id).delete()
        toast.warning('✅ Removed from favorites',{
            position: "bottom-right",
                autoClose: 2500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition:Zoom
        })
    }
    return (
        <div className="my_best_items_card">
            <img className="my_best_item_picture" src={item.data.image} alt="favorite_picture_" />
            <Button
            className="favorite_btn_"
            variant="contained"
            color="secondary"
            startIcon={<DeleteForeverOutlined/>}
            onClick={remove}
            >
                Remove from Favorites
            </Button>
        </div>
    )
}

export default FavoriteCard
