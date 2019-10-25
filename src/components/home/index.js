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


import styles from '../../assets/stylesheet/style';

import Healthcare_header from '../header/index';

import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import RF from "react-native-responsive-fontsize";
import Text from 'react-native-text';
import PropTypes from "prop-types";




const proximaNova_fontfamily='ProximaNovaRegular';
const white='white';


export default class index extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
        <Container style={{backgroundColor:'#e9e9e9'}}>  
          <ImageBackground source={require('../../assets/images/topbgscircle.png')}  style={{height:200,width:null,flex:1}}>  
           <Healthcare_header page_name="Authenticate"  >
           <Content>
                <Text style={{fontSize:40}}>
                    This is Content Section
                </Text>
            </Content>
          </Healthcare_header>  
          </ImageBackground>  
       </Container>
    );
  }
}
