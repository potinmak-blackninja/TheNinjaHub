import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these amazing artists!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/elly.jpg'
              text='Elly'
              label='Music'
              path='/artists/elly'
              subtext='from J Soul Brothers III'
            />
            <CardItem
              src='images/tosaka.jpg'
              text='Hiroomi Tosaka'
              label='Music'
              path='/artists/tosaka'
              subtext='from J Soul Brothers III'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/likiya.jpg'
              text='Likiya'
              label='Music'
              path='/artists/likiya'
              subtext='from The Rampage'
            />
            <CardItem
              src='images/kay.jpg'
              text='Crystal Kay'
              label='Music'
              path='/artists/kay'
            />
          
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;