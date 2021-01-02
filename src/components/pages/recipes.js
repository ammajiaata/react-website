import React from 'react';
import '../../App.css';
import {InfoSectiontwo,InfoSectionthree,InfoSectionfour} from '../InfoSection/indexrecipe'

import { homeObjthree } from '../InfoSection/Data';
import { homeObjfour } from '../InfoSection/Data';
import { homeObjfive } from '../InfoSection/Data';

export default function Recipes() {
  return (
  <>
  <h1 className='recipes'>Recipes</h1>
  <InfoSectiontwo {...homeObjthree}/>
  <InfoSectionthree {...homeObjfour}/>
  <InfoSectionfour {...homeObjfive}/>
  </>
  )
  
  ;
  
}