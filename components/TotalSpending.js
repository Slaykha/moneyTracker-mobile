import { View, Text, Image } from 'react-native'
import React from 'react'

import {COLORS, SIZES, SHADOWS, assets, FONTS} from "../constants"
import { useNavigation } from '@react-navigation/native'
import { CircleButton } from './Button'

const TotalSpending = ({totalMoney}) => {
    const navigation = useNavigation()

  return (
    <View 
        style={{
            backgroundColor: COLORS.primary, 
            borderRadius: SIZES.font, 
            marginBottom: SIZES.extraLarge, 
            margin: SIZES.base, 
        }}
    >
        <View style={{ width:"100%", height: 70}}>
            <Text
                style={{
                    fontFamily: FONTS.bold,
                    fontSize: SIZES.extraLarge,
                    color: COLORS.white,
                    top:15,
                    left:60,
                }}
            >
                ₺ {totalMoney.toFixed(2)}
            </Text>
            {/* <Image 
                source={data.Image} 
                resizeMode="cover"
                style={{
                    width:"100%",
                    height:"100%",
                    borderTopLeftRadius: SIZES.font,
                    borderTopRightRadius: SIZES.font
                }}
            />
            <CircleButton imgUrl={assets.heart} rightStyle={10} topStyle={10}/> */}
        </View> 
    </View>
  )
}

export default TotalSpending