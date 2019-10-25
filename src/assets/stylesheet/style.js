import React, {StyleSheet} from 'react-native'



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

{/* publically access stylesheet */}
export default StyleSheet.create({
     bg_image:{
      height: 420, 
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
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
    },
    //stylesheet property for quoto treatement and package
    cards:{
      marginLeft:20,
      marginRight:20,
      marginTop:20,
      marginBottom:10,
      borderRadius:20,
    },
    tq_txtheading:{
      fontSize: menuf_size,
      fontFamily:proximaNova_fontfamily,
      fontWeight:'400',
      color:contant_txtcolor,
    },
    tq_txtheadingsub:{
      fontSize:normalf_size,
      marginTop:-20,
      color:contant_txtcolor,
      fontFamily:proximaNova_fontfamily,
    },
    textBox:{
      fontFamily:proximaNova_fontfamily,
      borderWidth:0,
      borderBottomColor:'transparent'
    },
    scrollCard:{
      marginTop:20,
      marginLeft:0,
      marginRight:0
    },
    searchItem:{
      height:25,
      width:'100%',
      borderBottomColor:'#f1f4f9',
    },
    searchCardItem:{
    borderRadius:150,
    backgroundColor:'#f1f4f9'
    },
    //box image property
    cardImage:{
      height:200,
      width: null,
      flex: 1,
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
    },
    offerImg:{
      height:80,
      width: 80,
      position:'absolute',
      top:20,
      right:10
    },
    txtDiscount:{
      position:'absolute',
      color:white_color,
      fontSize:normalf_size,
      fontFamily:proximaNova_fontfamily,
      top:45,
      right:33
    },
    tpImg:{
      height:80,
      width:'100%',
      position:'absolute',
      bottom:-1,
      left:0,
      right:0
    },
    //box text property
    txtAddress:{
      color:contant_txtcolor,
      fontSize:normalf_size,
      fontFamily:proximaNova_fontfamily,
      
    },
    txtfooter:{
      color:'#a0a0a0',
      //fontSize:normalf_size,
      fontFamily:proximaNova_fontfamily,
    },
    txtAddressIcon:{
      fontSize:25,
      paddingRight:5
    },
  // for a button scroll property  in package pages 
  btntext:{
    alignItems:'center',
    fontFamily:proximaNova_fontfamily,
    fontSize:normalf_size,
    color:white_color,
  },
  button:{
   backgroundColor:'transparent',
   marginLeft:10,
   marginRight:10,
   height:40,
   width:200,
   alignItems:'center',
   padding:0,
   justifyContent: 'center',
   borderRadius:20,
   shadowColor:'white',
   borderWidth:2,
   borderColor:'white'
  }


})
