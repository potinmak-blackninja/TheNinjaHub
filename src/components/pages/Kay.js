import React from 'react';
import './ArtistPage.css';
import { useHistory } from "react-router-dom";

export default function Kay() {
  const history = useHistory();
  function handleClick() {
    history.push("/");
  }
  return (<>
  <div className="posts-container">
 
  <iframe src="https://docs.google.com/document/d/e/2PACX-1vRsQ1ccta3dg6ibo2nFHMEaloDxeVod1os-tsb1mig9dLcaLpGuRGI3QQWFLrwFqSTcmSwRpeDy7QdG/pub?embedded=true"
    scrolling="auto"
    marginwidth="0"
    frameboder="0"
    width="200"
    seamless="seamless"
    >
  </iframe>
  <h5>Artist's Personal Social Media</h5>
<div className='ellysocial'>
  <a href="https://www.instagram.com/crystalkayofficial" target="_blank" class="sicons"><i class="fab fa-instagram"></i></a>
  <a href="https://twitter.com/ckay26" target="_blank" class="sicons"><i class="fab fa-twitter"></i></a>
  <a href="https://www.facebook.com/CrystalKay/" target="_blank" class="sicons"><i class="fab fa-facebook-square"></i></a>
  <a href="https://www.youtube.com/channel/UCcYm6mwgA0utO2otUkBKayw" target="_blank" class="sicons"><i class="fab fa-youtube"></i></a>
  <button className="buttt" onClick={handleClick}>Back</button>
</div>


</div>
</>
);
}
