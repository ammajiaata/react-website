import React from 'react'
import { InfoContainer,InfoWrapper , InfoRow,Column1 ,
 TextWrapper,Heading,TopLine,Subtitle,
 Img,    Column2, ImgWrap } from './InfoElements'
 import white from '../../images/white.svg'
 import black from '../../images/black.svg'

const InfoSectionfour =({lightBg,id,imgStart,topLine,lightText,darkText,desciption,img,alt}) =>{
    return (
        <>
        <InfoContainer id={id}
        >
            <InfoWrapper>
                <InfoRow >
                    <Column1>
                      <TextWrapper>
                          <TopLine>{topLine}</TopLine>
                          <Heading lightText={lightText} >"Nurturing, healthy and good taste,</Heading>
                          <Subtitle >Amma Ji Aata can be used to prepare anything from halwa,parantha,appam to obbattu,mathi,cookies,barfi
                          I decided to substitute Amma Ji Atta with multigrains in recipes for cookies, cake and namak paras.You will find tons of recipes for Atta biscuits that you can make with the virtuous multigrain Amma Ji Atta which is a healthier option. When it comes to cake a handy tip, is to replace 3/4th of the sinful Maida with the multigrain flour and that tends to keep the taste intact and delicious. My husband enjoys Indian sweets and now I make mal puda, Atta ka halwa and Atta ki barfi with the multigrain flour and they all taste super yum. My son’s favourite savoury snack bite is the namak paras that I now make with the Amma Ji Atta."</Subtitle>
                          <TopLine>A Satisfied User</TopLine>
                          </TextWrapper>
</Column1>
<Column2>
<ImgWrap>
<Img src={black} alt = {alt}/>
</ImgWrap>
</Column2>
</InfoRow>
</InfoWrapper>
</InfoContainer>
</>
);

}
const InfoSectionfive =({lightBg,id,imgStart,topLine,lightText,darkText,desciption,img,alt}) =>{
    return (
        <>
        <InfoContainer lightBg = {lightBg} id={id}
        >
            <InfoWrapper>
                <InfoRow imgStart= {imgStart} >
                    <Column1>
                      <TextWrapper>
                          <TopLine>{topLine}</TopLine>
                          
                          <Subtitle darkText={darkText} >"Its a wonderful experience of using this flour Chapaties are so soft so testy not heavy on stomach Even after hours it remain as soft as fresh when you warm it a little I recommend this flour to soft n fresh chapati lovers you will love the taste as well
.Many other products such as Aate ka Halwa,Pancakes, Ladoos taste awesome too.High five to Amma Ji Aata"</Subtitle>
<Heading darkText={darkText} >A Loyal Customer</Heading>
                          </TextWrapper>
</Column1>
<Column2>
<ImgWrap>
<Img src={white} alt = {alt}/>
</ImgWrap>
</Column2>
</InfoRow>
</InfoWrapper>
</InfoContainer>
</>
);

}
export {InfoSectionfour,InfoSectionfive}