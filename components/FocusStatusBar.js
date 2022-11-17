import { StatusBar } from 'react-native'
import React from 'react'
import { useIsFocused } from '@react-navigation/native'

const FocusStatusBar = () => {
    const isFocused = useIsFocused()

    return (
        isFocused && <StatusBar animated={true}/>  
    )
}

export default FocusStatusBar