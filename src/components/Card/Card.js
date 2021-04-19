import React,{useState} from 'react';
import "./Card.css";
import {Button,ShoppingCartOutlined,StarBorder} from '../../config/materialConfig'

function CardItems({item,setImageUrl}) {


    const showZoomer = (e)=>{
        setImageUrl(e.currentTarget.src)
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
            >
                Add to basket
            </Button>
            <Button 
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
