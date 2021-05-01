import React from 'react'
import "./WrongAddress.css"
import {useHistory} from 'react-router-dom'

function WrongAddress() {
    const history = useHistory();
    const backToHome = (e)=>{
        e.preventDefault();
        history.push('/')
    }
    return (
        <div className="wrong_address_div">
            <button className="wrong_page_btn" onClick={backToHome} >Back to home</button>
            <img src="https://i.pinimg.com/474x/36/3e/89/363e89e80eac2a3b5d63d88ae39aa638.jpg"  alt="wrong_address_img"/>
        </div>
    )
}

export default WrongAddress
