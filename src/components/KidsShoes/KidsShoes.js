import React from 'react'
import {Link} from 'react-router-dom'
import {ButtonBase} from '../../config/materialConfig'
import "./KidsShoes.css"

function KidsShoes() {
    return (
        <>
             <div className="menShoes_container">
            <div className="img_grid">
            <Link to='/kids/boys'>
            <ButtonBase>
                <img className="image_fit" src="https://thumbs.dreamstime.com/z/congratulations-boy-card-small-sport-shoes-29103024.jpg"  alt="pic"/>
            </ButtonBase>
            </Link>
            </div>
            
            <div className="class_information">
                <h4>Boys shoes</h4>
                <span>Boys shoes are typically for boys.They looks good and confortable for your children.We have some really good boys collections.Click to check out.</span>
            </div>
        </div>
        <div className="menShoes_container">
            <div className="img_grid">
            <Link to='/kids/girl'>
            <ButtonBase>
                <img className="image_fit" src="https://cdn.shopify.com/s/files/1/0102/7755/2164/collections/Girl_shoes.jpg?v=1618649578"  alt="pic"/>
            </ButtonBase>
            </Link>
            </div>
            
            <div className="class_information">
                <h4>Girls shoes</h4>
                <span>Girls shoes are really pretty.They are made for your small princess and looks good and comfortable.We have a lot of shoes,specially for your little girl.Click to check out.</span>
            </div>
        </div>
        </>
    )
}

export default KidsShoes
