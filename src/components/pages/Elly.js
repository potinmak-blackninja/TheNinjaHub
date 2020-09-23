import React from 'react';
import './ArtistPage.css';
import { useHistory } from "react-router-dom";

export default function Elly() {
  const history = useHistory();
  function handleClick() {
    history.push("/");
  }
  return ( <>
  
  
  <div className="posts-container">
  
      <iframe src="https://docs.google.com/document/d/e/2PACX-1vQ1h3D4ei9oYa2Ng7dh91zAByAf1SRj6julkT1E_yFBJmTQZ9T1t3CWZwEUOHWeDzYPmqX4semF4Ox3/pub?embedded=true"
        scrolling="auto"
        marginwidth="0"
        frameboder="0"
        width="200"
        seamless="seamless"
        >
      </iframe>
      <h5>Artist's Personal Social Media</h5>
      <div className='ellysocial'>
        <a href="http://www.instagram.com/elly24soul" target="_blank" class="sicons"><i class="fab fa-instagram"></i></a>
        <a href="http://www.twitter.com/elly24soul" target="_blank" class="sicons"><i class="fab fa-twitter"></i></a>
        <a href="http://www.facebook.com/jsoulb3" target="_blank" class="sicons"><i class="fab fa-facebook-square"></i></a>
        <a href="https://www.youtube.com/channel/UCbEutdoNcdNFEVKKQzGS2Mw" target="_blank" class="sicons"><i class="fab fa-youtube"></i></a>
        <button className="buttt" onClick={handleClick}>Back</button>
    </div>
      

  </div>
  
  </>
  );
}
