import { View, Text, Image, ImageStore } from 'react-native'
import React from 'react'

import {COLORS, SIZES, SHADOWS, assets, FONTS} from "../constants"
import { useNavigation } from '@react-navigation/native'
import { CircleButton } from './Button'
import { CURRENCY_TYPES } from '../constants/currencies'

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
            <View
                style={{
                    width: 30,
                    height: 30,
                    backgroundColor: COLORS.white,
                    position:"absolute",
                    borderRadius: SIZES.extraLarge,
                    alignItems:"center",
                    justifyContent:"center",
                    ...SHADOWS.light,
                    left:10,
                    top:10
                }}
            >
                <Image source={assets.person01} resizeMode="contain" style={{width:26, height:26}}/>
            </View>
            <Text
                style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.medium,
                    color: COLORS.white,
                    top:"25%",
                    left:50,
                }}
            >
              {CURRENCY_TYPES[data.currency]} {data.money}
            </Text>
        </View>
    </View>
  )
}

export default Spendig