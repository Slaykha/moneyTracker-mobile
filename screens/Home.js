import React, { useEffect, useState } from 'react'
import { View, FlatList, Animated } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CircleButton, FocusStatusBar, Header, Spendig } from '../components'
import AddSpending from '../components/AddSpending'
import EditSpending from '../components/EditSpending'
import {assets, COLORS, SpendingData} from "../constants"


const Home = () => {
  
  const [data, setData] = useState(SpendingData)
  const [currentSpendingData, setcurrentSpendingData] = useState({})

  const addSpending = (spending) => {
    if(spending.money != 0 && spending.currency != "" && spending.SpendigType != "") setData([...data, spending]) 
    else  console.log("Hata!")
  }

  const editSpending = (spending) => {
    if(spending.money != 0 && spending.currency != "" && spending.SpendigType != ""){
      let temp = data
      let index = data.map(item => item.id).indexOf(spending.id)
      temp[index] = spending
  
      setData(temp) 
    }
    
    else  console.log("Hata!") 
  }

  const deleteSpending = (spending) => {
    setData(data.filter(item => item.id !== spending.id))
  }

  const [alignmentAddNewSpending] = useState(new Animated.Value(0))
  const [alignmentEditSpending] = useState(new Animated.Value(0))

  const openAddNewSpendingSheet = () => {
      Animated.timing(alignmentAddNewSpending, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false
      }).start()
  }

  const closeAddNewSpendingSheet = () => {
    Animated.timing(alignmentAddNewSpending, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false
    }).start() 
  }

  const openEditSpendingSheet = () => {
    Animated.timing(alignmentEditSpending, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false
    }).start()
}

  const closeEditSpendingSheet = () => {
    Animated.timing(alignmentEditSpending, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false
    }).start() 
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={{flex:1}}>
      <FocusStatusBar background={COLORS.primary}/>

      <View style={{flex: 1}}>
        
          <View style={{zIndex: 0}}>
            <FlatList 
              data={data}
              renderItem={({item}) => <Spendig data={item} open={openEditSpendingSheet} setSpendingData={setcurrentSpendingData}/>}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={<Header data={data}/>}
            />
          </View>
        <View 
          style={{position:"absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1}}
        >
          <View style={{height: 300, backgroundColor: COLORS.background}}>
          </View>

          <View style={{flex: 1, backgroundColor: COLORS.background}}>
          </View>
        </View>
      </View>
      <CircleButton handlePress={openAddNewSpendingSheet} imgUrl={assets.add} topStyle={"90%"} rightStyle={25} size={50} color={COLORS.orange} imageSize={32} imageColor={COLORS.white}></CircleButton>

      <AddSpending alignment={alignmentAddNewSpending} close={closeAddNewSpendingSheet} addSpending={addSpending}/>
      <EditSpending alignment={alignmentEditSpending} close={closeEditSpendingSheet} spending={currentSpendingData} editSpending={editSpending} deleteSpending={deleteSpending}/>
    </SafeAreaView>
    </GestureHandlerRootView>
  )
}
//
export default Home