import React, { Component } from 'react';
import {
    ImageBackground,
    Image ,
    StyleSheet,
    Dimensions,
    ScrollView,
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
  Tabs,
  Tab, 
  ScrollableTab,
  TabHeading,
 
} from 'native-base';
import styles from '../assets/stylesheet/style';
import Package from './package';
import QuataTreatement from './QuataTratement';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';

const proximaNova_fontfamily='ProximaNovaRegular';
const DismissKeyboard =({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
    {children}
  </TouchableWithoutFeedback>
);

export default class index extends Component {
  render() {
    return (
       <DismissKeyboard>
        <Container style={{backgroundColor:'#e9e9e9'}}>  
          <ImageBackground source={require('../assets/images/topbgecircle.png')}  style={styles.bg_image}>
          { /* header part of the page  */ }  
            <Header transparent  hasTabs >
               <Left>
                <Button transparent>
                  <Image 
                    source= {require('../assets/images/1.png')} 
                    style={styles.menu_image}
                  />
                </Button>
               </Left>
               <Body>
                <Title style={styles.txttitle}>Health Care App</Title>
               </Body>
               <Right style={{paddingTop:10}}>
                <Micon name="bell-outline"  style={styles.bellicon}/>
                <Micon name="filter-outline" style={styles.filtericon}/>
               </Right>
          </Header>
          {/* body content */}
          <Tabs  
            locked
            initialPage={0}
            style={{}}  
            tabBarUnderlineStyle={{ height: 3 }} 
            tabContainerStyle={{backgroundColor:'transparent',elevation:0}}
          >
            <Tab  
              heading="Quote for Treatment" 
              tabStyle={[{backgroundColor: 'transparent'}]} 
              textStyle={{color: '#fff', fontFamily:proximaNova_fontfamily,fontSize:15}} 
              activeTabStyle={{backgroundColor: 'transparent',height:'100%'}} 
              activeTextStyle={{color: '#fff', fontWeight: 'normal'}} 
              style={{backgroundColor:'transparent'}}
            >
              <QuataTreatement />
            </Tab>
            <Tab 
              heading="Health Care Packages" 
              tabStyle={{backgroundColor: 'transparent',borderTopColor:'transparent'}} 
              textStyle={{color: '#fff'}} 
              activeTabStyle={{backgroundColor: 'transparent',height:'100%'}} 
              activeTextStyle={{color: '#fff', fontWeight: 'normal'}} 
              style={{backgroundColor:'transparent'}}
            >
              <Package />
            </Tab>
          </Tabs>
           
          {/* footer part of the page */ }
          <Footer> 
            <FooterTab style={{backgroundColor:'white'}} >
              <Button vertical>
                <Micon name="view-dashboard-outline" color="#a0a0a0" style={{fontSize:25}}/>
                <Text  style={{color:"#a0a0a0"}} numberOfLines={1} uppercase={false}>Dashboard</Text>
              </Button>
              <Button vertical>
                <Micon name="cash-usd" color="#a0a0a0" style={{fontSize:25}}/>
                <Text style={{color:"#a0a0a0"}} uppercase={false} numberOfLines={1}>Price Alert</Text>
              </Button>
              <Button vertical >
                <Micon name="plus-circle" color="#fb5e5e" style={{fontSize:50}}/>
              </Button>
              <Button vertical >
                <Micon name="checkbox-multiple-blank-circle" color="#a0a0a0" style={{fontSize:25}}/>
                <Text style={{color:"#a0a0a0"}} uppercase={false} numberOfLines={1}>Price Guide</Text>
              </Button>
              <Button vertical>
                <Micon name="code-equal" color="#a0a0a0" style={{fontSize:25}}/>
                <Text style={{color:"#a0a0a0"}} uppercase={false} numberOfLines={1}>Loan/Credit</Text>
              </Button>
            </FooterTab>
          </Footer>
        </ImageBackground>  
       </Container>
      </DismissKeyboard>
    );
  }
}

