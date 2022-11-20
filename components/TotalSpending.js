import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'

import {COLORS, SIZES, SHADOWS, assets, FONTS} from "../constants"
import { useNavigation } from '@react-navigation/native'
import { CircleButton, LineButton } from './Button'
import { CURRENCY_TYPES } from '../constants/currencies'

const TotalSpending = ({totalMoney, setType, type}) => {
    const navigation = useNavigation()
    const [isFocused, setIsFocused] = useState("₺")

  return (
    <View 
        style={{
            backgroundColor: COLORS.primary, 
            borderRadius: SIZES.font, 
            marginBottom: SIZES.extraLarge, 
            margin: SIZES.base, 
        }}
    >
        <View style={{ width:"100%", height: 100}}>
            <View>
                <LineButton text={"₺"}  rightStyle={"80%"}  topStyle={5}  borderWidth={1}  isFocus={isFocused === "₺"}  handlePress={() => {setType("Türk Lirası"), setIsFocused("₺")}}/>
                <LineButton text={"$"}  rightStyle={"70%"}  topStyle={5}  borderWidth={1}  isFocus={isFocused === "$"}  handlePress={() => {setType("Dolar"), setIsFocused("$")}}/>
                <LineButton text={"€"}  rightStyle={"60%"}  topStyle={5}  borderWidth={1}  isFocus={isFocused === "€"}  handlePress={() => {setType("Euro"), setIsFocused("€")}}/>
                <LineButton text={"£"}  rightStyle={"50%"}  topStyle={5}  borderWidth={1}  isFocus={isFocused === "£"}  handlePress={() => {setType("Pound"), setIsFocused("£")}}/>
            </View>
            <Text
                style={{
                    fontFamily: FONTS.bold,
                    fontSize: SIZES.extraLarge,
                    color: COLORS.white,
                    top:45,
                    left:50,
                }}
            >
                {CURRENCY_TYPES[type]} {totalMoney.toFixed(2)}
            </Text>
        </View> 
    </View>
  )
}

export default TotalSpending