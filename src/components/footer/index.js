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
import SideBar from './Sidebar';

import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import RF from "react-native-responsive-fontsize";
import Text from 'react-native-text';
import PropTypes from "prop-types";




const proximaNova_fontfamily='ProximaNovaRegular';
const white='white';


export default class index extends Component {
 
  render() {
    return (
     
        <Content>             
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
        </Content>
    );
  }
}
