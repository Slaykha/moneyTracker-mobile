import { useEffect, useState } from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import { assets, COLORS, FONTS, SIZES } from '../constants'
import { CURRENCY_VALUE } from '../constants/currencies'
import TotalSpending from './TotalSpending'

const Header = ({data}) => {

  const [totalMoney, setTotalMoney] = useState(0)

  const getTotalMoney = () => {
    var tempTotal = 0 
    data.map((spending) => tempTotal = tempTotal + (spending.money * CURRENCY_VALUE[spending.currency]))
    setTotalMoney(tempTotal)
  }

  useEffect(() => {
    getTotalMoney()
  }, [data])
  
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
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems:"center"
          }}
        >
          <View>

          </View>
        </View>

        <View
          style={{
            marginVertical: SIZES.font
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: SIZES.large,
              color: COLORS.white
            }}
          >
            Hello, Kadir
          </Text>
          <TotalSpending totalMoney={totalMoney}/>
          
        </View>
      </View>
    </ImageBackground>

  )
}

export default Header