import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { CircleButton, FocusStatusBar } from '../components'
import { assets, COLORS } from '../constants'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{flex:1}}>
            <FocusStatusBar background={COLORS.primary}/>
            <View style={{width:"100%", height:"100%", backgroundColor:COLORS.primary}}>
                <CircleButton color={COLORS.orange} topStyle={20} rightStyle={"88%"} size={35} imgUrl={assets.left} imageSize={25} handlePress={() => navigation.navigate("Home")} imageColor={COLORS.white}/>
                <View>
                    <CircleButton color={COLORS.orange} topStyle={20} rightStyle={10} size={100} imgUrl={assets.person01} imageSize={95} handlePress={() => {}} />

                </View>
            </View>
        </SafeAreaView>
    )
}

export default Profile