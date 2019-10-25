import React, { Component } from 'react';
import {
    ImageBackground,
    Image ,
    StyleSheet,
    Dimensions,
    ScrollView,
    Keyboard,
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
  Card, 
  CardItem, 
  Thumbnail, 
  Tabs,
  Tab, 
  ScrollableTab,
  TabHeading,
  Drawer
 
} from 'native-base';
import ActionButton from 'react-native-circular-action-menu';

import styles from '../assets/stylesheet/style';
import Package from './package';
import QuataTreatement from './QuataTratement';
import SideBar from './sidebar/Sidebar';

import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import RF from "react-native-responsive-fontsize";
import Text from 'react-native-text';
import PropTypes from "prop-types";




const proximaNova_fontfamily='ProximaNovaRegular';


// Drawer.defaultProps = {
//   mainOverlay: {
//     opacity: 0,
//     backgroundColor: "rgba(0, 0, 0, 0.8)",
//     elevation: 8,
//     elevation: 0,
//   },
// },
const white='white';
const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
 // main: {paddingLeft: 3},
}

export default class index extends Component {
 
  closeDrawer() {
    this._drawer._root.close()
  }
  openDrawer(){
    this._drawer._root.open()
  }

  render() {
    return (
      <Drawer
       type="overlay"
       ref={(ref) => { this._drawer = ref; }}	
       content={<SideBar navigator={this._navigator} />}
       onClose={() => this.closeDrawer()}
       tapToClose={true}
       openDrawerOffset={0.2} // 20% gap on the right side of drawer 
       styles={drawerStyles}
       //panOpenMask={0.25}  for oprn left swipe anywhere
       >
        <Container style={{backgroundColor:'#e9e9e9'}}>  
          <ImageBackground source={require('../assets/images/topbgecircle.png')}  style={styles.bg_image}>
          { /* header part of the page  */ }  
            <Header transparent  hasTabs >
               <Left>
                  <Button transparent onPress={()=>this.openDrawer()}>
                   <Image 
                    source= {require('../assets/images/1.png')} 
                    style={styles.menu_image}
                   />
                 </Button> 
               </Left>
               <Body>
                <Title style={styles.txttitle}>Health Care App</Title>
               </Body>
               <Right>
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
          <Image 
            source= {require('../assets/images/footer_tp.png')} 
            style={{height:55,width:null,position:'absolute',bottom:55,left:'20%',right:'20%'}}
          />
          <Footer> 
            <FooterTab style={{backgroundColor:'white'}} >
              <Button vertical>
                <Micon name="view-dashboard-outline" color="#a0a0a0" style={{fontSize:25}}/>
                <Text  style={[styles.txtfooter,{}]} numberOfLines={1} uppercase={false}>Dashboard</Text>
              </Button>
              <Button vertical>
                <Micon name="cash-usd" color="#a0a0a0" style={{fontSize:25}}/>
                <Text style={[styles.txtfooter,{}]} uppercase={false} numberOfLines={1}>Price Alert</Text>
              </Button>
              <Button>
               <ActionButton buttonColor="rgba(231,76,60,1)" >
                <ActionButton.Item buttonColor='#9b59b6' onPress={() => alert("notes tapped!")}>
                <Micon name="cash" style={styles.actionButtonIcon}/>
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#3498db'  onPress={() => {}}>
                <Micon name="cash" style={styles.actionButtonIcon}/>
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#1abc9c'  onPress={() => {}}>
                <Micon name="cash" style={styles.actionButtonIcon}/>
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#1abc9c'  onPress={() => {}}>
                <Micon name="cash" style={styles.actionButtonIcon}/>
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#1abc9c'  onPress={() => {}}>
                <Micon name="cash" style={styles.actionButtonIcon}/>
                </ActionButton.Item>
               </ActionButton>
              </Button> 
              <Button vertical >
                <Micon name="checkbox-multiple-blank-circle" color="#a0a0a0" style={{fontSize:25}}/>
                <Text style={[styles.txtfooter,{}]} uppercase={false} numberOfLines={1}>Price Guide</Text>
              </Button>
              <Button vertical>
                <Micon name="code-equal" color="#a0a0a0" style={{fontSize:25}}/>
                <Text style={[styles.txtfooter,{}]} uppercase={false} numberOfLines={1}>Loan/Credit</Text>
              </Button>
            </FooterTab>
          </Footer>
        </ImageBackground>  
       </Container>
       </Drawer>
    );
  }
}
