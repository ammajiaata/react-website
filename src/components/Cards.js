import React from 'react';
import '../Cards.css';
import CardItem from './CardItem';
import Icon3 from '../images/bakhri.png';
import Icon4 from '../images/kachori.png';
import Icon5 from '../images/malpua.png';
import Icon6 from '../images/kid1.jpg';
import Icon7 from '../images/farmer1.jpg';
import Icon8 from '../images/fam1.jpg'; 
import kg5 from '../images/kg5.jpg'
import img10 from '../images/kg10.jpg'


function Cards() { 
  return (
    <div className='cards'>
     
          
      <h1>Check out our Products and Reviews!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>

          <ul className='cards__items'>
            <CardItem
              src={kg5}
              text=''
              label='5KG Packets' 
              path='/products'
            />
            <CardItem
              src={img10}
              text=''
              label='10KG Packets'
              path='/products'
            
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Icon3}
              text='Relish this delicious regional 
              alternative to the traditional roti, made with desi ghee !'
              label='Khatiyawadi Bakhri'
              path='/recipes'
            />
            <CardItem
              src={Icon4}
              text='The Kachori is there for all occasions. A must bake for
              all chefs to master!'
              label='Whole Wheat Kachori'
              path='/recipes'
            />
            <CardItem
              src={Icon5}
              text='Devour the whole wheat version of this Indian dessert 
              that is loved by all!'
              label='Malpua'
              path='/recipes'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Icon6}
              text='Helps in much needed growth and development at an early age'
              label='Providing the right nutrition'
              path='/reviews'
            />
            <CardItem
              src={Icon7}
              text='Made from selected grains, completely naturally grown'
              label='Quality Products'
              path='/reviews'
            />
            <CardItem
              src={Icon8}
              text='Our product is easy to digest ,for young and aged as well'
              label='Choice of 1000+ families'
              path='/reviews'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;