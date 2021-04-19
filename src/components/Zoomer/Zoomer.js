import React from 'react'
import "./Zoomer.css"

function Zoomer({imageUrl,setImageUrl}) {

    const handleClick = (e)=>{
        if(e.currentTarget.className === 'backdrop') {
            setImageUrl(null)
        }
       
        
    }
   

    return (
        <div className="backdrop" onClick={handleClick}>
            <img src={imageUrl} alt='imagehere'/>
        </div>
    )
}

export default Zoomer
