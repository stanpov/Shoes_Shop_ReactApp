import React, { useState,useEffect,useContext } from 'react';
import './Header.css';
import {auth} from '../../firebase/config'
import { NavLink, Link } from 'react-router-dom'
import { StarBorder, AccountCircleOutlined, ShoppingCartOutlined, Button, MenuList, MenuItem, Popper, Paper, Grow,ClickAwayListener  } from '../../config/materialConfig';
import {AuthContext} from '../../globalContext/AuthContext'
import {useProductValue} from '../../globalContext/ProductsContext'


function Header() {
    
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const {user} = useContext(AuthContext);
    const [{basket},dispatch] = useProductValue();

    

    const handleToggle = (e) => {
        e.preventDefault()
        setAnchorEl(e.currentTarget);
        setOpen(true)
    }

    const handleClose = () => {
        
        setOpen(false)
    }

    const logOut = ()=>{
        auth.signOut();
        handleClose()
    }

    useEffect(()=>{
    },[open])

    return (
        <header>
            <div className="header-top">
                <Link to='/' className="nav-link-item" > <div className="shop-name-logo">
                    <span className="white-span">SHOES</span>
                    <span className="red-span">SECTOR</span>
                </div>
                </Link>
                <div className="shop-header-categories">
                    <NavLink to='/men' className="nav-link-item-active" activeClassName="is-active"><span>Men</span></NavLink>
                    <NavLink to='/women' className="nav-link-item-active" activeClassName="is-active"><span>Women</span></NavLink>
                    <NavLink to='/kids' className="nav-link-item-active" activeClassName="is-active"><span>Kids</span></NavLink>
                    <NavLink to='/hotsale' className="nav-link-item-active" activeClassName="is-active"><span className="span-hot-sale">Hot Sale</span></NavLink>
                </div>
                <div className="shop-account-info">
                    <div className="account-holder">
                        <Button
                            
                            aria-controls={open ? 'menu-list-grow' : undefined}
                            aria-haspopup="true"
                            onClick={handleToggle}
                            style={{ color: '#c8c8c9',minWidth: '0px',padding: '0px'}}
                        >
                            <AccountCircleOutlined />
                        </Button>
                        <Popper open={open} anchorEl={anchorEl} role={undefined} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList autoFocusItem={open} id="menu-list-grow" >
                                                {user ? (
                                                    <>
                                                     <MenuItem onClick={handleClose}><Link className="profile-menu-items" to="/profile">Profile</Link></MenuItem>
                                                     <MenuItem onClick={handleClose}><Link className="profile-menu-items" to="/favorites">Favorites</Link></MenuItem>
                                                     <MenuItem onClick={handleClose}><Link className="profile-menu-items" to="/history">History</Link></MenuItem>
                                                     <MenuItem onClick={()=>logOut()}><Link className="profile-menu-items" to="/">Logout</Link></MenuItem>
                                                    </> ) : (
                                                    <> <MenuItem onClick={handleClose}><Link className="profile-menu-items" to="/login">Login</Link></MenuItem>
                                                    <MenuItem onClick={handleClose}><Link className="profile-menu-items" to="/register">Register</Link></MenuItem>
                                                    </>
                                                    )}

                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </div>
                    {user && <div className="account-favorite">
                        <Link className="account-products" to="/favorites"><StarBorder /></Link> 
                    </div>}
                    <div className="account-products">
                       <Link className="account-products" to='/myorder'><ShoppingCartOutlined /></Link> 
                        <span className="item-number">{basket?.length}</span>
                    </div>

                </div>
            </div>



        </header>
    )
}

export default Header
