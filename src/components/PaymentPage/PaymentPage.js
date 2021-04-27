import React,{useEffect} from 'react';
import "./PaymentPage.css"

function PaymentPage() {

    useEffect(()=>{
        window.scrollTo(0, 0);
        
    },[])
    
    return (
        <div className="payment_info">
            <img className="thanks_img" src="https://images.saymedia-content.com/.image/t_share/MTc0OTg3MTQ4NTkwNzIwNDUy/thank-you-notes-and-appreciation-messages-for-customers-and-clients.jpg" alt="thank_picture" />
        </div>
    )
}

export default PaymentPage
