import React from 'react';
import '../App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook,faTwitter,faInstagram,faGithub} from '@fortawesome/free-brands-svg-icons'
function SocialMedia(){

    return(
        <div className= "socialmedia">
            <h3>Follow me</h3>
        <div className = "social">
            <a href = "https://www.facebook.com/raja.karnam.10" className = "facebook">
                <FontAwesomeIcon icon = {faFacebook} size = "2x" />
            </a>
            <a href = "https://www.twitter.com/imrkarnam" className = "twitter">
                <FontAwesomeIcon icon = {faTwitter} size = "2x" />
            </a>
            <a href = "https://www.instagram.com/imrkarnam" className = "instagram">
                <FontAwesomeIcon icon = {faInstagram} size = "2x" />
            </a>

            <a href = "https://github.com/Raja9999" className = "github">
                <FontAwesomeIcon icon = {faGithub} size = "2x" />
            </a>
        </div>
            </div>
        
    );
}
export default SocialMedia;