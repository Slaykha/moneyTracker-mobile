import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, SHADOWS, SIZES } from '../constants'

export const CircleButton = (props) => {
    const{
        imgUrl,
        handlePress,
        rightStyle,
        topStyle
    } = props

  return (
    <TouchableOpacity
        style={{
            width: 30,
            height: 30,
            backgroundColor: COLORS.white,
            position:"absolute",
            borderRadius: SIZES.extraLarge,
            alignItems:"center",
            justifyContent:"center",
            ...SHADOWS.light,
            right:rightStyle,
            top:topStyle
        }}
        onPress={handlePress}
    >
        <Image source={imgUrl} resizeMode="contain" style={{width:24, height:24}}/>
    </TouchableOpacity>
  )
}

