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
        imageSize = 24,
        imageColor,
        ZIndex = 0
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
            top:topStyle,
            zIndex:ZIndex,
        }}
        onPress={handlePress}
    >
        <Image source={imgUrl} resizeMode="contain" style={{width:imageSize, height:imageSize, tintColor: imageColor}}/>
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

export const LineButton = (props) => {
    const{
        text,
        handlePress,
        rightStyle,
        topStyle,
        width = 50,
        height = 25,
        color,
        imageSize = 24,
        isFocus,
        borderWidth = 0.5
    } = props

  return (
    <TouchableOpacity
        style={{
            width: width,
            height: height,
            backgroundColor: color,
            position:"absolute",
            borderRadius: SIZES.small,
            borderColor: isFocus ? COLORS.orange : COLORS.background,
            borderBottomWidth: borderWidth,
            alignItems:"center",
            justifyContent:"center",
            right:rightStyle,
            top:topStyle
        }}
        onPress={handlePress}
    >
        <Text
            style={{
                fontFamily: FONTS.light,
                fontSize: SIZES.medium,
                color: COLORS.white,
                alignItems:"center"
            }}
        >
            {text}
        </Text>
    </TouchableOpacity>
  )
}