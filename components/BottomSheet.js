import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native'
import React, { useState } from 'react'
import { assets, COLORS, SIZES } from '../constants'
import { Animated } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { CircleButton, RectangleButton } from './Button'
import { CurrencyDropdown, DropdownComponent, SpendingTypeDropdown } from './DropdownComponent'
import { SPENDING_MODEL } from '../constants/model'

const {width, height} = Dimensions.get("screen")

const BottomSheet = (props) => {
    const{
        alignment, 
        close,
        addSpending
    } = props

    const [spendingData, setSpendingData] = useState(SPENDING_MODEL)
    const [currencyValue, setCurrencyValue] = useState(null);
    const [spendingTypeValue, setSpendingTypeValue] = useState(null);


    const setSpendingMoney = (value) => {
        if(value == "") setSpendingData({...spendingData, money: 0})
        else            setSpendingData({...spendingData, money: value})
    }

    const setSpendingCurrency = (value) => {
        setSpendingData({...spendingData, currency: value})
    }

    const setSpendingType = (value) => {
        setSpendingData({...spendingData, spendingType: value})
    }

    const setSpendingDate = (value) => {
        setTimeout(() => {
            setSpendingData({...spendingData, SpendingDate: new Date()})
        }, 10);
    }

    const setSpendingId = (value) => {
        setTimeout(() => {
            setSpendingData({...spendingData, id: getId()})
        }, 10);
    }

    const getId = () => {
        return Math.floor(Math.random() * 1000) + 1 ;
    }

    const sheetIntrepolate = (alignment.interpolate({
        inputRange: [0, 1],
        outputRange: [-height / 2.4, 0]
    }))

    const sheetStyle = {
        bottom: sheetIntrepolate
    }

    const hadnleSubmit = () => {
        setSpendingDate()
        setSpendingId()
        addSpending(spendingData) 
    }

    const hanleClose = () => {
        close()
        setSpendingData(SPENDING_MODEL)
        setCurrencyValue(null)
        setSpendingTypeValue(null)
    }

    return (
        <Animated.View style={[styles.container, sheetStyle]}>
            <CircleButton handlePress={hanleClose} imgUrl={assets.close} rightStyle={"2%"} topStyle={"2%"} size={30} color={COLORS.orange} />
            <View>
                <TextInput 
                    style={styles.textInput} 
                    placeholder={"Amount"} 
                    keyboardType={'numeric'} 
                    placeholderTextColor={COLORS.gray}
                    onChangeText={value => setSpendingMoney(value)}
                    value={spendingData.money != 0 && spendingData.money}
                />
                <CurrencyDropdown setSpendingCurrency={setSpendingCurrency} value={currencyValue} setValue={setCurrencyValue}/>
                <SpendingTypeDropdown setSpendingType={setSpendingType} value={spendingTypeValue} setValue={setSpendingTypeValue}/>
                <RectangleButton 
                    handlePress={hadnleSubmit} 
                    text={"Add Spending"} 
                    height={50}
                    width={"80%"} 
                    rightStyle={"10%"} 
                    topStyle={270} 
                    color={COLORS.orange} 
                />
            </View>
        </Animated.View>
    )
}

export default BottomSheet

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1c314f",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: height / 2.4,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },
    lineContainer:{
        marginVertical: 10,
        alignItems: "center",
    },
    line:{
        width: 50,
        borderTopWidth: 4,
        borderTopColor: "black",
        borderRadius: 20,
    },
    textInput: {
        height: 50,
        borderWidth: 1,
        borderColor: COLORS.orange,
        borderRadius: SIZES.small,
        padding: 8,
        width: "80%",
        top: 60,
        left: "10%",
        color: COLORS.white,
    }
})