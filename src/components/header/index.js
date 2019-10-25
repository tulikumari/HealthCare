import React, { Component } from 'react';
import {Image ,StyleSheet,Dimensions }from 'react-native';
import {Header, Title, Content,  Button, Left, Right, Body,Icon, Drawer} from 'native-base';
import styles from '../../assets/stylesheet/style';
import SideBar from '../sidebar/Sidebar';


const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;


const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
 // main: {paddingLeft: 3},
}

export default class Healthcare_header extends Component {
  closeDrawer() {this._drawer._root.close()}
  openDrawer(){this._drawer._root.open()}
      
  render() {
    return (
        <Drawer 
            type="overlay" ref={(ref) => { this._drawer = ref; }} 
            content={<SideBar navigator={this._navigator} />}
            onClose={() => this.closeDrawer()}
            tapToClose={true}
            openDrawerOffset={0.2} // 20% gap on the right side of drawer 
            styles={drawerStyles}
            //panOpenMask={0.25}  for oprn left swipe anywhere
            style={{position:'absolute',height:deviceHeight, left:0,top:0,bottom:0}}
        >
            <Header transparent  hasTabs >
                <Body style={{flexDirection:'row'}}> 
                    <Button transparent onPress={()=>this.openDrawer()} >
                    <Image 
                        source= {require('../../assets/images/1.png')} 
                        style={styles.menu_image}
                    />
                    </Button> 
                    <Title style={[styles.txttitle,{paddingLeft:25,paddingTop:10}]}>{this.props.page_name}</Title>
                </Body>
            </Header>
        </Drawer>
    );
  }
}
