import React from 'react';
import '../../App.css';

import {InfoSectionfour,InfoSectionfive} from '../InfoSection/indexreviews'
import { homeObjsix } from '../InfoSection/Data';
import { homeObjseven } from '../InfoSection/Data';

export default function Reviews() {
  return (
  <>
  <h1 className='reviews'>Reviews</h1>
  <InfoSectionfour {...homeObjsix}/>
  <InfoSectionfive {...homeObjseven}/>
  </>
  );
}