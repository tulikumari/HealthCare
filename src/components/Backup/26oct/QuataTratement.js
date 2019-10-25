import React, { Component } from 'react';
import {
    ImageBackground,
    Image ,
    StyleSheet,
    ScrollView,
    Keyboard,
    TouchableWithoutFeedback,
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
import { SearchBar } from 'react-native-elements'
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
      // <DismissKeyboard>
        <Content>
        {/* search box property */}
         <Card style={[styles.cards,{marginTop:20,borderRadius:150}]}>
            <CardItem style={[styles.searchCardItem]}>
             <Item style={[styles.searchItem]}>
                <Input placeholder="Search" style={styles.textBox}  />
                <Icon name="ios-search"  style={{color:'#818da3'}} />
             </Item>
           </CardItem> 
        </Card>   
        {/* card first */}
        <Card style={[styles.cards,Shadowstyle,{marginTop:30}]}>
          <CardItem cardBody style={[{borderRadius:20,Position:'relative'}]}>
            <Image 
              source= {require('../assets/images/hospiticality.png')} 
              style={{height: 200,width: null,flex: 1,borderTopLeftRadius:20,borderTopRightRadius:20,Position:'relative'
              }}
            />
          </CardItem>
          <CardItem>
            <Left>
             <Text style={styles.tq_txtheading} numberOfLines={1}>Procedure & Treatement</Text>
            </Left>
          </CardItem>
          <CardItem style={{borderRadius:20}}> 
            <Left>
             <Text style={styles.tq_txtheadingsub} numberOfLines={1}>Hospital(Speciality)</Text>
            </Left>  
          </CardItem>  
        </Card>
        {/* second box */}
        <Card style={[styles.cards,Shadowstyle]}>
          <CardItem cardBody style={{borderRadius:20}}>
            <Image 
              source= {require('../assets/images/spacility.png')} 
              style={{height: 200, width: null, flex: 1,borderTopLeftRadius:20,borderTopRightRadius:20}}
            />
          </CardItem>
          <CardItem style={{borderRadius:20}}>
            <Left>
             <Text style={styles.tq_txtheading} numberOfLines={1}>Specialist Consultation or Second Opinion</Text>
            </Left>
          </CardItem>
        </Card>

        {/* third box  */}
        <Card style={[styles.cards,Shadowstyle]}>
          <CardItem cardBody style={{borderRadius:20}}>
            <Image 
              source= {require('../assets/images/Primary_care.png')} 
              style={{height: 200, width: null, flex: 1,borderTopLeftRadius:20,borderTopRightRadius:20}}
            />
          </CardItem>
          <CardItem style={{borderRadius:20}}>
            <Left>
             <Text style={styles.tq_txtheading} numberOfLines={1}>Primary Care</Text>
            </Left>
          </CardItem>
        </Card>
      </Content>
    // </DismissKeyboard>
    );
  }
}

