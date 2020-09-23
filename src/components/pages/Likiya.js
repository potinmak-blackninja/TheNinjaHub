import React from 'react';
import './ArtistPage.css';
import { useHistory } from "react-router-dom";

export default function Likiya() {
  const history = useHistory();
  function handleClick() {
    history.push("/");
  }
  return (<>
 
  <div className="posts-container">
 
  <iframe src="https://docs.google.com/document/d/e/2PACX-1vQQ3uBOOU94Z43F05KvbuwCrWrkUePhQQKoXX4xiBZT7k7OEMXTnWx6WvZKN0bmECSj1FjeaVRnZYPk/pub?embedded=true"
    scrolling="auto"
    marginwidth="0"
    frameboder="0"
    width="200"
    seamless="seamless"
    >
  </iframe>
  <h5>Artist's Personal Social Media</h5>
<div className='ellysocial'>
  <a href="https://www.instagram.com/likiya16rmpg" target="_blank" class="sicons"><i class="fab fa-instagram"></i></a>
  <a href="https://twitter.com/HIROOMI_3JSB_" target="_blank" class="sicons"><i class="fab fa-twitter"></i></a>
  <a href="https://www.youtube.com/channel/UCok6tjN84sl5FyGmoyD0_uA" target="_blank" class="sicons"><i class="fab fa-youtube"></i></a>
  <button className="buttt" onClick={handleClick}>Back</button>
</div>
</div>
</>
);
}