import React from 'react'
import "./CheckoutProducts.css"
import {Button,DeleteForeverOutlined} from '../../config/materialConfig';
import {useProductValue} from '../../globalContext/ProductsContext';

function CheckoutProducts({item}) {
    const [{basket},dispatch] = useProductValue();

    const removeFromBasket = ()=>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: item.id
        })
    }
    return (
        <div className="checkoutProducts_">
            <img className="checkout_img" src={item.image} alt="itemPic" />
            <div className="checkout_info">
                <h4>{item.title}</h4>
                <span>Brand: {item.brand}</span>
                <span>Price: {item.price}</span>
                <Button onClick={removeFromBasket} startIcon={<DeleteForeverOutlined/>} variant="contained" color="secondary">Remove from basket</Button>
            </div>
        </div>
    )
}

export default CheckoutProducts
