import React,{useState,useEffect,useContext} from 'react'
import "./History.css";
import {storage} from '../../firebase/config';
import {AuthContext} from '../../globalContext/AuthContext';
import Orders from '../Orders/Orders';



function History() {
    const [allOrders,setAllOrders] = useState([]);
    const {user} = useContext(AuthContext)
    
    useEffect(()=>{

        storage.collection('users').doc(user.uid).collection('orders').orderBy('createdAt','desc')
        .onSnapshot(snap=>{
            setAllOrders(snap.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            })))
        })
    },[user])
    return (
        <div className="history_info">
            {allOrders.length === 0 ? (<h2 className="history_info_empty_">You dont have orders history yet.Please make a payment and it will show.</h2>) : 
           (<div className="history_orders">
           {allOrders.map(order=>{
               return (
                   <Orders key={order.id} order={order} />
               )
            })}
            </div>)}
            
        </div>
    )
}

export default History
