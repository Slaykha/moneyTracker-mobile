import React, { useState } from 'react';
  import { StyleSheet, Text, View } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from 'react-native-vector-icons/AntDesign';
import { COLORS, SIZES } from '../constants';

const currencyOptions = [
    { label: "Türk Lirası", value: "1" },
    { label: "Dolar", value: "2" },
    { label: "Euro", value: "3" },
    { label: "Pound", value: "4" },
];

const spendingOptions = [
    {label: "Market", value: "1"},
    {label: "Shopping", value: "2"},
    {label: "Online Shopping", value: "3"},
    {label: "Restaurant", value: "4"},
    {label: "Food", value: "5"},
    {label: "Cafe", value: "6"},
    {label: "other", value: "7"},
];

export const CurrencyDropdown = ({setSpendingCurrency, value, setValue}) => {
    const [isFocus, setIsFocus] = useState(false);

    console.log()
    return (
      <View style={styles.container}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={currencyOptions}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Select Currency" : "..."}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setSpendingCurrency(item.label)
            setIsFocus(false);
          }}
        />
      </View>
    );
};

export const SpendingTypeDropdown = ({setSpendingType, value, setValue}) => {
    const [isFocus, setIsFocus] = useState(false);

    console.log()
    return (
      <View style={[styles.container, {top: 100}]}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={spendingOptions}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Select Spending Type" : "..."}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setSpendingType(item.label)
            setIsFocus(false);
          }}
        />
      </View>
    );
};

const styles = StyleSheet.create({
    container:{
        top: 80,
        paddingHorizontal: "10%",
    },
    dropdown: {
      height: 50,
      borderColor: COLORS.orange,
      borderWidth: 1,
      borderRadius: SIZES.small,
      paddingHorizontal: 8,
    },
    placeholderStyle: {
      fontSize: 16,
      color: COLORS.gray
    },
    selectedTextStyle: {
      fontSize: 16,
      color: COLORS.white
    },
});
