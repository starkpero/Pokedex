import React from 'react';
import './Navbar.css';

const Navbar = ()=>{
    const imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return (
        <div className="navbar">
            <div>
                <img src={imgUrl} alt="pokeapi-logo" className="navbar-image"></img>
            </div>
        </div>
    );
};


export default Navbar;