import React from 'react';
import '../App.css';
import { Link, Router } from 'react-router-dom';

function Navbar(){

    return(
           <nav>
                   <ul className= "navsub">
                     <li><a className ="india" href= "/#">Covid-News-Updates</a></li>
                      <li><a className ="india" href= "https://www.covid19india.org/">Indian-Covid-Cases</a></li>
                   </ul>
           </nav>

    );
}
export default Navbar;