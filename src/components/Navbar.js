import {  NavLink } from "react-router-dom";
export default function NavBar({onLogout}){


    return(
        <>
           
            <NavLink to="/">HOME</NavLink>|
            <NavLink to="/shirts">SHIRTS</NavLink> | 
            <NavLink to="/shoes">SHOES</NavLink> |
            <NavLink to="/trousers">TROUSERS</NavLink> |
            <NavLink to="/cart">CART</NavLink>
            <button onClick={onLogout} className='logout-btn' >Log Out</button>

         
        </>
    );
}