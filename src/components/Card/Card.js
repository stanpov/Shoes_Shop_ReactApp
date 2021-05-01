import React,{useContext} from 'react';
import "./Card.css";
import {Zoom,toast,} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {Button,ShoppingCartOutlined,StarBorder} from '../../config/materialConfig';
import {useProductValue} from '../../globalContext/ProductsContext';
import {storage} from '../../firebase/config';
import {AuthContext} from '../../globalContext/AuthContext'


function CardItems({item,setImageUrl}) {
    const [{basket},dispatch] = useProductValue()
    const {user} = useContext(AuthContext);
    
  
    const showZoomer = (e)=>{
        setImageUrl(e.currentTarget.src)
    }

    const addToBasket =(e)=>{
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id:item.id,
                title: item.title,
                image: item.url,
                brand: item.brand,
                price: item.price
            }
        })

        toast.info('✅ Added to basket',{
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

    const addToFavorite = (e)=>{
      
        storage.collection('users').doc(user?.uid).collection('favorites').doc().set({
            id: item.id,
            title:item.title,
            image:item.url,
            brand:item.brand,
            price:item.price

        })
        toast.warning('✅ Added to favorites',{
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
        <div className="card_item_div">
            <img onClick={showZoomer} className="image_item_card" src={item.url} alt="pic" />
            <div className="description_item_card">
                <h4 className="title_item_card">{item.title}</h4>
                <span>Brand: {item.brand}</span>
                <span>Price: <span className='price_item_card'>${item.price}</span>{item.oldPrice ? (<span className="hotsale_price">${item.oldPrice}</span>) : null}</span>
            </div>
            <Button 
            variant="contained"
            color="secondary"
            className="button_item_card"
            startIcon={<ShoppingCartOutlined/>}
            onClick={addToBasket}
            >
                Add to basket
            </Button>
            <Button 
            onClick={addToFavorite}
            variant="contained"
            color="primary"
            className="button_item_card"
            startIcon={<StarBorder/>}
            >
                Add to favorites
            </Button>

        </div>
        
    )
}

export default CardItems
