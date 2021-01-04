import React from 'react';
import '../../App.css';
import {InfoSectiontwo, Infosectionx } from '../InfoSection/indexprod'
import { homeObjtwo } from '../InfoSection/Data';

export default function Products() {


  return (
  <>
  <h1 className='products'>OUR PRODUCTS</h1>
  <Infosectionx {...homeObjtwo}/>
  <InfoSectiontwo {...homeObjtwo}/>
  </>
  );
}