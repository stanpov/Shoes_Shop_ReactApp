import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import {ButtonBase} from '../../config/materialConfig'
import './MenShoes.css'



function MenShoes() {
    
    
    
    useEffect(()=>{
        window.scrollTo(0, 0);
        
    },[])


    return (
        <>
        <div className="menShoes_container">
            <div className="img_grid">
            <Link to='/men/casual'>
            <ButtonBase>
                <img className="image_fit" src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/fermion/images/category_slider/img/tr:w-824,/Casual-Shoes.mobile.jpg?rnd=20200526195200"  alt="pic"/>
            </ButtonBase>
            </Link>
            </div>
            
            <div className="class_information">
                <h4>Casual men shoes</h4>
                <span>Casual shoes are basically footwear which is a little less formal. Casual shoes are comfortable footwear which could be easily used for daily wear. Casual shoes are perfect for vacations and trips. Other than providing comfort these types of shoes come in great varieties and styles.</span>
            </div>
        </div>
        <div className="menShoes_container">
            <div className="img_grid">
            <Link to='/men/running'>
            <ButtonBase>
                <img className="image_fit" src="https://s.stpost.com/m/img/Guides/landingPage/header/guideImage1600-fitness-runningShoes.jpg"  alt="pic"/>
            </ButtonBase>
            </Link>
            </div>
            
            <div className="class_information">
                <h4>Running men shoes</h4>
                <span>Sneakers (also called trainers, athletic shoes, tennis shoes, gym shoes, kicks, sport shoes, flats, running shoes, skate shoes, or runners) are shoes primarily designed for sports or other forms of physical exercise but that are now also widely used for everyday casual wear.</span>
            </div>
        </div>
        <div className="menShoes_container">
            <div className="img_grid">
            <Link to='/men/formal'>
            <ButtonBase>
                <img className="image_fit" src="https://shoprapy.com/wp-content/uploads/2019/11/Types-of-Men-shoes.png"  alt="pic"/>
            </ButtonBase>
            </Link>
            </div>
            
            <div className="class_information">
                <h4>Formal men shoes</h4>
                <span>Formal shoes are also called dress shoes as they can be worn when 'dressing up' – suits, blazers, shirts, trousers, etc.</span>
            </div>
        </div>
        </>
    )
}

export default MenShoes
