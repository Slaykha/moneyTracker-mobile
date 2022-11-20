import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import { assets, COLORS, FONTS, SIZES } from '../constants'
import { CURRENCY_VALUE } from '../constants/currencies'
import { CircleButton } from './Button'
import TotalSpending from './TotalSpending'

const Header = ({data}) => {
  const navigation = useNavigation()

  const [totalMoney, setTotalMoney] = useState(0)
  const [type, setType] = useState("Türk Lirası")

  useEffect(() => {
    getTotalMoney(type)
  }, [data])
  
  useEffect(() => {
    getTotalMoney(type)
  }, [type])

  const getTotalMoney = (type) => {
    var tempTotal = 0 
    data.map((spending) => tempTotal = tempTotal + (spending.money * CURRENCY_VALUE[spending.currency]))
    if(type === "Türk Lirası"){
      setTotalMoney(tempTotal)
    }else if(type === "Dolar"){
      setTotalMoney(tempTotal / CURRENCY_VALUE["Dolar"])
    }else if(type === "Euro"){
      setTotalMoney(tempTotal / CURRENCY_VALUE["Euro"])
    }else if(type === "Pound"){
      setTotalMoney(tempTotal / CURRENCY_VALUE["Pound"])
    }
  }
  
  return (
    <ImageBackground
      source={assets.background} 
      resizeMode="cover"  
    >
      <View 
        style={{
          padding: SIZES.font
        }}
      >
        <View
          style={{
            marginVertical: SIZES.font
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: SIZES.large,
              color: COLORS.white,
            }}
          >
            Hello, Kadir
          </Text>
          <CircleButton color={COLORS.white} topStyle={-5} rightStyle={5} size={45} imgUrl={assets.person01} imageSize={40} handlePress={() => navigation.navigate("Profile")} ZIndex={99} />
          <TotalSpending totalMoney={totalMoney} setType={setType} type={type}/>
          
        </View>
      </View>
    </ImageBackground>

  )
}

export default Header