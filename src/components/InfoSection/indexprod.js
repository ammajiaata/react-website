import React from 'react'
import { InfoContainer,InfoWrapper , InfoRow,Column1 ,
 TextWrapper,Heading,TopLine,Subtitle,
 Img,    Column2, ImgWrap } from './InfoElements'
 import xx from '../../images/5kg.jpeg'
 import img8kg from '../../images/10kg.jpeg'; 
 import imgg from '../../images/first.jpg';
 import imgg2 from '../../images/mid.jpg';
 import imgg3 from '../../images/last.jpg';


const InfoSectiontwo =({lightBg,id,imgStart,topLine,lightText,darkText,desciption,img,alt}) =>{
    return (
        <>
        <InfoContainer lightBg = {lightBg} id={id}
        >
            <InfoWrapper>
                <InfoRow imgStart= {imgStart}>
                    <Column1>
                      <TextWrapper>
                          <TopLine>{topLine}</TopLine> 
                          <Heading lightText={lightText}>Amma Ji Aata Packets</Heading>
                          <Subtitle darkText={darkText}>At Amma Ji Aata, extra care is taken to keep things as natural as possible. The way Mother Nature intended for them to be. In our quest to provide you wholesome goodness, whole wheat grains are sourced, directly from the farmers.


AMMA JI AATA is made from the grains which are heavy on the palm, golden amber in colour and hard in bite. It is carefully ground using modern 'chakki - grinding' process which ensures that our Atta contains Sampoorna Atta. Thus we ensure you get superior chakki atta, through our 4 Step Advantage process of procuring, processing, grinding and nutrition lockage.

By ensuring that all the nutrients of the grain stay intact and protected in our packaging, we deliver the freshness of the fields combined with the power of the whole wheat.

The dough made from AMMA JI AATA Atta absorbs more water, hence rotis remain softer for longer. This means you serve soft, fluffy rotis to your family which powers them through their day!</Subtitle>
                          
                      </TextWrapper>
                    </Column1>
                    <Column2>
                      <ImgWrap>
                      <Img src={xx} alt = {alt}/>
                      <Img src={img8kg} alt = {alt}/>
                      </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
        </>
    );
    
}
const Infosectionx =({lightBg,id,imgStart,topLine,lightText,darkText,desciption,img,alt}) =>{
    return (
        <>
        <InfoContainer lightBg = {lightBg} id={id}
        >
            <InfoWrapper>
                <InfoRow >
                    <Column1><TextWrapper>
                          <Subtitle darkText={darkText}>How We Take Care of Food at Amma Ji Aata</Subtitle> 
                          </TextWrapper>
                    <Img src={imgg} alt = {alt}/>
                    
                    </Column1>
                    <Column2>
                      <ImgWrap>
                      <Img src={imgg2} alt = {alt}/>
                      <Img src={imgg3} alt = {alt}/>
                      </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
        </>
    );
    
}
export { InfoSectiontwo,Infosectionx}