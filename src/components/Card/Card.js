import React,{useState,useContext} from 'react';
import "./Card.css";
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
    }

    const addToFavorite = (e)=>{
      
        storage.collection('users').doc(user?.uid).collection('favorites').doc().set({
            id: item.id,
            title:item.title,
            image:item.url,
            brand:item.brand,
            price:item.price

        })

    }

    return (
        <div className="card_item_div">
            <img onClick={showZoomer} className="image_item_card" src={item.url} alt="pic" />
            <div className="description_item_card">
                <h4 className="title_item_card">{item.title}</h4>
                <span>Brand: {item.brand}</span>
                <span>Price: <span className='price_item_card'>${item.price}</span></span>
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
