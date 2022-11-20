import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../constants'
import { RectangleButton } from './Button'

const Register = () => {
    const [user, setUser] = useState({name: "", userName: "", email: "", password: ""})

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
                    top:250,
                    left: "10%",
                    color: COLORS.white,
                }} 
                placeholder={"Name"} 
                keyboardType={'default'} 
                placeholderTextColor={COLORS.gray}
                onChangeText={value => setUser({...user, name: value})}
                value={user.name}
            />
            <TextInput 
                style={{
                    height: 50,
                    borderWidth: 1,
                    borderColor: COLORS.orange,
                    borderRadius: SIZES.small,
                    padding: 8,
                    width: "80%",
                    top:260,
                    left: "10%",
                    color: COLORS.white,
                }} 
                placeholder={"User Name"} 
                keyboardType={'default'} 
                placeholderTextColor={COLORS.gray}
                onChangeText={value => setUser({...user, userName: value})}
                value={user.userName}
            />
            <TextInput 
                style={{
                    height: 50,
                    borderWidth: 1,
                    borderColor: COLORS.orange,
                    borderRadius: SIZES.small,
                    padding: 8,
                    width: "80%",
                    top:270,
                    left: "10%",
                    color: COLORS.white,
                }} 
                placeholder={"Email"} 
                keyboardType={'default'} 
                placeholderTextColor={COLORS.gray}
                onChangeText={value => setUser({...user, email: value})}
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
                    top:280,
                    left: "10%",
                    color: COLORS.white,
                }} 
                placeholder={"Password"} 
                keyboardType={'default'} 
                placeholderTextColor={COLORS.gray}
                onChangeText={value => setUser({...user, password: value})}
                value={user.password}
                secureTextEntry={true}
            />
            <RectangleButton 
                handlePress={handleSubmit} 
                text={"Register"} 
                height={50}
                width={"80%"} 
                rightStyle={"10%"} 
                topStyle={490} 
                color={COLORS.orange} 
            />
        </View>
    )
}

export default Register