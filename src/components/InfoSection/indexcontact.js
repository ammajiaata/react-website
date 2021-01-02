import React from 'react'
import { InfoContainer,InfoWrapper , InfoRow,Column1 ,
 TextWrapper,Heading,TopLine,Subtitle,
 Img,    Column2, ImgWrap } from './InfoElements'
 import white from '../../images/whiteapp.svg'
 import black from '../../images/blackcart.svg'
 import ten from '../../images/ten.svg'

const InfoSectioneight =({lightBg,id,imgStart,topLine,lightText,darkText,desciption,img,alt}) =>{
    return (
        <>
        <InfoContainer id={id}
        >
            <InfoWrapper>
                <InfoRow >
                    <Column1>
                      <TextWrapper>
                          <Heading lightText={lightText} > Amma Ji Aata can be bought at any of these stores too</Heading>
                          <Subtitle ><ul><li><a href='https://www.google.co.in/maps/place/PUNEET+RETAILS/@28.6944646,77.1056014,17z/data=!3m1!4b1!4m5!3m4!1s0x390d0331ddb8de4f:0xd9bdae902e92ae12!8m2!3d28.6944646!4d77.1077901'>Puneet Retails,Pushpanjali,Pitampura &Rohini Sector-3</a> </li>
                          <li>  <a href='https://www.google.co.in/maps/place/Rohini+Sector+13,+Sector+13,+Rohini,+Delhi,+110085/@28.7220218,77.1262724,17z/data=!3m1!4b1!4m5!3m4!1s0x390d01690a165f75:0x42f5f19b0bf90e8d!8m2!3d28.7220517!4d77.128472'>Himanshu Departmental Stores, Rohini Sector 13</a></li>
            <li>  <a href='https://www.google.co.in/maps/place/Grocery+house/@28.6720788,77.0880728,17z/data=!3m1!4b1!4m5!3m4!1s0x390d055d5f673a03:0x2fc50874aafc25d9!8m2!3d28.6720788!4d77.0902615'>Grocery House,Bhera Enclave</a></li>
            <li>  <a href='https://www.google.co.in/maps/place/Block+AF,+Poorbi+Shalimar+Bag,+Shalimar+Bagh,+Delhi,+110088/@28.7064025,77.1628143,17z/data=!3m1!4b1!4m5!3m4!1s0x390d0226c5681eef:0x96b26ee3b73cee69!8m2!3d28.7068214!4d77.1646932'>Gharelu Bachat Bazar, Shalimar Bagh</a></li>
            <li>  <a href='https://www.google.co.in/maps/place/UV+Block+Market/@28.7119863,77.1508281,19z/data=!3m1!4b1!4m5!3m4!1s0x390d0181aa01e809:0xa66613985ee478f1!8m2!3d28.7119863!4d77.1513753'>Krishna Super Mart,Shalimar Bagh</a></li>
            <li> <a href='https://www.google.co.in/maps/place/State+Bank+Nagar+Paschim+Vihar+Rd,+Block+B,+Meera+Bagh,+Paschim+Vihar,+Delhi,+110063/@28.6599627,77.0935707,17z/data=!3m1!4b1!4m5!3m4!1s0x390d047d1d19e793:0x3286a9dd7b43a5f9!8m2!3d28.6599627!4d77.0935707'>Best Baniya Solutions,Paschim Vihar</a></li>
            </ul>  
            And many more stores too........ </Subtitle>
                          <TopLine><a href="tel:9810058125">Call us</a> if you want to sell our product at your store</TopLine>
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
const Infosectionnine =({lightBg,id,imgStart,topLine,lightText,darkText,desciption,img,alt}) =>{
    return (
        <>
        <InfoContainer lightBg = {lightBg} id={id}
        >
            <InfoWrapper>
                <InfoRow imgStart= {imgStart} >
                    <Column1>
                      <TextWrapper>
                          <TopLine>We are selling it across all major E-Commerce Websites</TopLine>
                          
                          <Subtitle darkText={darkText} ><ul><li> <a href='https://www.amazon.in/ref=nav_logo'>Amazon</a></li>
                          <li>  <a href='https://www.indiamart.com/'>IndiaMart</a></li>
                          <li>  <a href='https://grofers.com/'>Grofers</a></li>
                          <li>  <a href='https://www.bigbasket.com/?nc=logo'>BigBasket</a></li>
                          <li>  <a href='https://www.flipkart.com/'>Flipkart</a></li></ul></Subtitle>
<Heading darkText={darkText} >Have Amma Ji Aata delivered at your doorstep</Heading>
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
const InfoSectionten =({lightBg,id,imgStart,topLine,lightText,darkText,desciption,img,alt}) =>{
    return (
        <>
        <InfoContainer id={id}
        >
            <InfoWrapper>
                <InfoRow >
                    <Column1>
                      <TextWrapper>
                          <TopLine>{topLine}</TopLine>
                          <Heading lightText={lightText} >You can Visit us to </Heading>
                          <TopLine>see us prepare Amma Ji Aata or if you would like us to add materials(like millets,oats) of your choice,at </TopLine>
                          <Subtitle > <a href='https://www.google.com/maps/dir//amma+ji+atta+chakki/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x390d057a38188093:0x754d873ff9863c83?sa=X&ved=2ahUKEwiHsPLavv3tAhXP4nMBHfuTDaEQ9RcwAHoECAQQBA'>9 DDA VARDHMAN MARKET ,West Enclave ,PitamPura</a></Subtitle>
                          
                          </TextWrapper>
</Column1>
<Column2>
<ImgWrap>
<Img src={ten} alt = {alt}/>
</ImgWrap>
</Column2>
</InfoRow>
</InfoWrapper>
</InfoContainer>
</>
);

}
export {Infosectionnine,InfoSectioneight,InfoSectionten}