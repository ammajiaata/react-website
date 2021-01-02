import React from 'react'
import { InfoContainer,InfoWrapper , InfoRow,Column1 ,
 TextWrapper,Heading,TopLine,Subtitle,
 Img,    Column2, ImgWrap } from './InfoElements'
 import kachori from '../../images/kachorirec.jpg'
 import bhakri from '../../images/bhakrirec.jpg'
 import malpua from '../../images/malpuarec.jpg'


const InfoSectiontwo =({lightBg,id,imgStart,topLine,lightText,darkText,desciption,img,alt}) =>{
    return (
        <>
        <InfoContainer id={id}
        >
            <InfoWrapper>
                <InfoRow >
                    <Column1>
                      <TextWrapper>
                          <TopLine>{topLine}</TopLine>
                          <Heading lightText={lightText} >Whole Wheat Kachori</Heading>
                          <Subtitle >
Instructions
How To Make Kachori Dough:
To bind the dough, mix the AMMA JI AATA, salt and oil in a mixing bowl. Combine the mixture using your fingers to get the bread crumbs like consistency.
Add the chilled water one tablespoon at a time, and start binding the dough. Add water in small portions.
Once the dough comes together, knead it for 5 – 6 minutes. The dough should be soft yet firm to touch. Cover the dough with a wet muslin cloth and let it sit for at least fifteen minutes.
How To Make Kachori Filling:
Meanwhile, prepare the filling for kachori. Add namkeen in a food processor or mixer.
In a pan dry roast all the spices till aromatic. Allow them to cool a bit. Then add them in the same food processor jar as namkeen.
Blend them together to make a coarse mixture. Transfer to a bowl. We require crunchy mixture and not a fine powder for the filling.
How To Assemble Kachori:
To shape the kachoris, divide the dough into twelve small-sized balls. Take one part of the dough and with your fingers flatten the edges and make into 3-inch circle just like a small poori. Leaving center little thicker then edges.
Place 1 teaspoon of filling in the center. Pull the edges of the dough all the edges and join them all together at one place like a dimsum. Proceed to make all 12 balls. Let the filled ball sit for 3 – 4 minutes before flattening.
Place the filled balls on a flat surface with the seams facing up. Using the base of your palm, slowly and gently flatten them into about three inches in diameter.
Heat the oil in a deep frying pan over medium heat. To check if oil is ready put a little piece of dough in the oil. Dough should sizzle, and come up very slow.
Fry Kachori in small batches on medium-low heat. </Subtitle>
                          
                      </TextWrapper>
                    </Column1>
                    <Column2>
                      <ImgWrap>
                      <Img src={kachori} alt = {alt}/>
                      </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
        </>
    );
    
}
const InfoSectionthree =({lightBg,id,imgStart,topLine,lightText,darkText,desciption,img,alt}) =>{
    return (
        <>
        <InfoContainer lightBg = {lightBg} id={id}
        >
            <InfoWrapper>
                <InfoRow imgStart= {imgStart}>
                    <Column1>
                      <TextWrapper>
                          <TopLine>{topLine}</TopLine>
                          <Heading lightText={lightText}>Kathiyawadi Bhakri</Heading>
                          <Subtitle darkText={darkText}>
Take the AMMA JI AATA in a mixing bowl. Add salt and oil. Mix well . Now gradually add water and knead into a tight dough. (Remember you will need less water to knead into a tight dough. Do not knead a soft dough).
Knead and smooth the dough. Cover and keep aside for 10 minutes.
Divide the dough into equal portions. I have divided into 12 portions. Take one portion and roll into ball between your palms and then flatten it.
Roll into around 15 cm diameter circle with 4 mm thickness.
Put the rolled bhakri on the heated flat pan or tava. Let the bubbles appear and let it cook on one side.
Flip the bhakri and cook on another side. Keep the heat medium.
Flip again and press with a help of flat spatula or a kitchen towel and cook on both sides flipping in between till crisp and golden. The heat should be low to medium. (If you cook on high heat the bhakri will get brown spots quickly and it would not be cooked from inside). Remove the bhakri and apply ghee on it.
Similarly make the remaining bhakri. Serve hot for breakfast or lunch or dinner along with the curry of your choice.
You can use this bhakri as a base to make bhakri pizza with the topping of your choice. </Subtitle>
                          
                      </TextWrapper>
                    </Column1>
                    <Column2>
                      <ImgWrap>
                      <Img src={bhakri} alt = {alt}/>
                      </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
        </>
    );
    
}
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
                          <Heading lightText={lightText}>Desi Ghee Malpua</Heading>
                          <Subtitle >Make malpua batter: sieve AMMA JI AATA into a mixing bowl. Add sooji,sugar and whisk to mix. Pour in milk, a little bit at a time, whisking with each addition. Stop when you have a batter that is of pouring consistency. Set the batter aside for 30 minutes.
 
 In the meanwhile, make the sugar syrup (chasni): place a sauce pan on medium heat and pour in ½ cup plus 2 tablespoons water. Tip in sugar and stir till the sugar dissolved completely and the syrup starts to thicken, 3 to 4 minutes. Toss in green cardamom pods and stir for another minute. Remove sugar syrup (chasni) from heat and reserve.
  
 Pour ghee into a heavy frying pan over high heat. While the ghee heats up, check the batter. It will probably have thickened further – add about 2 tablespoons or a bit more milk to thin the batter down to an easy pouring consistency.
  
 Once the ghee is hot, scoop up 3 to 4 tablespoons of batter in a ladle or small cup and carefully but quickly pour it onto the center of the frying pan in one spot. The batter will spread out to form about a 4-inch malpua. Use the spatula to push some ghee on to the upper side of the malpua. Fry till the edges turn golden brown,  then flip over with a spatula and fry the other side for another 30 seconds. Adjust the heat as needed if the ghee gets too hot. Remove with a slotted spatula, allowing the ghee to drain, and then place directly in the reserved sugar syrup (chasni). While the first malpua is soaking in the sugar syrup, fry the second malpua, then repeat for the remaining batter. This should yield about 7 malpuas. Dip each malpua in sugar syrup (chasni) for 3 to 4 minutes, turning to ensure both sides soak in the syrup evenly.
 Garnish with milk soaked saffron and serve hot.  </Subtitle>
                          
                      </TextWrapper>
                    </Column1>
                    <Column2>
                      <ImgWrap>
                      <Img src={malpua} alt = {alt}/>
                      </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
        </>
    );
    
}
export  {InfoSectiontwo,InfoSectionthree,InfoSectionfour}
