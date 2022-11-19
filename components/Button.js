import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants'

export const CircleButton = (props) => {
    const{
        imgUrl,
        handlePress,
        rightStyle,
        topStyle,
        size,
        color,
        imageSize = 24
    } = props

  return (
    <TouchableOpacity
        style={{
            width: size,
            height: size,
            backgroundColor: color,
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
        <Image source={imgUrl} resizeMode="contain" style={{width:imageSize, height:imageSize}}/>
    </TouchableOpacity>
  )
}

export const RectangleButton = (props) => {
    const{
        text,
        handlePress,
        rightStyle,
        topStyle,
        width = 50,
        height = 30,
        color,
        imageSize = 24
    } = props

  return (
    <TouchableOpacity
        style={{
            width: width,
            height: height,
            backgroundColor: color,
            position:"absolute",
            borderRadius: SIZES.small,
            alignItems:"center",
            justifyContent:"center",
            ...SHADOWS.light,
            right:rightStyle,
            top:topStyle
        }}
        onPress={handlePress}
    >
        <Text
            style={{
                fontFamily: FONTS.bold,
                fontSize: SIZES.medium,
                color: COLORS.white,
            }}
        >
            {text}
        </Text>
    </TouchableOpacity>
  )
}

