import React from 'react';
import '../../App.css';
import {InfoSectioneight,Infosectionnine,InfoSectionten} from '../InfoSection/indexcontact'
import { homeObjeight } from '../InfoSection/Data';

import { homeObjnine } from '../InfoSection/Data';
import { homeObjten } from '../InfoSection/Data';

export default function Contact() {
  return (
  <>
  <h1 className='contact'>Contact-Us</h1>
          
        <InfoSectioneight {...homeObjeight}/>
        <Infosectionnine {...homeObjnine}/>
        <InfoSectionten {...homeObjten}/>
  </>
  );
}