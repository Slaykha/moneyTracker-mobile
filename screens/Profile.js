import { View, Text, SafeAreaView, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { CircleButton, FocusStatusBar } from '../components'
import { assets, COLORS, FONTS, SIZES } from '../constants'
import { useNavigation } from '@react-navigation/native'
import { RectangleButton } from '../components/Button'

const Profile = () => {
    const navigation = useNavigation()

    const [user, setUser] = useState({name: "Kadir", userName: "Kadirengin", email: "kadirengin2000@hotmail.com", password: ""})
    return (
        <SafeAreaView style={{flex:1}}>
            <FocusStatusBar background={COLORS.primary}/>
            <View style={{width:"100%", height:"100%", backgroundColor:COLORS.primary}}>
                <CircleButton color={COLORS.orange} topStyle={20} rightStyle={"88%"} size={35} imgUrl={assets.left} imageSize={25} handlePress={() => navigation.navigate("Home")} imageColor={COLORS.white}/>
                <View style={{top: "9%", height:150, backgroundColor:COLORS.background}}>
                    <CircleButton color={COLORS.white} topStyle={10} rightStyle={10} size={100} imgUrl={assets.person01} imageSize={95} handlePress={() => {}} />
                    <View style={{top:"30%", left:"15%"}}>
                        <Text style={{
                            fontFamily: FONTS.semiBold,
                            fontSize: SIZES.medium,
                            color: COLORS.white,
                            marginBottom:10
                            }}
                        >
                            {user.userName}
                        </Text>
                        <Text style={{
                            fontFamily: FONTS.semiBold,
                            fontSize: SIZES.medium,
                            color: COLORS.white,
                            marginBottom:10
                            }}
                        >
                            {user.name}
                        </Text>
                        <Text style={{
                            fontFamily: FONTS.semiBold,
                            fontSize: SIZES.medium,
                            color: COLORS.white,
                            marginBottom:10
                            }}
                        >
                            {user.email}
                        </Text>
                    </View>
                </View>
                <View>
                    <RectangleButton 
                        handlePress={() => {}} 
                        text={"Spending Types"} 
                        height={50}
                        width={"80%"} 
                        rightStyle={"10%"} 
                        topStyle={100} 
                        color={COLORS.orange} 
                    />
                    <RectangleButton 
                        handlePress={() => {}} 
                        text={"Change Password"} 
                        height={50}
                        width={"80%"} 
                        rightStyle={"10%"} 
                        topStyle={180} 
                        color={COLORS.orange} 
                    />
                    <RectangleButton 
                        handlePress={() => navigation.navigate("Register_Login")} 
                        text={"Login / Register (temporary)"} 
                        height={50}
                        width={"80%"} 
                        rightStyle={"10%"} 
                        topStyle={260} 
                        color={COLORS.orange} 
                    />
                    <RectangleButton 
                        handlePress={() => {}} 
                        text={"Log Out"} 
                        height={50}
                        width={"80%"} 
                        rightStyle={"10%"} 
                        topStyle={550} 
                        color={COLORS.red} 
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Profile