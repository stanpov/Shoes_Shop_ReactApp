import React from 'react';
import {Link} from 'react-router-dom'
import './Footer.css'
import {Facebook,Instagram,LinkedIn,Pinterest,Twitter} from '@material-ui/icons'

function Footer() {
    return (
        <div className="footer">
            <div className="footer_navigation_">
                <div className="footer_navigation_links">
                    <span className="footer-head_info">Categories</span>
                    <div className="footer_links_holder">
                        <Link to='/men' className="footer_category_link">Men</Link>
                        <Link to='/women' className="footer_category_link">Women</Link>
                        <Link to='/kids' className="footer_category_link">Kids</Link>
                        <Link to='/hotsale' className="footer_category_link">Hot Sale</Link>
                    </div>     
                </div>
                <div className="footer_navigation_links">
                    <span className="footer-head_info">ShoesSector</span>
                    <div className="footer_links_holder">
                        <Link to="/about" className="footer_category_link">About</Link>
                        <Link to='/contacts' className="footer_category_link">Cantacts</Link>
                        <Link to='/terms' className="footer_category_link">Terms</Link>
                       
                    </div>     
                </div>
                <div className="footer_navigation_links">
                    <span className="footer-head_info">Follow us:</span>
                    <div className="follow-links">
                        <Link to='/' className="footer_category_link"><Facebook /></Link>
                        <Link to='/' className="footer_category_link"><Twitter /></Link>
                        <Link to='/' className="footer_category_link"><Instagram /></Link>
                        <Link to='/' className="footer_category_link"><Pinterest /></Link>
                        <Link to='/' className="footer_category_link"><LinkedIn /></Link>  
                    </div>     
                </div>
            </div>
        </div>
    )
}

export default Footer
