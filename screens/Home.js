import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FocusStatusBar, Header, Spendig } from '../components'
import {COLORS, SpendingData} from "../constants"


const Home = () => {

  return (
    <SafeAreaView style={{flex:1}}>
      <FocusStatusBar background={COLORS.primary}/>

      <View style={{flex: 1}}>
        
          <View style={{zIndex: 0}}>
            <FlatList 
              data={SpendingData}
              renderItem={({item}) => <Spendig data={item}/>}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={<Header data={SpendingData}/>}
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
    </SafeAreaView>
  )
}

export default Home