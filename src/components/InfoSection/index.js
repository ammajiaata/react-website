import React from 'react'
import { InfoContainer,InfoWrapper , InfoRow,Column1 ,
 TextWrapper,Heading,TopLine,Subtitle,
 Img,    Column2, ImgWrap } from './InfoElements1'
 import xx from '../../images/main.jpg'


const InfoSection =({lightBg,id,imgStart,topLine,lightText,darkText,desciption,img,alt}) =>{
    return (
        <>
        <InfoContainer lightBg = {lightBg} id={id}
        >
            <InfoWrapper>
                <InfoRow imgStart= {imgStart}>
                    <Column1>
                      <TextWrapper>
                          
                          <Heading lightText={lightText}>Amma Ji M.P. Chakki Aata</Heading>
                          <Subtitle darkText={darkText}>Number One Quality,Excellent Taste,Easily digestible                               100% customer retention,100% customer satisfaction</Subtitle>
                          <Subtitle darkText={darkText}></Subtitle>
                          <TopLine>Contains all the right nutrients,proteins,fibres, minerals,vitamins fundamental for wholistic growth</TopLine>
                      </TextWrapper>
                    </Column1>
                    <Column2>
                      <ImgWrap>
                      <Img src={xx} alt = {alt}/>
                      </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
        </>
    );
    
}
export default InfoSection