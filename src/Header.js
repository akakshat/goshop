import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';
import { auth } from './firebase'; 


function Header() {
    const[{ Cart , user}] = useStateValue();

    const login = () =>{
        if(user){
            auth().signOut();
        }
    }
     
    return (
      <nav className= "header">
  
          {/* LOGO ON THE LEFT IMAGE */}
          <Link to="/">
          <img 
              className= "header__logo" 
              src="goshop.png" 
              alt =" " />    
          
          </Link>
  
          {/* SEARCH BOX */}
          <div className= "header__search">
              <input type="text" className = "header__searchInput" />
              <SearchIcon className="header__searchIcon"/>    
          </div>
  
          {/* 3 LINKS */}
          <div className="header__nav">
  
              {/* 1st LINK */}
              <Link to={!user && "/login"}className= "header__link">
                  <div onClick={login} className="header__option">
                      <span className="header__optionLineOne">Hello {user?.email}</span>
                      <span className="header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
                  </div>
              </Link>
  
              {/* 2nd LINK */}
              <Link to= "/"className= "header__link">
                  <div className="header__option">
                      <span className="header__optionLineOne">Returns</span>
                      <span className="header__optionLineTwo"> & Orders </span>
                  </div>
              </Link>
  
              {/* 3rd LINK */}
              <Link to= "/"className= "header__link">
                  <div className="header__option">
                      <span className="header__optionLineOne">Your</span>
                      <span className="header__optionLineTwo">Profile</span>
                  </div>
              </Link>
  
              {/* 4th LINK */}
              
              <Link to= "/checkout" className= "header__link">
                  <div className="header__optionCart">
                      {/* SHOPPING BASKET ICON */}
                      <ShoppingCartIcon />
                      {/* NO OF ITEMS IN THE BASKET */}
                      <span className="header__optionLineTwo header_cartCount">{Cart?.length}</span>
                  </div>
              </Link>
              
          </div>
      </nav>
    )
  }

  export default Header