import React, { Component } from 'react';
import {
    ImageBackground,
    Image ,
    StyleSheet,
    ScrollView,
    View
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
} from 'native-base';

import Micon from 'react-native-vector-icons/MaterialCommunityIcons';


export default class index extends Component {
  render() {
    return (

      <Content style={{height:300}}>
        <Card>
          <Scroll />
        </Card>  
        {/* card first */}  
        <Card style={{marginLeft:10,marginRight:10,marginTop:10,marginBottom:10,borderRadius:20}}>
          <CardItem cardBody style={{borderRadius:20}}>
            <Image 
              source= {require('../assets/images/blogimg1.png')} 
              style={{height: 200, width: null, flex: 1,borderTopLeftRadius:20,borderTopRightRadius:20}}
            />
          </CardItem>
          <CardItem>
            <Text>Angioplasty (Balloon & Stent)</Text>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
          <CardItem style={{paddingTop:40}}>
            <Text>Angioplasty (Balloon & Stent)</Text>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
          <CardItem>
            <Text>Angioplasty (Balloon & Stent)</Text>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
          <CardItem style={{borderRadius:20}}>
            <Text>Angioplasty (Balloon & Stent)</Text>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>
        {/* second box */}
         <Card style={{marginLeft:10,marginRight:10,marginTop:10,marginBottom:10,borderRadius:20}}>
          <CardItem cardBody style={{borderRadius:20}}>
            <Image 
              source= {require('../assets/images/img2.jpg')} 
              style={{height: 200, width: null, flex: 1,borderTopLeftRadius:20,borderTopRightRadius:20}}
            />
          </CardItem>
          <CardItem>
            <Text>Angioplasty (Balloon & Stent)</Text>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
          <CardItem style={{paddingTop:40}}>
            <Text>Angioplasty (Balloon & Stent)</Text>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
          <CardItem>
            <Text>Angioplasty (Balloon & Stent)</Text>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
          <CardItem style={{borderRadius:20}}>
            <Text>Angioplasty (Balloon & Stent)</Text>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>

        {/* third box  */}
        <Card style={{marginLeft:10,marginRight:10,marginTop:10,marginBottom:10,borderRadius:20}}>
          <CardItem cardBody style={{borderRadius:20}}>
            <Image 
              source= {require('../assets/images/blogimg1.png')} 
              style={{height: 200, width: null, flex: 1,borderTopLeftRadius:20,borderTopRightRadius:20}}
            />
          </CardItem>
          <CardItem>
            <Text>Angioplasty (Balloon & Stent)</Text>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card> 
      </Content> 
    );
  }
}

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


const styles = StyleSheet.create({
  bg_image:{
    height: 370, 
    width: null_value, 
    flex:1,
  },
  menu_image:{
    height:common_size, 
    width:common_size,
  },
  txttitle:{
    fontFamily:proximaNova_fontfamily,
    fontSize:headerf_size,

  },
  bellicon:{
    fontSize:common_iconsize,
    color:bellicon_color,
  },
  filtericon:{
    fontSize:common_iconsize,
    color:'yellow',
  },


  ScrollTextContainer: {
    fontSize: 20,
    padding: 15,
    color: '#000',
    textAlign: 'center'
  },
  ButtonViewContainer: {
    flexDirection: 'row',
    paddingTop: 35,
  },
  ButtonContainer: {
    padding: 30,
  },

});
{/* */}
class Scroll extends Component{
  render() {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{height:50,width:'100%',backgroundColor:'white'}}
      >
        <Text>dgfhklhjlyhj</Text>
        <Text>dgfhklhjlyhj</Text>
        <Text>dgfhklhjlyhj</Text>
        <Text>dgfhklhjlyhj</Text>
        <Text>dgfhklhjlyhj</Text>
        <Text>dgfhklhjlyhj</Text>
        <Text>dgfhklhjlyhj</Text>
        <Text>dgfhklhjlyhj</Text>
        <Text>dgfhklhjlyhj</Text>
        <Text>dgfhklhjlyhj</Text>
        <Text>dgfhklhjlyhj</Text>
        <Text>dgfhklhjlyhj</Text>
        <Text>dgfhklhjlyhj</Text>
        <Text>dgfhklhjlyhj</Text>
     </ScrollView>
    )}
}
