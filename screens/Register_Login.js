import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { ImageBackgroundComponent, SafeAreaView, Text, View } from 'react-native'
import { FocusStatusBar } from '../components'
import { CircleButton, LineButton } from '../components/Button'
import LogIn from '../components/LogIn'
import Register from '../components/Register'
import { assets, COLORS } from '../constants'

const Register_Login = () => {
  const [isFocused, setIsFocused] = useState("Log In")

  return (
    <SafeAreaView style={{flex:1}}>
      <FocusStatusBar background={COLORS.primary}/>
      <View style={{width:"100%", height:"100%", backgroundColor:COLORS.primary}}>
        <View>
          <LineButton text={"Log In"}  rightStyle={"50%"}  topStyle={70}  isFocus={isFocused === "Log In"}  handlePress={() => {setIsFocused("Log In")}} width={"40%"} borderWidth={1}/>
          <LineButton text={"Register"}  rightStyle={"10%"}  topStyle={70}   isFocus={isFocused === "Register"}  handlePress={() => {setIsFocused("Register")}} width={"40%"} borderWidth={1}/>
        </View>
        <View>
          {isFocused === "Log In" ? <LogIn />: <Register />} 
        </View>
    </View>
      
    </SafeAreaView>
  )
}

export default Register_Login