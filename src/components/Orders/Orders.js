import React from 'react'
import "./Orders.css"

function Orders({order}) {
    return (
        <div className="orders__history_div">
            <div className="total_sum_history"><strong>Total: {order.data.amount}$</strong></div>
            {order.data.basket.map(item=>{
                return (
                    <div className="orders_items_info" key={item.id}>
                        <div className="orders_pictures">
                            <img className="order_history_picture" src={item.image} alt="order_picture" />
                        </div>
                     <div>
                        <h4>Title: {item.title}</h4>
                        <h6>Brand: {item.brand}</h6>
                        <span>price: {item.price}</span>
                    </div>
                    </div>
                )
            })}
            
            
        </div>
    )
}

export default Orders
