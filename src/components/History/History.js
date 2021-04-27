import React,{useState,useEffect,useContext} from 'react'
import "./History.css";
import {storage} from '../../firebase/config';
import {AuthContext} from '../../globalContext/AuthContext';
import Orders from '../Orders/Orders';

function History() {
    const [allOrders,setAllOrders] = useState([]);
    const {user} = useContext(AuthContext)
    useEffect(()=>{

        storage.collection('users').doc(user?.uid).collection('orders').orderBy('createdAt','desc')
        .onSnapshot(snap=>{
            setAllOrders(snap.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            })))
        })
    },[])
    return (
        <div className="history_info">
            
            <div className="history_orders">
                {allOrders.map(order=>{
                    return (
                        <Orders key={order.id} order={order} />
                    )
                })}
            </div>
        </div>
    )
}

export default History
