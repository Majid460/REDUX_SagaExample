import { StyleSheet,Dimensions } from "react-native";
const screenWidth=Dimensions.get('screen').width;
const screenHeight=Dimensions.get('screen').height;

export default StyleSheet.create({

 heading:{
     fontSize:30,
     fontWeight:'700',
     textAlign:'center',
     marginTop:20,
     marginBottom:20,

},
user: {
    flexDirection: 'column',
    marginBottom: 6,
  },
  image: {
    paddingTop:100,
    width: '100%',
    height: 200,
    marginRight: 30,
    
    
  },
  button1: {
    borderColor: '#009387',
    width:'auto',
    height:'auto',
    marginStart:25,
    paddingLeft:100,
    paddingRight:100,
    borderWidth:2,
    backgroundColor:'#009387',
    
   
},
button2: {
  backgroundColor:'pink',
  borderRadius:20,
  padding:10,
  marginStart:5
},
sectionContainer: {
  marginTop: 30,
  paddingHorizontal: 40,
  paddingVertical:50,
  borderWidth:1,
  borderColor:'#808080',
  marginStart:25,
  borderRadius:15,
  backgroundColor:'pink'
  
},
mainContainer: {
  
  flex:1,
  flexDirection:'column',
  marginTop:20,
  padding:30,
  alignContent:'center',
  alignSelf:'center',

},
//////////// Types//////
homeview:
{
backgroundColor:'pink',
marginTop:10,
padding:20,
},
profile:{
  fontSize:20,
  fontWeight:'400',
  textAlign:'center',
 
},
title1: {
  fontSize: 20,
  fontWeight: 'bold',
  marginTop: 5,
  marginBottom: 2,
  marginRight:20,
},
title2: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 2,
  color:'white'
},
txt1:{
marginBottom:5,
marginStart:80,
fontSize:20,
},
///////////
containerStyle: {
 
  borderWidth:1,
  marginBottom:10,
  marginLeft:10,
  marginRight:20,
  marginTop:50,
  elevation: 10,

},
Text1:{
 fontSize:18,
 color:'black'
},
////////////Signup//////////
root:{
flex:1,
backgroundColor:'#534A4A',

},
centeredView: {
  flex: 5,
  marginTop:10,
  alignItems: "center",
  borderWidth:2,
  borderRadius:10,
  marginBottom:0,
  backgroundColor:'white',
 
  
},
SafeAreaView: {
  flex: 1,
  marginTop:10,
  alignItems: "center",
  marginBottom:20,
  
},
adminhe:{
  fontSize:28,
  fontWeight:'700',
  textAlign:'center',
  marginTop:30,
  color:'white',
},
action: {
  flexDirection: 'row',
  marginTop: 10,
  borderWidth: 1,
  borderColor:'black',
  paddingBottom: 5,
  borderRadius:10

},
textInput: {
 
  marginTop:5,
  paddingTop: 5,
  color: 'black',
  fontSize:18,
  width:300,
  paddingVertical:5,
  paddingStart:5,
  

},
   icon:{
 marginTop:13,
 paddingRight:5
 },
//////////////////

button2: {
  marginTop:30,
  elevation: 2,
  padding:10,
  borderRadius:10,
  borderColor:'white'
 
},
buttonOpen: {
  backgroundColor: "#F194FF",
},
buttonClose: {
  backgroundColor: '#534A4A',
},
textStyle: {
  color: "white",
  textAlign: "center",
  fontSize:20
},
textStyle2: {
  color: "#F194FF",
  textAlign: "center",
  fontSize:22,
  fontWeight:'bold'
},

viewemail:{
  flexDirection: "row",
         alignItems: "center",
         marginHorizontal: 20,
         borderWidth: 2,
         marginTop: 10,
         
         paddingHorizontal: 20,
         borderColor: "#00716F",
         borderRadius: 23,
         paddingVertical: 4
},

////////////Tablets/////////
containert: {
  flex: 1,

},
itemt: {
  backgroundColor: 'pink',
  padding: 20,
  marginVertical: 8,
  marginHorizontal: 16,
},
title: {
  fontSize: 32,
},
textInputt: {
    marginStart:15,      
    marginTop:10,
    paddingTop: 20,
    color: '#05375a',
    borderBottomWidth:1,
    fontSize:18,
    borderRadius:10,
    width:'90%',
    borderWidth:1,
   
   },
   buttoncontainer:
   {
    flexDirection:'row',
    alignSelf:'center'
   },
   buttonviewt:{
    flexDirection:'row',
    marginTop:20,
    marginStart:5,
    alignSelf:'center',
    backgroundColor:'#534A4A',
    alignItems:'center'  ,
    borderRadius:20,
   },
   textStylet:{
    color: "white",
    textAlign: "center",
    fontSize:25,
    
   },
   buttont:{

    borderRadius: 20,
    borderWidth:2,
    borderColor:'#534A4A',
    backgroundColor:'#534A4A'
   },
   /////////// Home////////
   maincon:{
    flex:1,
    paddingVertical:30,
    borderWidth:1,
    borderColor:'#808080',
     borderRadius:15,
    backgroundColor:'white',
    paddingStart:10,
    paddingEnd:10,
     },
   maincon1:{
    
    flex:2,
  marginTop: 20,
  paddingVertical:10,
  borderWidth:1,
  borderColor:'#808080',
  marginStart:10,
  marginEnd:10,
  borderRadius:15,
  backgroundColor:'#534A4A',
  paddingStart:10,
  paddingEnd:10,
   },
  updatetext:{
    fontSize:20,
  },
  headingu:{
   fontSize:30,
   textAlign:'center',
   marginBottom:10,
   marginTop:20,
   color:'#534A4A',
   fontWeight:'bold'
  },
  ////////// Employees
  item:
  {
    flex:1,
   flexDirection:'column',
   borderColor:'white',
   borderRadius:10,
   borderWidth:0.5,
   fontSize:20,
   paddingVertical:20,
   marginBottom:20,
   paddingStart:15,
  },
  A:
  {
   flex:2,
  
  },
  B:{
   flex:1,
  },
  titl:{
    color:'white',
   fontSize:30,
   
  },
  mainconn:{
    flex:1,
   paddingVertical:10,
  borderWidth:1,
  borderColor:'#808080',
  borderRadius:10,
  backgroundColor:'white',
  paddingStart:15,
  paddingEnd:10,
  marginBottom:10
  },
  mainconn2:{
    
    
    backgroundColor:'orange',
    marginTop:50,
    borderRadius:20,
    marginHorizontal:100,
    
   
  
  },
  mainconn1:{
    flex:1,
    paddingVertical:5,
    backgroundColor:'white',
    paddingStart:1,
    paddingEnd:1,
  },
  maincon2:{
    flex:2,
    paddingVertical:1,
    backgroundColor:'white',
    paddingStart:1,
    paddingEnd:1,
    marginTop:30,
  },
  maincon3:{
    flex:1,
    paddingVertical:1,
    backgroundColor:'white',
    paddingStart:1,
    paddingEnd:1,
    marginTop:30,
    elevation:4,
  },
  Text1:{
    fontSize:18,
    color:'black',
    marginBottom:10
   },
   ///////////////// Budget//////
   budgetview:{
    flexDirection:'row'
   },
   C:{
    flex:1,
    marginRight:10,
   },
   title3:
   {
    fontSize:18,
    fontWeight:'bold',
    paddingVertical:7
   },




   //////////////// Home/////////////

   pad:{
   flexDirection:"row",
   flexWrap:"wrap",
   paddingVertical:10,
   },

    button: {
    backgroundColor:'orange',
    borderRadius: 100,
    paddingHorizontal: 30,
    paddingVertical:10,
    elevation:10,
    
  
   
    },
    buttoneq: {
        backgroundColor:'orange',
        borderRadius: 100,
        paddingHorizontal: 40,
        paddingVertical:40,
         
        marginLeft:30,
        marginRight:40,
        marginBottom:30,
        },
  padtext:
  {
    fontSize:28,
  },
  padtexteq:
  {
    fontSize:28,
  }
});