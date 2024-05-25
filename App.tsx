    import React from 'react';
    import { View, Text, StyleSheet,TextInput,Image,TouchableOpacity, Button, Alert} from 'react-native';
    import Icon from 'react-native-vector-icons/Ionicons';
    import IconFont from 'react-native-vector-icons/FontAwesome5';
    import IconFontAwe from 'react-native-vector-icons/FontAwesome6';
    import FontAwesome from 'react-native-vector-icons/FontAwesome';
    import Feather from 'react-native-vector-icons/Feather';
    import Entypo from 'react-native-vector-icons/Entypo';
    import AntDesign from 'react-native-vector-icons/AntDesign';
    import { NavigationContainer } from '@react-navigation/native';
    import { createNativeStackNavigator } from '@react-navigation/native-stack';



    const HomeScreen = ({ navigation }) => {
         return (
           <View style={styles.container}>

             <Icon name='chatbubble-ellipses' size={150} color='#70D4CC' style={{ marginTop: -50 }} />
             <Text style={styles.text} >AIdea CHAT</Text>
             <Text style={styles.textSide}> C H A T   A P P   &    M E S S A G E</Text>
             <View style={styles.buttonContainer}>
               <Button
                 title="♥"
                 onPress={() => navigation.navigate('Details')}
                 color='#AEEFEA'
               />
             </View>


            </View>
         );
    }


    const DetailsScreen = ({ navigation }) => {

      return (
        <View style={{  alignItems: 'center', justifyContent: 'center', marginTop: 80  }}>
           <Icon name='chatbubble-ellipses' size={150} color='#70D4CC' style={{ marginTop: -50 }} />
           <Text style={styles.text2} >AIdea CHAT</Text>
           <Text style={styles.input}>ID</Text>
           <TextInput
                   style={styles.inputBox}
           />

           <Text style={styles.input}>          Passward</Text>
           <TextInput
                   style={styles.inputBox}
                    secureTextEntry
                 />
            <TouchableOpacity onPress>
                 <Text style={styles.forgot} >※ forgot ID/Passward?</Text>
            </TouchableOpacity>
            <View style={styles.buttonDet}>
              <Button title="Login"
               onPress={() => navigation.navigate('Menu')}
               color='#619F9A' />
            </View>
            <View style={styles.buttonDet2}>
              <Button title="Sign Up" color='#619F9A' onPress={() => navigation.navigate('SignUp')}/>

            </View>
        </View>


      );
    }

    const MenuScreen = ({ navigation }) => {
        return (
            <View style = {{backgroundColor : '#70D4CC',alignItems: 'center', justifyContent: 'center' }}>
               <Icon name='chatbubble-ellipses' size={150} color='#FFFFFF' style={{ marginTop: 30 }} />

                 <View style={styles.firstIcon}>
                   <TouchableOpacity onPress={() => navigation.navigate('User')}>
                     <IconFont name='user-alt' size={80} color='#357C76' style={{ marginTop: 10,marginRight:30 }} />
                   </TouchableOpacity>
                     <IconFont name='user-alt' size={80} color='#357C76' style={{ marginTop: 10 }} />
                 </View>

               <View style={styles.firstIcon}>
                 <IconFontAwe name='user-group' size={80} color='#357C76' style={{  marginRight:28}}/>
                 <IconFontAwe name='user-group' size={80} color='#357C76' style={{  }} />
               </View>

               <View>
                  <IconFont name='users' size={90} color='#357C76' style={{ marginTop: 35 }} />
               </View>
               <View style={styles.buttonMenu}>
                    <Button title="+ new group"
                     onPress
                     color='#619F9A'/>
               </View>
               <View style={styles.buttonMenu2}>
                   <Button title="Invite with a code" color='#619F9A'/>

               </View>
               <Text></Text>
               <Text></Text>
               <Text></Text>



            </View>

      );
    }
    const UserScreen = ({ navigation }) => {
       return (
        <View style = {{backgroundColor : '#70D4CC',alignItems: 'center', justifyContent: 'center' }}>
          <View>
            <IconFontAwe name='circle-user' size={120} color='#FFFFFF' style={{ marginTop: 30,marginRight:10}} />
          </View>
          <View style={styles.therButton}>
            <FontAwesome name='user-circle-o' size={60} color='#FFFFFF' style={{ marginTop: 5,marginRight:50}} />
            <FontAwesome name='user-circle-o' size={60} color='#FFFFFF' style={{ marginTop: 5,marginRight:1}} />
            <FontAwesome name='user-circle-o' size={60} color='#FFFFFF' style={{ marginTop: 5,marginLeft:40,marginRight: 35 }} />

          </View>
          <View style={styles.therButton2}>
            <View style={styles.textUser}>
              <Text>user1</Text>
            </View>
            <View style={styles.textUser2}>
              <Text>user2</Text>
            </View>
            <View style={styles.textUser3}>
              <Text>user3</Text>
            </View>

          </View>
          <View >
            <View style={{height: 540, flexDirection: 'column', top: 60}}>

              <View style={{width: 380, height: 550, bottom: 50, backgroundColor: 'white', borderRadius: 50}} >
                <View>
                   <Feather name='minus' size={70} color='000000' style={{ marginTop: -24,marginLeft:150 }} />
                </View>
                <View style={styles.smile1}>
                  <Feather name='smile' size={50} color='#446F6B' style={{ marginTop: 5,marginLeft: 20 }} />
                  <Text style= {{ fontSize: 20, color: 'black', margin: 10}}>Alex LInderson</Text>
                  <Text style= {{ marginLeft:40, marginTop: 25}}>2 min ago</Text>
                </View>
                <View style={styles.smile1}>
                  <Feather name='smile' size={50} color='#446F6B' style={{ marginTop: 10,marginLeft: 20}} />
                  <Text style= {{ fontSize: 20, color: 'black', margin: 10, marginTop:15}}>Sally</Text>
                  <Text style= {{ marginLeft:130, marginTop: 25}}>5 min ago</Text>
                </View>
                <View style={styles.smile2}>
                  <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                    <Feather name='users' size={30}  style={{ marginTop:300,marginLeft: 20 }} />
                  </TouchableOpacity>
                    <Feather name='message-circle' size={30}  style={{ marginTop:300,marginLeft: 20 }} />
                  <TouchableOpacity onPress={() => navigation.navigate('Configure')}>
                    <Feather name='menu' size={30}  style={{ marginTop:300,marginLeft: 20 }} />
                  </TouchableOpacity>
                </View>
              </View>

            </View>
          </View>
        </View>

       );

    }
    const ChatScreen = ({ navigation }) => {
        return(
          <View>
            <View style={{  alignItems: 'center', justifyContent: 'center', marginTop: 0, backgroundColor : '#AEEFEA'}}>
              <Icon name='chatbubble-ellipses' size={80} color='#FFFFFF' style={{ marginTop: 30 }} />
            </View>
            <View style={{flexDirection: 'row',backgroundColor : '#AEEFEA' }}>
              <Feather name='user'  color='#446F6B' size={60}  style={{ marginTop:30,marginLeft: 20, }} />
              <Text style={{ marginTop:45,marginLeft: 13, fontSize: 20, fontWeight: 600 }} >Ju SeoYeon</Text>
              <FontAwesome name='quote-left' size={16} color='#446F6B'   style={{ marginTop:45,marginLeft: 80}} />
              <Text color='#446F6B' style={{ marginTop:45,marginLeft: 21, fontSize: 15, }} > 안녕? </Text>
              <FontAwesome name='quote-right' size={16}  color='#446F6B' style={{ marginTop:45, marginLeft: 25}} />

            </View>
            <View style={{flexDirection: 'row',backgroundColor : '#AEEFEA',  }}>
              <Feather name='chevron-right' size={50}  style={{ marginTop:20,marginLeft: 30}} />
              <Feather name='plus-square' size={50}  style={{ marginTop:20,marginLeft: 15 }} />
              <Feather name='plus-square' size={50}  style={{ marginTop:20,marginLeft: 15 }} />
              <Feather name='plus-square' size={50}  style={{ marginTop:20,marginLeft: 15 }} />
              <Entypo name='dots-three-horizontal' size={30}  style={{ marginTop:50,marginLeft: 20 }} />
            </View>
            <View>
              <TextInput style={{ top: 15, width: 330, height: 30, bottom: 50, marginLeft: 28,backgroundColor: '#DCDCDC',borderRadius: 50}}/>
                <Feather name='search' size={18}  style={{ marginTop:-8,marginLeft: 40}} />

            </View>
            <View style={styles.smile1}>
               <Feather name='smile' size={50} color='#446F6B' style={{ marginTop: 25,marginLeft: 20 }} />
               <Text style= {{ fontSize: 20, color: 'black', margin: 15, marginTop: 32}}>Alex LInderson</Text>
               <Text style= {{ marginLeft:30, marginTop: 30}}> > Last seen yesterday</Text>
            </View>
            <View style={{ top: 10, width: 600, height: 3, bottom: 50, marginLeft: 0,backgroundColor: '#DCDCDC' }}></View>
            <View style={styles.smile1}>
               <Feather name='smile' size={50} color='#446F6B' style={{ marginTop:20,marginLeft: 20}} />
               <Text style= {{ fontSize: 20, color: 'black', margin: 15, marginTop:25}}>Sally</Text>
               <Text style= {{ marginLeft:120, marginTop: 30}}> > Online</Text>
            </View>
            <View style={{ top: 10, width: 600, height: 3, bottom: 50, marginLeft: 0,backgroundColor: '#DCDCDC' }}></View>
            <View style={styles.smile1}>
                <Feather name='smile' size={50} color='#446F6B' style={{ marginTop:20,marginLeft: 20}} />
                <Text style= {{ fontSize: 20, color: 'black', margin: 15, marginTop:25}}>Sally</Text>
                <Text style= {{ marginLeft:120, marginTop: 30}}> > Online</Text>
            </View>
            <View style={styles.smile2}>
               <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                    <Feather name='users' size={30}  style={{ marginTop:200,marginLeft: 20 }} />
               </TouchableOpacity>
               <Feather name='message-circle' size={30}  style={{ marginTop:200,marginLeft: 20 }} />
               <Feather name='menu' size={30}  style={{ marginTop:200,marginLeft: 20 }} />

            </View>
          </View>

        )
    }
    const ConfigureScreen = ({ navigation }) => {
        return(
          <View>
            <View style={{flexDirection: 'row'}}>
              <IconFontAwe name='circle-user' size={80} color='#70D4CC' style={{ margin: 20 }} />
              <Text style={{ fontSize: 20, fontWeight: 600, marginTop: 30}}>Ju SeoYeon</Text>
              <AntDesign name='right' size={20} color='#000000' style={{ margin: 20 ,marginTop:50, marginLeft: 130}} />
            </View>
            <View>
            <Text style={{ marginLeft: 125, marginTop: -50}}>010-3217-0811</Text>
            <View style={{ top: 30, width: 600, height: 3, bottom: 50, marginLeft: 0,backgroundColor: '#DCDCDC' }}></View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <AntDesign name='user' size={40} color='#000000'  style={{ margin: 50,marginTop:20, marginLeft: 15}} />
              <Text  style={{marginLeft:-40, marginTop:25, fontSize: 20, fontWeight: '600'}}>Account</Text>
              <AntDesign name='right' size={20} color='#000000' style={{ margin: 20 ,marginTop:30, marginLeft: 220}} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon name='chatbubble-outline' size={35} color='#000000'  style={{ margin: 50,marginTop:-27, marginLeft: 15}} />
              <Text  style={{marginLeft:-35, marginTop:-24, fontSize: 20, fontWeight: '600'}}>Chats</Text>
              <AntDesign name='right' size={20} color='#000000' style={{ margin: 20 ,marginTop:-18, marginLeft: 245}} />
            </View>

            <View style={{flexDirection: 'row'}}>
               <Entypo name='light-up' size={38} color='#000000'  style={{ margin: 50,marginTop:-27, marginLeft: 15}} />
               <Text  style={{marginLeft:-36, marginTop:-24, fontSize: 20, fontWeight: '600'}}>Appereance</Text>
               <AntDesign name='right' size={20} color='#000000' style={{ margin: 20 ,marginTop:-18, marginLeft: 187}} />
            </View>
            <View  style={{flexDirection: 'row'}}>
               <Entypo name='light-bulb' size={38} color='#000000'  style={{ margin: 50,marginTop:-27, marginLeft: 15}} />
               <Text  style={{marginLeft:-36, marginTop:-24, fontSize: 20, fontWeight: '600'}}>Notification</Text>
               <AntDesign name='right' size={20} color='#000000' style={{ margin: 20 ,marginTop:-18, marginLeft: 190}} />
            </View>
            <View style={{flexDirection: 'row'}}>
               <Entypo name='shield' size={38} color='#000000'  style={{ margin: 50,marginTop:-27, marginLeft: 15}} />
               <Text  style={{marginLeft:-36, marginTop:-24, fontSize: 20, fontWeight: '600'}}>Privacy</Text>
               <AntDesign name='right' size={20} color='#000000' style={{ margin: 20 ,marginTop:-18, marginLeft: 230}} />
            </View>
            <View style={{flexDirection: 'row'}}>
               <AntDesign name='folder1' size={38} color='#000000'  style={{ margin: 50,marginTop:-27, marginLeft: 15}} />
               <Text  style={{marginLeft:-36, marginTop:-24, fontSize: 20, fontWeight: '600'}}>Data Usage</Text>
               <AntDesign name='right' size={20} color='#000000' style={{ margin: 20 ,marginTop:-18, marginLeft: 195}} />
            </View>
            <View style={{ top: -20, width: 600, height: 3, bottom: 30, marginLeft: 0,backgroundColor: '#DCDCDC' }}></View>
            <View style={{flexDirection: 'row'}}>
               <AntDesign name='questioncircleo' size={38} color='#000000'  style={{ margin: 50,marginTop:0, marginLeft: 15}} />
               <Text  style={{marginLeft:-36, marginTop:3, fontSize: 20, fontWeight: '600'}}>Help</Text>
               <AntDesign name='right' size={20} color='#000000' style={{ margin: 20 ,marginTop:5, marginLeft: 253}} />
            </View>
            <View style={{flexDirection: 'row'}}>
               <AntDesign name='mail' size={38} color='#000000'  style={{ margin: 50,marginTop:-29, marginLeft: 15}} />
               <Text  style={{marginLeft:-36, marginTop:-28, fontSize: 20, fontWeight: '600'}}>Invite Your Friends</Text>
               <AntDesign name='right' size={20} color='#000000' style={{ margin: 20 ,marginTop:-28, marginLeft: 125}} />
            </View>
            <View style={styles.smile2}>
               <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                   <Feather name='users' size={30}  style={{ marginTop:60,marginLeft: 20 }} />
               </TouchableOpacity>
               <Feather name='message-circle' size={30}  style={{ marginTop:60,marginLeft: 20 }} />
               <Feather name='menu' size={30}  style={{ marginTop:60,marginLeft: 20 }} />

            </View>


          </View>


        )
    }
    const SignUpScreen = ({ navigation }) =>{
        return (
         <View style = {{ alignItems: 'center', justifyContent: 'center' }}>
           <View style={{flexDirection: 'row' , marginTop: 120}}>
             <Text style={{fontSize: 30, fontWeight: 600}}>Welcome to</Text>
             <Text style={{fontSize: 30, fontWeight: 900, color: '#357C76'}}>  AIdea CHAT</Text>
           </View>
           <View style={{flexDirection: 'row' }}>
             <Feather name='minus' size={30} color='#357C76' style={{ marginTop:20,marginLeft: 20 }} />
             <Feather name='minus' size={30} color='#DCDCDC' style={{ marginTop:20,marginLeft: 20 }} />
             <Feather name='minus' size={30} color='#DCDCDC' style={{ marginTop:20,marginLeft: 20 }} />
           </View>
           <View style={{marginTop: -20, marginLeft: 45}}>
             <Text style={styles.input}>name*</Text>
                 <TextInput
                     style={styles.inputBox}/>
             <Text style={styles.input}>Passward*</Text>
                      <TextInput
                        style={styles.inputBox}/>
              <Text style={styles.input}>phone number*</Text>
                      <TextInput
                         style={styles.inputBox}/>
              <Text style={styles.input}>gender M/F*</Text>
                      <TextInput
                         style={styles.inputBox}/>

           </View>
           <View style={styles.buttonDet3}>
               <Button title="Create an account"
                   onPress={() => navigation.navigate('Add your email')}
                   color='#619F9A' />
           </View>
         </View>
        )
     }
     const EmailScreen = ({ navigation }) =>{
        return(
          <View style = {{ alignItems: 'center', justifyContent: 'center' }}>
            <View style={{flexDirection: 'row' , marginTop: 120}}>
               <Text style={{fontSize: 30, fontWeight: 600}}>Add your</Text>
               <Text style={{fontSize: 30, fontWeight: 900, color: '#357C76'}}>  email</Text>
            </View>
            <View style={{flexDirection: 'row' }}>
               <Feather name='minus' size={30} color='#357C76' style={{ marginTop:20,marginLeft: 20 }} />
               <Feather name='minus' size={30} color='#357C76' style={{ marginTop:20,marginLeft: 20 }} />
               <Feather name='minus' size={30} color='#DCDCDC' style={{ marginTop:20,marginLeft: 20 }} />
            </View>
            <View style={{}}>
               <Text style={styles.input}>Email</Text>
                    <TextInput
                       style={styles.inputBox}/>
            </View>
            <View style={styles.buttonDet3}>
                <Button title="Create an account"
                    onPress={() => navigation.navigate('Verify your email')}
                       color='#619F9A' />
            </View>
          </View>

        )
     }

     const VerifyScreen = ({ navigation }) =>{
        return(
          <View style = {{ alignItems: 'center', justifyContent: 'center' }}>
              <View style={{flexDirection: 'row' , marginTop: 120}}>
                <Text style={{fontSize: 30, fontWeight: 600}}>Verify your</Text>
                <Text style={{fontSize: 30, fontWeight: 900, color: '#357C76'}}>  email</Text>
              </View>
              <View style={{flexDirection: 'row' }}>
                  <Feather name='minus' size={30} color='#357C76' style={{ marginTop:15,marginLeft: 20 }} />
                  <Feather name='minus' size={30} color='#357C76' style={{ marginTop:15,marginLeft: 20 }} />
                  <Feather name='minus' size={30} color='#357C76' style={{ marginTop:15,marginLeft: 20 }} />
              </View>
              <View>
                <Text style={{ marginLeft: 40, marginTop: 20}}>We just sent 5-digit code to </Text>
                <Text> sarah.jansen@gmail.com, enter it bellow:</Text>
              </View>
              <Text style={styles.input1}>Code</Text>
              <View style={{flexDirection: 'row' }}>

                        <TextInput
                            style={styles.inputBox1}/>
                        <TextInput
                            style={styles.inputBox1}/>
                        <TextInput
                            style={styles.inputBox1}/>
                        <TextInput
                            style={styles.inputBox1}/>
              </View>
              <View style={styles.buttonDet3}>
                   <Button title="Verify email"
                         onPress={() => navigation.navigate('Details')}
                               color='#619F9A' />
              </View>


          </View>

        )
     }






    const Stack = createNativeStackNavigator();

    const App = () => {
      return (
       <NavigationContainer>
         <Stack.Navigator initialRouteName="Home">
             <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }}/>
             <Stack.Screen name="Details" component={DetailsScreen} />
             <Stack.Screen name="Menu" component={MenuScreen} />
             <Stack.Screen name="User" component={UserScreen} />
             <Stack.Screen name="Chat" component={ChatScreen} />
             <Stack.Screen name="Configure" component={ConfigureScreen} />
             <Stack.Screen name="SignUp" component={SignUpScreen} />
             <Stack.Screen name="Add your email" component={EmailScreen} />
             <Stack.Screen name="Verify your email" component={VerifyScreen} />

        </Stack.Navigator>
       </NavigationContainer>



      );
    };

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 500,
        fontWeight: '600'

      },
      text: {
        fontSize: 80,
        fontWeight: '800',
        color: '#357C76'
      },
      CircleFillStep1Style: {
        width : 16, height : 16, marginRight : 8
      },
      textSide: {
        margin: 50,
        fontSize: 20,
        color: '#5C7C79'

       },
      text2: {
       fontSize: 40,
       fontWeight: '700',
       color: '#5C7C79',
       marginTop: 30


      },
      inputBox: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
        width: 300
      },
      input: {
       marginTop: 30,
       fontSize: 15,
       fontWeight: '500',
       marginRight: 250,
       marginBottom: 5
      },
      forgot:{
         marginTop: 30,
         fontSize: 15,
         fontWeight: '500',
         marginBottom: 5
      },
      buttonContainer: {
       width: 100,
       height: 50,
      },
      buttonDet: {
       width: 140,
       height: 50,
       marginTop: 50,
       textColor: '#5C7C79'

      },

      buttonDet2: {
       marginTop: 15,
       width: 100,
       height: 50,
      },
      menu: {
        backgroundColor: '#357C76'

      },
      firstIcon:{
        flexDirection: 'row',
        marginTop: 50
      },
      buttonMenu: {
        marginTop: 70,
        width: 200,
        height: 50,
        borderRadius: 100,
        textSize: 80

      },
      buttonMenu2:{
        marginTop: 5,
        width: 200,
        height: 50,
        borderRadius: 100,
        textSize: 80
      },
      therButton: {
       flexDirection: 'row',
       marginTop: 30,
       marginLeft: 20


      },
      therButton2 :{
       flexDirection: 'row',
       margin: 5,



      },
      textUser :{
       marginRight: 70
      },
      textUser2 :{
        marginRight: 80

      },
      textUser3 :{
        marginRight: 5
      },
      chat :{
       height: 40
      },
      smile1 :{
       flexDirection: 'row',
      },
      smile2 :{
       flexDirection: 'row',
       justifyContent: 'space-around'
      },
      buttonDet3: {
        width: 180,
        height: 70,
        marginTop: 70,
        textColor: '#5C7C79',

        },
      inputBox1: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
        width: 60,
        height: 60,
        margin:5
        },
      input1: {
        marginTop: 0,
        fontSize: 17,
        fontWeight: '500',
        marginRight: 225,
        marginTop: 30,

        },

    });

export default App;