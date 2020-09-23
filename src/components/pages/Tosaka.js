import React from 'react';
import './ArtistPage.css';
import { useHistory } from "react-router-dom";

export default function Tosaka() {
  const history = useHistory();
  function handleClick() {
    history.push("/");
  }
  
return (<>
 
    <div className="posts-container">
    
      <iframe src="https://docs.google.com/document/d/e/2PACX-1vRSFsXU17w_3mhLCbRDRC0gt8GgARpNTS42PnYQ7yWpAUfHW0FIVC2V86ng3vCETtUVzmkGlPg7f8hD/pub?embedded=true"
        scrolling="auto"
        marginwidth="0"
        frameboder="0"
        width="200"
        seamless="seamless"
        >
      </iframe>
  
  <h5>Artist's Personal Social Media</h5>
<div className='ellysocial'>
  <a href="https://www.instagram.com/3jsb_hiroomi_tosaka" target="_blank" class="sicons"><i class="fab fa-instagram"></i></a>
  <a href="https://twitter.com/HIROOMI_3JSB_" target="_blank" class="sicons"><i class="fab fa-twitter"></i></a>
  <a href="https://www.facebook.com/jsoulb3/" target="_blank" class="sicons"><i class="fab fa-facebook-square"></i></a>
  <a href="https://www.youtube.com/channel/UCwjuPHBb3ZoncVeGoV1FSVg" target="_blank" class="sicons"><i class="fab fa-youtube"></i></a>
  <button className="buttt" onClick={handleClick}>Back</button>
  </div>
</div>
</>
);
}
