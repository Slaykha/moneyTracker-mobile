import { View, Text, Image, ImageBackground } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'
import TotalSpending from './TotalSpending'

const Header = () => {
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
        <TotalSpending totalMoney={450}/>
        
      </View>
    </View>
        </ImageBackground>

  )
}

export default Header