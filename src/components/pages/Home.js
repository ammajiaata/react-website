import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards'
import Footer from '../Footer';
import InfoSection from '../InfoSection'
import { homeObjOne } from '../InfoSection/Data';

function Home(){
    return (
        <>
        <HeroSection/>
        
        <Cards />
        <InfoSection {...homeObjOne}/>
        <Footer/>
        </>
    );
}
export default Home;