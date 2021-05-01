import React from 'react';
import "./WomenShoes.css"
import {Link} from 'react-router-dom';
import {ButtonBase} from '../../config/materialConfig';


function WomenShoes() {
    return (
        <>
        <div className="menShoes_container">
            <div className="img_grid">
            <Link to='/women/casual'>
            <ButtonBase>
                <img className="image_fit" src="https://c8.alamy.com/comp/JKM5AW/is-there-room-in-your-closet-for-women-s-casual-shoes-text-background-JKM5AW.jpg"  alt="pic"/>
            </ButtonBase>
            </Link>
            </div>
            
            <div className="class_information">
                <h4>Casual women shoes</h4>
                <span>Casual shoes are basically footwear which is a little less formal. Casual shoes are comfortable footwear which could be easily used for daily wear. Casual shoes are perfect for vacations and trips. Other than providing comfort these types of shoes come in great varieties and styles.</span>
            </div>
        </div>
        <div className="menShoes_container">
            <div className="img_grid">
            <Link to='/women/running'>
            <ButtonBase>
                <img className="image_fit" src="data:image/jpeg;base64,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"  alt="pic"/>
            </ButtonBase>
            </Link>
            </div>
            
            <div className="class_information">
                <h4>Running women shoes</h4>
                <span>Sneakers (also called trainers, athletic shoes, tennis shoes, gym shoes, kicks, sport shoes, flats, running shoes, skate shoes, or runners) are shoes primarily designed for sports or other forms of physical exercise but that are now also widely used for everyday casual wear.</span>
            </div>
        </div>
        <div className="menShoes_container">
            <div className="img_grid">
            <Link to='/women/formal'>
            <ButtonBase>
                <img className="image_fit" src="https://image.freepik.com/free-vector/fashion-women-s-shoes-design_25030-5017.jpg"  alt="pic"/>
            </ButtonBase>
            </Link>
            </div>
            
            <div className="class_information">
                <h4>Fashion women shoes</h4>
                <span>Formal shoes are also called dress shoes as they can be worn when 'dressing up' – suits, blazers, shirts, trousers, etc.</span>
            </div>
        </div>
            
        </>
    )
}

export default WomenShoes
