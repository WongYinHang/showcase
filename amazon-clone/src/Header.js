import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import "./Header.css"
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link to={!user && "/login"}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
                        <span className="header__optionLine2">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <Link to="/orders">
                    <div className="header__option">
                        <span className="header__optionLine1">Returns</span>
                        <span className="header__optionLine2"> & Orders</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLine1">Yours</span>
                    <span className="header__optionLine2">Prime</span>
                </div>
            </div>
            <Link to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLine2 header__basketCount">{basket?.length}</span>
                </div>
            </Link>




        </div>
    )
}

export default Header



