import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../constants'
import { RectangleButton } from './Button'

const LogIn = () => {
    const [user, setUser] = useState({name: "", userName: "", email: "", password: ""})

    const setUserNameEmail = (value) => {
        setUser({...user, email: value})
    }

    const setPassword = (value) => {
        setUser({...user, password: value})
    }

    const handleSubmit = () => {
        console.log(user)
    }
    return (
        <View>
            <TextInput 
                style={{
                    height: 50,
                    borderWidth: 1,
                    borderColor: COLORS.orange,
                    borderRadius: SIZES.small,
                    padding: 8,
                    width: "80%",
                    top:300,
                    left: "10%",
                    color: COLORS.white,
                }} 
                placeholder={"Username / Email"} 
                keyboardType={'default'} 
                placeholderTextColor={COLORS.gray}
                onChangeText={value => setUserNameEmail(value)}
                value={user.email}
            />
            <TextInput 
                style={{
                    height: 50,
                    borderWidth: 1,
                    borderColor: COLORS.orange,
                    borderRadius: SIZES.small,
                    padding: 8,
                    width: "80%",
                    top:310,
                    left: "10%",
                    color: COLORS.white,
                }} 
                placeholder={"Password"} 
                keyboardType={'default'} 
                placeholderTextColor={COLORS.gray}
                onChangeText={value => setPassword(value)}
                value={user.password}
                secureTextEntry={true}
            />
            <RectangleButton 
                handlePress={handleSubmit} 
                text={"Log In"} 
                height={50}
                width={"80%"} 
                rightStyle={"10%"} 
                topStyle={430} 
                color={COLORS.orange} 
            />
        </View>
    )
}

export default LogIn