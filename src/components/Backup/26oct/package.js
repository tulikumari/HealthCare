import React, { Component } from 'react';
import {
    ImageBackground,
    Image ,
    StyleSheet,
    ScrollView,
    View,
    Keyboard,
    TouchableWithoutFeedback
}
from 'react-native';
import {
  Container, 
  Header, 
  Title, 
  Content, 
  Footer, 
  FooterTab, 
  Button, 
  Left, 
  Right, 
  Body, 
  Icon, 
  Text,
  Card, 
  CardItem, 
  Thumbnail,  
  Item,
  Input
} from 'native-base';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../assets/stylesheet/style';

{/* common fontSize define */}
const headerf_size= 20;
const menuf_size=17;
const normalf_size=15;
const common_size=20; 
const common_iconsize=25;
{/* color property define */}
const white_color='white';
const contant_txtcolor='#3c4a84';
const footer_txtcolor='#a0a0a0';
const bellicon_color='#91fe00';
{/* anoter property */}
const null_value=null;
const proximaNova_fontfamily='ProximaNovaRegular';

// const DismissKeyboard =({ children }) => (
//   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
//     {children}
//   </TouchableWithoutFeedback>
// );

export default class index extends Component {
  render() {
    const Shadowstyle={
      elevation: 20, 
    }
    return (
    //  <DismissKeyboard>
      <Content>
        {/* buttton scroll property */}
        <Card transparent style={[styles.scrollCard]}>
          <Scroll />
        </Card>

        {/* search box property */}
         <Card style={[styles.cards,{marginTop:20,borderRadius:150}]}>
            <CardItem style={[styles.searchCardItem]}>
             <Item style={[styles.searchItem]}>
                <Input placeholder="Search" style={styles.textBox}  />
                <Icon name="ios-search"  style={{color:'#818da3'}} />
             </Item>
           </CardItem> 
        </Card> 

        {/* Angioplasty Card Property */}  
        <Card style={[styles.cards,Shadowstyle,{}]}>

          <CardItem cardBody style={{borderRadius:20,Position:'relative'}}>
            <Image source= {require('../assets/images/blogimg1.png')} style={[styles.cardImage]} />
            <Image source= {require('../assets/images/offbg.png')} style={[styles.offerImg]} />
            <Text style={[styles.txtDiscount]}>
             <Text style={{color:white_color,fontWeight:'bold'}}>20 %{'\n'}</Text>OFF
            </Text>
            <Image source= {require('../assets/images/tp_img.png')} style={[styles.tpImg]}/>
          </CardItem>

          <CardItem>
            <Body>
              <Text style={[styles.tq_txtheading]} numberOfLines={1}>Angioplasty (Balloon & Stent)</Text>
              <Item style={{borderBottomColor:white_color,position:'absolute',right:0}}>
              <Micon name="cash" style={[styles.bellicon,{paddingRight:10}]}/>
              <Text style={{fontSize:normalf_size,fontFamily:proximaNova_fontfamily,color:contant_txtcolor}}>2000</Text>
             </Item>
            </Body>  
          </CardItem> 

          <CardItem>
           <Body> 
             <Item style={{borderBottomColor:white_color,}}>
               <Micon name="hospital-building" style={[styles.txtAddressIcon,{color:'yellow'}]}/>
               <Text style={[styles.txtAddress]} numberOfLines={1} >
                Max Sper Speciality Hospital,
              </Text>
            </Item>

            <Item style={{borderBottomColor:white_color,}}>
              <Micon name="map-marker" style={[styles.txtAddressIcon,{color:'red'}]}/>
              <Text style={[styles.txtAddress]} numberOfLines={1} >
               Vaishali,Ghaziabad , Uttar Pradesh 201012
              </Text>
            </Item>

            <Item style={{borderBottomColor:white_color,}}>
              <Micon name="vhs" style={[styles.txtAddressIcon,{color:'#39b54a'}]}/>
              <Text style={[styles.txtAddress]} numberOfLines={1} >
               Common Procedure/Surgery Treatement
              </Text>
            </Item>

            <Item style={{borderBottomColor:'white',}}>
              <Micon name="glassdoor" style={[styles.txtAddressIcon,{color:'#0ad5cc'}]}/>
              <Text style={[styles.txtAddress]} numberOfLines={1} >
              <Text style={{color:contant_txtcolor,fontWeight:'bold'}}>Procedure Name:</Text>
               Angloplasty(Ballon & Stent)  
              </Text>
            </Item>
           </Body> 
          </CardItem>    

          <CardItem style={{borderRadius:20}}>
           <Body>
           <Item style={{borderBottomColor:'white',marginTop:-20}}>  
              <Micon name="account" style={[styles.txtAddressIcon,{color:'#0ad5cc'}]}/>
              <Text style={[styles.txtAddress]} numberOfLines={1} >
                <Text style={{ color:contant_txtcolor, fontWeight:'bold'}}>20 Patlents </Text>took this package
              </Text>
            </Item>
            <Item style={{borderBottomColor:white_color,position:'absolute',right:0,marginTop:-10}}>
              <Image source= {require('../assets/images/star.png')} style={{height:10,width:70,}}/>
            </Item>   
           </Body> 
          </CardItem>
        </Card>


      {/* Dental Care Card Property */}  
        <Card style={[styles.cards,Shadowstyle]}>

            <CardItem cardBody style={{borderRadius:20,Position:'relative'}}>
              <Image source= {require('../assets/images/img2.jpg')} style={[styles.cardImage]} />
              <Image source= {require('../assets/images/offbg.png')} style={[styles.offerImg]} />
              <Text style={[styles.txtDiscount]}>
              <Text style={{color:white_color,fontWeight:'bold'}}>15 %{'\n'}</Text>OFF
              </Text>
              <Image source= {require('../assets/images/tp_img.png')} style={[styles.tpImg]}/>
            </CardItem>

            <CardItem>
              <Body>
                <Text style={[styles.tq_txtheading]} numberOfLines={1}>Dental Care</Text>
                <Item style={{borderBottomColor:white_color,position:'absolute',right:0}}>
                <Micon name="cash" style={[styles.bellicon,{paddingRight:10}]}/>
                <Text style={{fontSize:normalf_size,fontFamily:proximaNova_fontfamily,color:contant_txtcolor}}>500</Text>
              </Item>
              </Body>  
            </CardItem> 

            <CardItem>
            <Body> 
              <Item style={{borderBottomColor:white_color,}}>
                <Micon name="hospital-building" style={[styles.txtAddressIcon,{color:'yellow'}]}/>
                <Text style={[styles.txtAddress]} numberOfLines={1} >
                  Max Sper Speciality Hospital,
                </Text>
              </Item>

              <Item style={{borderBottomColor:white_color,}}>
                <Micon name="map-marker" style={[styles.txtAddressIcon,{color:'red'}]}/>
                <Text style={[styles.txtAddress]} numberOfLines={1} >
                Vaishali,Ghaziabad , Uttar Pradesh 201012
                </Text>
              </Item>

              <Item style={{borderBottomColor:white_color,}}>
                <Micon name="vhs" style={[styles.txtAddressIcon,{color:'#39b54a'}]}/>
                <Text style={[styles.txtAddress]} numberOfLines={1} >
                Common Procedure/Surgery Treatement
                </Text>
              </Item>

              <Item style={{borderBottomColor:'white',}}>
                <Micon name="glassdoor" style={[styles.txtAddressIcon,{color:'#0ad5cc'}]}/>
                <Text style={[styles.txtAddress]} numberOfLines={1} >
                <Text style={{color:contant_txtcolor,fontWeight:'bold'}}>Procedure Name:</Text>
                Angloplasty(Ballon & Stent)  
                </Text>
              </Item>
            </Body> 
            </CardItem>    

            <CardItem style={{borderRadius:20}}>
            <Body>
            <Item style={{borderBottomColor:'white',marginTop:-20}}>  
                <Micon name="account" style={[styles.txtAddressIcon,{color:'#0ad5cc'}]}/>
                <Text style={[styles.txtAddress]} numberOfLines={1} >
                  <Text style={{ color:contant_txtcolor, fontWeight:'bold'}}>20 Patlents </Text>took this package
                </Text>
              </Item>
              <Item style={{borderBottomColor:white_color,position:'absolute',right:0,marginTop:-10}}>
                <Image source= {require('../assets/images/star.png')} style={{height:10,width:70,}}/>
              </Item>   
            </Body> 
            </CardItem>
          </Card>


         {/* Angioplasty Card Property */}  
         <Card style={[styles.cards,Shadowstyle]}>

          <CardItem cardBody style={{borderRadius:20,Position:'relative'}}>
            <Image source= {require('../assets/images/blogimg1.png')} style={[styles.cardImage]} />
            <Image source= {require('../assets/images/offbg.png')} style={[styles.offerImg]} />
            <Text style={[styles.txtDiscount]}>
            <Text style={{color:white_color,fontWeight:'bold'}}>20 %{'\n'}</Text>OFF
            </Text>
            <Image source= {require('../assets/images/tp_img.png')} style={[styles.tpImg]}/>
          </CardItem>

          <CardItem>
            <Body>
              <Text style={[styles.tq_txtheading]} numberOfLines={1}>Angioplasty (Balloon & Stent)</Text>
              <Item style={{borderBottomColor:white_color,position:'absolute',right:0}}>
              <Micon name="cash" style={[styles.bellicon,{paddingRight:10}]}/>
              <Text style={{fontSize:normalf_size,fontFamily:proximaNova_fontfamily,color:contant_txtcolor}}>2000</Text>
            </Item>
            </Body>  
          </CardItem> 

           <CardItem>
           <Body> 
             <Item style={{borderBottomColor:white_color,}}>
               <Micon name="hospital-building" style={[styles.txtAddressIcon,{color:'yellow'}]}/>
               <Text style={[styles.txtAddress]} numberOfLines={1} >
                Max Sper Speciality Hospital,
              </Text>
            </Item>

            <Item style={{borderBottomColor:white_color,}}>
              <Micon name="map-marker" style={[styles.txtAddressIcon,{color:'red'}]}/>
              <Text style={[styles.txtAddress]} numberOfLines={1} >
               Vaishali,Ghaziabad , Uttar Pradesh 201012
              </Text>
            </Item>

            <Item style={{borderBottomColor:white_color,}}>
              <Micon name="vhs" style={[styles.txtAddressIcon,{color:'#39b54a'}]}/>
              <Text style={[styles.txtAddress]} numberOfLines={1} >
               Common Procedure/Surgery Treatement
              </Text>
            </Item>

            <Item style={{borderBottomColor:'white',}}>
              <Micon name="glassdoor" style={[styles.txtAddressIcon,{color:'#0ad5cc'}]}/>
              <Text style={[styles.txtAddress]} numberOfLines={1} >
              <Text style={{color:contant_txtcolor,fontWeight:'bold'}}>Procedure Name:</Text>
               Angloplasty(Ballon & Stent)  
              </Text>
            </Item>
           </Body> 
          </CardItem>    

          <CardItem style={{borderRadius:20}}>
           <Body>
           <Item style={{borderBottomColor:'white',marginTop:-20}}>  
              <Micon name="account" style={[styles.txtAddressIcon,{color:'#0ad5cc'}]}/>
              <Text style={[styles.txtAddress]} numberOfLines={1} >
                <Text style={{ color:contant_txtcolor, fontWeight:'bold'}}>20 Patlents </Text>took this package
              </Text>
            </Item>
            <Item style={{borderBottomColor:white_color,position:'absolute',right:0,marginTop:-10}}>
              <Image source= {require('../assets/images/star.png')} style={{height:10,width:70,}}/>
            </Item>   
           </Body> 
          </CardItem>
        </Card>
      </Content> 
    // </DismissKeyboard>
    );
  }
}


{/*Scroll View Button Property define here */}
class Scroll extends Component{
  render() {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{height:40,width:'100%'}}
      >
        <Button style={[styles.button,{backgroundColor:'white'}]}>
          <Text style={[styles.btntext,{color:contant_txtcolor}]} uppercase={false}>Common Required</Text>
        </Button>
        <Button style={styles.button}>
          <Text style={styles.btntext} uppercase={false}>Mother & Child</Text>
        </Button>
        <Button style={styles.button}>
          <Text style={styles.btntext} uppercase={false}>Dental Treatement</Text>
        </Button>
     </ScrollView>
    )}
}
