import { useEffect, useState } from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'
import { CURRENCY_VALUE } from '../constants/currencies'
import TotalSpending from './TotalSpending'

const Header = ({data}) => {

  const [totalMoney, setTotalMoney] = useState(0)

  const getTotalMoney = () => {
    data.map((spending) => setTotalMoney(totalMoney + (spending.money * CURRENCY_VALUE[spending.currency])))
  }

  useEffect(() => {
    getTotalMoney()
  }, [data])
  
  return (
    <ImageBackground
      source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvZvfb5VvHYMO-O0bE3_396-0zlaiNwsyhhA&usqp=CAU"}} 
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