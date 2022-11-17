import { View, Text, Image } from 'react-native'
import React from 'react'

import {COLORS, SIZES, SHADOWS, assets} from "../constants"
import { useNavigation } from '@react-navigation/native'
import { CircleButton } from './Button'

const Spendig = ({data}) => {
    const navigation = useNavigation()

  return (
    <View 
        style={{
            backgroundColor: COLORS.primary, 
            borderRadius: SIZES.font, 
            margin: SIZES.base, 
            marginBottom:0,
            ...SHADOWS.light
        }}
    >
        <View style={{ width:"100%", height: 50}}>
            <Image 
                source={data.Image} 
                resizeMode="cover"
                style={{
                    width:"100%",
                    height:"100%",
                    borderTopLeftRadius: SIZES.font,
                    borderTopRightRadius: SIZES.font
                }}
            />
            <CircleButton imgUrl={assets.heart} rightStyle={10} topStyle={10}/>
        </View>
    </View>
  )
}

export default Spendig