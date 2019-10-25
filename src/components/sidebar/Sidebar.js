import React, { Component } from 'react';
import {ImageBackground} from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Item, Thumbnail } from 'native-base';
import styles from '../../assets/stylesheet/style';

const proximaNova_fontfamily='ProximaNovaRegular';


export default class ListDividerExample extends Component {
  render() {
    return (
      <Container >
        <ImageBackground source={require('../../assets/images/blogimg1.png')}  style={[{height:250}]}>  
         <Content>
           <Item style={{flex:1,marginTop:80,padding:5,borderBottomColor:'transparent',backgroundColor:'#ff5200',marginLeft:30,marginRight:25,color:'white'}}>
             <Thumbnail large source={require('../../assets/images/logo.png')}  /> 
             <Text style={{fontSize:30,fontWeight:'400',fontFamily:proximaNova_fontfamily,color:'white',paddingLeft:10}}>HealthCare</Text>
           </Item>      
        </Content>
       </ImageBackground> 
       <Content>
             <List>
            <ListItem itemDivider>
              <Text>Bradley Horowitz</Text>
            </ListItem>                    
            <ListItem>
              <Text onPress={()=>alert('working process is done')}>Aaron Bennet</Text>
            </ListItem>
            <ListItem>
              <Text>Ali Connors</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>Aaron Bennet</Text>
            </ListItem>  
            <ListItem>
              <Text>Bradley Horowitz</Text>
            </ListItem>
            <ListItem>
              <Text>Ali Connors</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>Aaron Bennet</Text>
            </ListItem>  
            <ListItem>
              <Text>Bradley Horowitz</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}