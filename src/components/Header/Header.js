import React from 'react';
import './Header.css';
import {NavLink,Link} from 'react-router-dom'
import {StarBorder,AccountCircleOutlined,ShoppingCartOutlined} from '../../config/materialConfig';

function Header() {
    return (
        <header>
            <div className="header-top">
                <Link to='/' className="nav-link-item" > <div className="shop-name-logo">
                            <span className="white-span">SHOP</span>
                            <span className="red-span">SECTOR</span>
                        </div>
                </Link>
                <div className="shop-header-categories">
                <NavLink to='/login' className="nav-link-item-active" activeClassName="is-active"><span>Men</span></NavLink> 
                <NavLink to='/women' className="nav-link-item-active" activeClassName="is-active"><span>Women</span></NavLink>
                <NavLink to='/kids' className="nav-link-item-active" activeClassName="is-active"><span>Kids</span></NavLink>
                <NavLink to='/hotsale' className="nav-link-item-active" activeClassName="is-active"><span className="span-hot-sale">Hot Sale</span></NavLink> 
                </div>
                <div className="shop-account-info">
                    <div className="account-holder">
                    <AccountCircleOutlined />
                    </div>
                    <div className="account-favorite">
                    <StarBorder />
                    </div>
                    <div className="account-products">
                        <ShoppingCartOutlined />
                        <span className="item-number">0</span>
                    </div>
                    
                </div>
            </div>
            
            <img className="header-image" src="https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Running/Galleries/Adjustments+to+Beat+Burnout/Slide+1.jpg" />
            
        </header>
    )
}

export default Header
