import React,{useState,useContext} from 'react';
import{useHistory} from 'react-router-dom'
import "./Basket.css";
import {Zoom,toast,} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useProductValue} from '../../globalContext/ProductsContext';
import {Button} from '../../config/materialConfig';
import {basketTotal} from '../../Reducer/reducer';
import CheckoutProducts from '../CheckoutProducts/CheckoutProducts';
import PaymentPage from '../PaymentPage/PaymentPage';
import {storage} from '../../firebase/config'
import {AuthContext} from '../../globalContext/AuthContext'
import firebase from "firebase/app";

function Basket() {
    const [{basket},dispatch] = useProductValue();
    const [payment,setPayment] = useState(false);
    const {user} = useContext(AuthContext);
    const history = useHistory()

    let valueBasket = basketTotal(basket);
   
    const makePayment = (e)=>{
        e.preventDefault();

        storage.collection('users').doc(user?.uid).collection('orders').doc().set({
            basket: basket,
            amount: valueBasket,
            createdAt:  firebase.firestore.FieldValue.serverTimestamp()
        }).then(()=>{
            dispatch({
                type: "EMPTY_BASKET"
            })
            setPayment(true)
            toast.success('✅ Successfully bought.',{
                position: "bottom-center",
                autoClose: 2500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition:Zoom
            })
            setTimeout(() => {
                setPayment(false);
                history.push('/');

            }, 2000);
        }).catch((error)=>{
            toast.error(`❌ ${error.message}`,{
                position: "bottom-center",
                autoClose: 2500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition:Zoom
            })
        })

    }
    return ( 
        payment ? <PaymentPage /> : (
        <div className="shopping_card_div">
            
        <div className="header_shopping_card">
            <img className='image_shooping_card' src="https://www.gocompare.com/media/Credit%20cards%20-%20Mobile_tcm19-184216.jpg?width=500&format=pjpg&auto=webp&quality=15,25" alt='shoopingCard' />
            <div className="orders_shopping_card">
                <span>Items: {basket?.length}</span>
                <span>Total: <strong>${valueBasket}</strong></span>
               {basket.length > 0 ? (<Button className="order_button_card disabled_btn" onClick={makePayment} >Make a payment</Button>) : null} 
            </div>
        </div>
        {basket.length === 0 ? (<h3 className="empty_basket_info">Your basket is empty.</h3>) : (<div className="orders_">
            {basket.map(item=>{
                return (
                    <CheckoutProducts key={item.id} item={item} />
                )
            })}
        </div>) }
        
        </div>)
    )
}

export default Basket
